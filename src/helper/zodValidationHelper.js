import _ from "lodash";
import { z } from "zod";

// Function to generate Zod schema from JSON definition
const createZodSchema = (flatFieldObjectList) => {
  if (!Array.isArray(flatFieldObjectList)) {
    throw new Error("flatFieldObjectList must be an array");
  }

  const invalidValidationFieldObject = {};

  const convertToZodType = (field) => {
    const dataMappingName = field.dataMappingName || field.name;
    try {
      if (
        field.validationType &&
        typeof z[field.validationType] === "function"
      ) {
        let validator = z[field.validationType]();

        // Apply validations
        field.validations?.forEach(({ type, params }) => {
          if (typeof validator[type] === "function") {
            validator = validator[type](...(params || []));
          }
        });

        return [dataMappingName, validator];
      } else {
        invalidValidationFieldObject[
          dataMappingName
        ] = `Unsupported validation type: ${field.validationType}`;
        return null;
      }
    } catch (error) {
      invalidValidationFieldObject[dataMappingName] = error.message;
      return null;
    }
  };

  const allSchemaEntries = flatFieldObjectList.map(convertToZodType);
  const validSchemaEntries = allSchemaEntries.filter(Boolean);
  const schemaObject = z.object(Object.fromEntries(validSchemaEntries));
  return { schemaObject, invalidValidationFieldObject };
};

// Function to validate data and return errors
export const validateDataWithZod = (flatFieldObjectList, dataObject) => {
  try {
    const formDataObject = {};

    flatFieldObjectList.forEach((field) => {
      const dataMappingName = field.dataMappingName || field.name;
      const value = _.get(dataObject, dataMappingName);
      formDataObject[dataMappingName] = value;
    });

    const { schemaObject } = createZodSchema(flatFieldObjectList);

    schemaObject.parse(formDataObject);
    return {}; // No errors, return empty object
  } catch (error) {
    // Convert Zod validation errors into a key-value object
    return error.errors.reduce((acc, err) => {
      acc[err.path[0]] = err.message;
      return acc;
    }, {});
  }
};

export const getValidationErrorForFieldWithZod = async (item, value) => {
  const dataMappingName = item.dataMappingName || item.name;
  const errorMessageObject = await validateDataWithZod([item], {
    [dataMappingName]: value,
  });

  return {
    dataMappingName: dataMappingName,
    errorMessage: _.get(errorMessageObject, dataMappingName, ""),
  };
};

/**
 * Function to flatten the bookKeepingSchema and return a list of field information
 * @param {Object} schema - The bookKeepingSchema object
 * @returns {Array} - A flat list of field information
 */
export const getFieldObjectListFromSchema = (schema) => {
  const flatList = [];

  const traverseSchema = (node) => {
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach((child) => traverseSchema(child));
    } else {
      flatList.push({
        ...node,
        label: node.label,
        type: node.type,
        dataMappingName: node.dataMappingName,
        validationType: node.validationType,
        validations: node.validations,
        readOnly: node.readOnly,
        isMultilingual: node.isMultilingual,
      });
    }
  };

  traverseSchema(schema);
  return flatList;
};

export const getValidationErrorForSchemaWithZod = async (
  schema,
  dataObject
) => {

  const fieldList = getFieldObjectListFromSchema(schema);

  const errorMessageObject = await validateDataWithZod(fieldList, dataObject);

return errorMessageObject;
};
