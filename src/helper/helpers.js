import { GENERIC, FOOD_BEWERAGE, TEXTILE, SOFTWARE } from 'src/helper/constants/constants';
import _ from 'lodash';
import generic from "./productSchema/generic";
import foodBewerage from "src/helper/productSchema/foodBewerage";
import textile from "./productSchema/textile";
import software from "src/helper/productSchema/software";
import { commonComponentSchema } from './productSchema/commonComponentSchema';

/**
 * return product Schema based on productType
 */
export const getProductSchemaBaseOnProductType = (productSchemaType) => {
  if (productSchemaType === GENERIC) {
    return generic
  }
  else if (productSchemaType === FOOD_BEWERAGE) {
    return foodBewerage;
  }
  else if (productSchemaType === TEXTILE) {
    return textile;
  }
  else if (productSchemaType === SOFTWARE) {
    return software;
  }
  else {
    return [];
  }
}

/**
* @param {*} selectedProductSchema 
* @returns converted product schema
*/
export const getProduct_flatten_TabStructured_Schema = (productSchema) => {
  const productFlattenSchema = getMergedComponent_updatedNameValue_flattenJson(productSchema)
  /**
   * @description UPIDS PDM
   */
  const productTabStructuredSchema = [
    /**
    {
      parentTab: "parentTabName",
      childTabList: [
        {
          tabname: "",
          fieldList: []
        }
      ]
    },
    {
      tabName: "tabNameTabName",
      fieldList: []
    }
    */
  ]

  productFlattenSchema && productFlattenSchema[0] && productFlattenSchema.forEach((item) => {

    if (item.parentTab && item.tabName) {
      /** adding ParentTabs (main menu tab) */
      if (!_.find(productTabStructuredSchema, (tab) => tab.tabName === item.parentTab)) {
        productTabStructuredSchema.push(
          {
            tabName: item.parentTab,
            childTabList: [
              // {
              //   tabname: "",
              //   fieldList: []
              // }
            ]
          }
        )
      }

      /** adding childTabs (submenu tab) */
      const parentTabIndex = _.findIndex(productTabStructuredSchema, (tab) => tab.tabName === item.parentTab)
      if (!_.find(productTabStructuredSchema[parentTabIndex].childTabList, (tab) => tab.tabName === item.tabName)) {
        productTabStructuredSchema[parentTabIndex].childTabList.push(
          {
            tabName: item.tabName,
            fieldList: []
          }
        )
      }

      /** adding field in childTabs */
      const childTabIndex = _.findIndex(productTabStructuredSchema[parentTabIndex].childTabList, (tab) => tab.tabName === item.tabName)
      productTabStructuredSchema[parentTabIndex].childTabList[childTabIndex].fieldList.push(item)
    } else if (item.tabName) {
      /** add tab */
      if (!_.find(productTabStructuredSchema, (tab) => tab.tabName === item.tabName)) {
        productTabStructuredSchema.push(
          {
            tabName: item.tabName,
            fieldList: []
          }
        )
      }


      /** adding field in tabs */
      const tabIndex = _.findIndex(productTabStructuredSchema, (tab) => tab.tabName === item.tabName)
      productTabStructuredSchema[tabIndex].fieldList.push(item)
    }
  })



  /**
 * @description UPIDS IO
 */
  const upidsIoProductTabStructuredSchema = [
    /** 
      {
        tabName: "parentTabName",
        fieldOrder: 0,
        tabIcon: "bi bi-house",
        tabRequired: false,
        fieldList: [
          // field Containes subsection
          {
            section: "",
          sectionRequired: false,
            fieldOrder: 0,
            fieldList: [
              {
                subSection: "",
                fieldOrder: 0,
                fieldList: [{ name: "", fieldOrder: 0 }]
              }
            ]
          },
          // field Containes section
          {
            section: "",
            fieldList: [
              { name: "", fieldOrder: 0 }
            ]
          },
          // directly field
          {
            name: ""
            fieldOrder: 0
          },
        ],
      },
      */
  ]



  productFlattenSchema && productFlattenSchema[0] && productFlattenSchema.forEach((item) => {
    const tabName = _.get(item, 'upidsIo.tabName', "")
    const tabIcon = _.get(item, 'upidsIo.tabIcon', "")
    const tabRequired = _.get(item, "upidsIo.tabRequired", false)

    const section = _.get(item, 'upidsIo.section', "")
    const sectionTitle = _.get(item, 'upidsIo.sectionTitle', false)
    const sectionRequired = _.get(item, "upidsIo.sectionRequired", false)
    const swiperSlide = _.get(item, 'upidsIo.swiperSlide', false)

    const subSection = _.get(item, 'upidsIo.subSection', "")
    const subSectionTitle = _.get(item, 'upidsIo.subSectionTitle', false)

    const fieldOrder = _.get(item, 'upidsIo.fieldOrder', null)

    if (tabName && section && subSection) {
      /** add tab */
      const isTabNameExist = _.find(upidsIoProductTabStructuredSchema, (element) => element.tabName === tabName)
      if (!isTabNameExist) {
        upidsIoProductTabStructuredSchema.push(
          {
            tabName: tabName,
            fieldOrder: fieldOrder,
            tabIcon: tabIcon,
            fieldList: []
          }
        )
      }

      const tabNameIndex = _.findIndex(upidsIoProductTabStructuredSchema, (element) => element.tabName === tabName)
      if (tabRequired) {
        upidsIoProductTabStructuredSchema[tabNameIndex].tabRequired = true
      }

      /** adding section */
      const isSectionExists = _.find(upidsIoProductTabStructuredSchema[tabNameIndex].fieldList, (element) => element.section === section)
      if (!isSectionExists) {
        upidsIoProductTabStructuredSchema[tabNameIndex].fieldList.push(
          {
            section: section,
            fieldOrder: fieldOrder,
            sectionTitle: sectionTitle,
            swiperSlide: swiperSlide,
            fieldList: []
          }
        )
      }

      const sectionIndex = _.findIndex(upidsIoProductTabStructuredSchema[tabNameIndex].fieldList, (element) => element.section === section)
      if (sectionRequired) {
        upidsIoProductTabStructuredSchema[tabNameIndex].fieldList[sectionIndex].sectionRequired = true
      }
      /** adding subSection */
      const isSubSectionExists = _.find(upidsIoProductTabStructuredSchema[tabNameIndex].fieldList[sectionIndex].fieldList, (element) => element.subSection === subSection)
      if (!isSubSectionExists) {
        upidsIoProductTabStructuredSchema[tabNameIndex].fieldList[sectionIndex].fieldList.push(
          {
            subSection: subSection,
            subSectionTitle: subSectionTitle,
            fieldOrder: fieldOrder,
            fieldList: []
          }
        )
      }

      /** adding field in fieldList */
      const subsectionIndex = _.findIndex(upidsIoProductTabStructuredSchema[tabNameIndex].fieldList[sectionIndex].fieldList, (element) => element.subSection === subSection)
      upidsIoProductTabStructuredSchema[tabNameIndex].fieldList[sectionIndex].fieldList[subsectionIndex].fieldList.push({ ...item, fieldOrder: fieldOrder })


    }
    else if (tabName && section) {
      /** add tab */
      const isTabNameExist = _.find(upidsIoProductTabStructuredSchema, (element) => element.tabName === tabName)
      if (!isTabNameExist) {
        upidsIoProductTabStructuredSchema.push(
          {
            tabName: tabName,
            fieldOrder: fieldOrder,
            tabIcon: tabIcon,
            fieldList: []
          }
        )
      }

      const tabNameIndex = _.findIndex(upidsIoProductTabStructuredSchema, (element) => element.tabName === tabName)
      if (tabRequired) {
        upidsIoProductTabStructuredSchema[tabNameIndex].tabRequired = true
      }
      /** adding section */
      const isSectionExists = _.find(upidsIoProductTabStructuredSchema[tabNameIndex].fieldList, (element) => element.section === section)
      if (!isSectionExists) {
        upidsIoProductTabStructuredSchema[tabNameIndex].fieldList.push(
          {
            section: section,
            fieldOrder: fieldOrder,
            sectionTitle: sectionTitle,
            swiperSlide: swiperSlide,
            fieldList: []
          }
        )
      }

      const sectionIndex = _.findIndex(upidsIoProductTabStructuredSchema[tabNameIndex].fieldList, (element) => element.section === section)
      if (sectionRequired) {
        upidsIoProductTabStructuredSchema[tabNameIndex].fieldList[sectionIndex].sectionRequired = true
      }
      /** adding field in fieldList */
      upidsIoProductTabStructuredSchema[tabNameIndex].fieldList[sectionIndex].fieldList.push({ ...item, fieldOrder: fieldOrder })
    }
    else if (tabName) {
      /** add tab */
      const isTabNameExist = _.find(upidsIoProductTabStructuredSchema, (element) => element.tabName === tabName)
      if (!isTabNameExist) {
        upidsIoProductTabStructuredSchema.push(
          {
            tabName: tabName,
            fieldOrder: fieldOrder,
            tabIcon: tabIcon,
            fieldList: []
          }
        )
      }

      const tabNameIndex = _.findIndex(upidsIoProductTabStructuredSchema, (element) => element.tabName === tabName)
      if (tabRequired) {
        upidsIoProductTabStructuredSchema[tabNameIndex].tabRequired = true
      }
      /** adding field in fieldList */
      upidsIoProductTabStructuredSchema[tabNameIndex].fieldList.push({ ...item, fieldOrder: fieldOrder })

    }
  })

  /** adding childTabs (submenu tab) */


  /**
   * @description sort according to fieldOrder
   */



  const handleFieldListRecurssionItemToOrder = (item) => {

    if (item && item.fieldList && item.fieldList[0]) {
      const orderedFieldList = _.orderBy(item.fieldList, ['fieldOrder',], ['asc',]);
      const newFieldList = orderedFieldList.map((element) => {
        const newElementList = handleFieldListRecurssionItemToOrder(element)
        return newElementList
      })
      const newItem = {
        ...item,
        fieldList: newFieldList,
      }
      return newItem

    }
    else {
      return item
    }
  }

  const upidsIoProductTabStructuredOrderdSchema = _.orderBy(upidsIoProductTabStructuredSchema, ['fieldOrder',], ['asc',]).map((tabItem) => {
    const newItem = handleFieldListRecurssionItemToOrder(tabItem)
    return newItem
  })




  return { productFlattenSchema, productTabStructuredSchema, upidsIoProductTabStructuredSchema: upidsIoProductTabStructuredOrderdSchema }
}

/**
* @param {*} productSchema 
* @returns updatedNameFlattenSchema
*/
const getMergedComponent_updatedNameValue_flattenJson = (productSchema) => {
  let updatedFlattenSchema = []

  const objectHandle = (fieldObject, parentName) => {
    if (fieldObject.tabName && fieldObject.type) {
      const nameUpdated = parentName ? `${parentName}.${fieldObject.name}` : `${fieldObject.name}`
      let newItemObject = { ...fieldObject, nameUpdated: nameUpdated }

      const componentfieldItem = commonComponentSchema.find((componentItem) => componentItem.name === fieldObject.name)
      if (componentfieldItem) {
        newItemObject = { ...newItemObject, ...componentfieldItem }
      }

      updatedFlattenSchema.push(newItemObject)
    }
    else {
      try {
        Object.entries(fieldObject).map(([key, value]) => {
          const newParentName = parentName ? `${parentName}.${key}` : `${key}`
          if (value?.length) {
            value && value[0] && value.map(itemObject => {
              objectHandle(itemObject, newParentName)
            })
          } else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            objectHandle(value, newParentName)
          }
        })
      } catch (error) {
        const nameUpdated = parentName ? `${parentName}.${fieldObject.name}` : `${fieldObject.name}`
        updatedFlattenSchema.push({ ...fieldObject, nameUpdated })
      }
    }
  }

  productSchema.map((fieldObject) => {
    return objectHandle(fieldObject, "")
  })

  updatedFlattenSchema = updatedFlattenSchema.map((fieldItem) => {
    if (fieldItem.dependsOnName) {
      const dependsOnObject = updatedFlattenSchema.find((item) => item.name === fieldItem.dependsOnName)
      const newFieldItem = { ...fieldItem, dependsOnNameUpdated: dependsOnObject.nameUpdated }
      return newFieldItem
    }
    return fieldItem
  })


  return updatedFlattenSchema
}

export const getSpecificFlattenSchemaPath_ObjectForItemName = (productFlattenSchema, itemNameUpdated) => {
  let fieldObject = {}
  let fieldPath = ''

  productFlattenSchema.forEach((item, index) => {
    if (item.nameUpdated === itemNameUpdated) {
      fieldObject = item
      fieldPath = `[${index}]`
    }
  })

  return { fieldObject, fieldPath, }
}