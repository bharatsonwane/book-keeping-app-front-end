import * as yup from "yup";
import _ from 'lodash';


export const validateYupSchemaObject = async (yupSchemaObject, formData) => {
    try {
      await yupSchemaObject.validate(formData, { abortEarly: false })
      return { errorMessageObject: {} }
    }
    catch (error) {
      const errorMessageArray = error.inner;
      const errorMessageObject = {}
  
      errorMessageArray && errorMessageArray[0] && errorMessageArray.forEach((item) => {
        let itemPath
        try {
          const pathArray = JSON.parse(item.path)
          itemPath = pathArray[0]
        } catch (error) {
          itemPath = item.path
        }
        _.set(errorMessageObject, itemPath, item.message)
      })
      return { errorMessageObject: errorMessageObject, }
    }
}


/**
 * get validation error object for yup validation
 * @param {*} formFlattenJsonArray 
 * @param {*} formData 
 * @returns { errorMessageObject, errorFieldList }
 */
export const getValidationErrorObjectForYup = async (formFlattenJsonArray, formData) => {
  const updatedFormFlattenJsonArray = formFlattenJsonArray.map((item) => {
    const newItem = {
      ...item,
      dataMappingName: item.dataMappingName ? item.dataMappingName : item.name
    }
    return newItem
  })

  try {
    formData = formData ? formData : {}
    if (updatedFormFlattenJsonArray && updatedFormFlattenJsonArray[0]) {
      const newFormData = {}
      updatedFormFlattenJsonArray.forEach((item) => {
        const value = _.get(formData, item.dataMappingName)
        newFormData[item.dataMappingName] = value
      })

      const yepSchema = updatedFormFlattenJsonArray.reduce(createYupSchema, {});
      const validateSchema = yup.object().shape(yepSchema);
      await validateSchema.validate(newFormData, { abortEarly: false })
    }
    return { errorMessageObject: {}, errorFieldList: [] }
  } catch (error) {
    const errorMessageArray = error.inner;
    const errorMessageObject = {}
    const errorFieldList = []

    errorMessageArray && errorMessageArray[0] && errorMessageArray.forEach((item) => {
      let itemPath
      try {
        const pathArray = JSON.parse(item.path)
        itemPath = pathArray[0]
      } catch (error) {
        itemPath = item.path
      }
      const errorFieldObject = updatedFormFlattenJsonArray.find((item) => item.dataMappingName === itemPath)
      errorFieldList.push(errorFieldObject)
      _.set(errorMessageObject, itemPath, item.message)
    })
    return { errorMessageObject: errorMessageObject, errorFieldList: errorFieldList }
  }
}

export function createYupSchema(schema, config) {
  const { dataMappingName, validationType, validations = [] } = config;
  const newValidations = [
    ...validations,
    {
      type: "nullable",
      params: ["Please enter valid information"],
    }
  ]

  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]();
  newValidations.forEach(validation => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });
  schema[dataMappingName] = validator;
  return schema;
}

/**
 * @param {*} fieldObject 
 * @param {*} fieldValue 
 * @returns {dataMappingName, errorMessage}
 */
export const getValidationErrorForFieldForYup = async (fieldObject, fieldValue) => {
  const newFieldValue = {}
  const dataMappingName = fieldObject.dataMappingName ? fieldObject.dataMappingName : fieldObject.name;
  _.set(newFieldValue, dataMappingName, fieldValue)
  const { errorMessageObject } = await getValidationErrorObjectForYup([fieldObject], newFieldValue)
  return { dataMappingName: dataMappingName, errorMessage: _.get(errorMessageObject, dataMappingName, "") }
}
  