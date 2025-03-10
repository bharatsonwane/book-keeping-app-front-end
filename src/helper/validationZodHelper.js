import _ from "lodash";
import { z } from "zod";

// Function to generate Zod schema from JSON definition
const createZodSchema = (schemaJson) => {
  if (!Array.isArray(schemaJson)) {
    throw new Error("schemaJson must be an array");
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

  const allSchemaEntries = schemaJson.map(convertToZodType);
  const validSchemaEntries = allSchemaEntries.filter(Boolean);
  const schemaObject = z.object(Object.fromEntries(validSchemaEntries));
  return { schemaObject, invalidValidationFieldObject };
};

// Function to validate data and return errors
const validateDataWithZod = (schemaJson, dataObject) => {
  try {
    const formDataObject = {};

    schemaJson.forEach((field) => {
      const dataMappingName = field.dataMappingName || field.name;
      const value = _.get(dataObject, dataMappingName);
      formDataObject[dataMappingName] = value;
    });

    const { schemaObject } = createZodSchema(schemaJson);

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

export const getValidationErrorForFieldForZod = async (item, value) => {
  const dataMappingName = item.dataMappingName || item.name;
  const errorMessageObject = await validateDataWithZod([item], {
    [dataMappingName]: value,
  });

  return {
    dataMappingName: dataMappingName,
    errorMessage: _.get(errorMessageObject, dataMappingName, ""),
  };
};

// Example schema definition
// const exampleSchemaJSON = [
//   {
//     validationType: "string",
//     name: "firstName",
//     validations: [
//       { type: "min", params: [2, "Must be at least 2 characters"] },
//       { type: "max", params: [50, "Must be at most 50 characters"] },
//       { type: "regex", params: [/^[a-zA-Z]+$/, "Only alphabets allowed"] },
//       { type: "trim" },
//     ],
//     type: "text",
//   },
//   {
//     validationType: "string",
//     name: "lastName",
//     validations: [
//       { type: "min", params: [3, "Must be at least 3 characters"] },
//       { type: "max", params: [50, "Must be at most 50 characters"] },
//       { type: "regex", params: [/^[a-zA-Z]+$/, "Only alphabets allowed"] },
//       { type: "trim" },
//     ],
//     type: "text",
//   },
// ];

// // Example data input
// const exampleData = { firstName: "J", lastName: "9" };

// // Validate data and get errors
// const errors = validateDataWithZod(exampleSchemaJSON, exampleData);
// console.log("Validation Errors:", errors);
