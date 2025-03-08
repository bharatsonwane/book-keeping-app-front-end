import _ from 'lodash';
import { updatedFlattenSchemaFormItemAction } from 'src/slice/schema';
// import {
//     getAllSegmentList, getFamilyDependsOnSegmanetAction, getClassDependsOnFamilyAction, getBrickDependsOnClassAction, getSpecificMetadataServer,
//     getNutritionalClaimsMetadataAction
// } from "src/redux/products/productThunk";

export const commonComponentSchema = [
    {
        name: "_2an",
        updateData: {
            getUpdatedFormItem: async ({ formItem, formValueObject, dispatch }) => {
                const gtin = _.get(formValueObject, "gtin", "")
                if (gtin) {
                    const newFormItem = { ...formItem, validations: [] }
                    dispatch(updatedFlattenSchemaFormItemAction({ formField: newFormItem }))
                    return newFormItem;
                }
            }
        }
    },
    {
        name: "gtin",
        updateData: {
            getUpdatedFormItem: async ({ formItem, formValueObject, dispatch }) => {
                const gtin = _.get(formValueObject, "gtin", "")
                if (gtin) {
                    const newFormItem = { ...formItem, validations: [] }
                    dispatch(updatedFlattenSchemaFormItemAction({ formField: newFormItem }))
                    return newFormItem;
                } 
                else {
                    const newFormItem = { ...formItem, readOnly: false }
                    dispatch(updatedFlattenSchemaFormItemAction({ formField: newFormItem }))
                    return newFormItem;
                }
            }
        }
    },
    // {
    //     name: "segmentCode.id",
    //     updateData: {
    //         getUpdatedFormItem: async ({ formItem, dispatch }) => {
    //             const responseData = await dispatch(getAllSegmentList({
    //                 collectionName: "categories",
    //                 locale: "en",
    //             })).unwrap()

    //             const { segmentListEn, segmentListFi, segmentListSv } = responseData
    //             const tempSegment = [...segmentListEn, ...segmentListFi, ...segmentListSv]

    //             const uniqueSegmentCode = [...new Set(tempSegment.map(item => item.segmentCode))]


    //             const options = uniqueSegmentCode.map((segmentCode) => {
    //                 const objectEn = segmentListEn.find((element) => element.segmentCode === segmentCode)
    //                 const labelEn = _.get(objectEn, "segmentDescription", "")

    //                 const objectFi = segmentListFi.find((element) => element.segmentCode === segmentCode)
    //                 const labelFi = _.get(objectFi, "segmentDescription", "")

    //                 const objectSv = segmentListSv.find((element) => element.segmentCode === segmentCode)
    //                 const labelSv = _.get(objectSv, "segmentDescription", "")

    //                 const item = {
    //                     value: segmentCode,
    //                     label: {
    //                         en: labelEn ? labelEn : segmentCode,
    //                         fi: labelFi ? labelFi : labelEn,
    //                         sv: labelSv ? labelSv : labelEn,
    //                     }
    //                 }

    //                 return item

    //             })

    //             // const newOptionList = options.map((item) => {
    //             //     const newItem = { ...item, label: item.title, value: item.id }
    //             //     return newItem
    //             // })

    //             const newFormItem = { ...formItem, options: options }
    //             return newFormItem;
    //         }

    //     },
    // },
    // {
    //     name: "familyCode.id",
    //     updateData: {
    //         getUpdatedFormItem: async ({ formItem, dispatch, dependsOnValue }) => {
    //             if (!dependsOnValue) {
    //                 return null
    //             }
    //             const responseData = await dispatch(getFamilyDependsOnSegmanetAction({
    //                 collectionName: 'categories',
    //                 // locale: 'en',
    //                 segmentCode: dependsOnValue.id ? dependsOnValue.id : dependsOnValue
    //             })).unwrap()
    //             const { familyListEn, familyListFi, familyListSv } = responseData
    //             const familyAll = [...familyListEn, ...familyListFi, ...familyListSv]

    //             const uniqueFamilyCode = [...new Set(familyAll.map(item => item.familyCode))]


    //             const options = uniqueFamilyCode.map((familyCode) => {
    //                 const objectEn = familyListEn.find((element) => element.familyCode === familyCode)
    //                 const labelEn = _.get(objectEn, "familyDescription", "")

    //                 const objectFi = familyListFi.find((element) => element.familyCode === familyCode)
    //                 const labelFi = _.get(objectFi, "familyDescription", "")

    //                 const objectSv = familyListSv.find((element) => element.familyCode === familyCode)
    //                 const labelSv = _.get(objectSv, "familyDescription", "")

    //                 const item = {
    //                     value: familyCode,
    //                     label: {
    //                         en: labelEn ? labelEn : familyCode,
    //                         fi: labelFi ? labelFi : labelEn,
    //                         sv: labelSv ? labelSv : labelEn,
    //                     }
    //                 }

    //                 return item;

    //             })
    //             const newFormItem = { ...formItem, options: options }
    //             return newFormItem;
    //         }
    //     },
    // },
    // {
    //     name: "classCode.id",
    //     updateData: {
    //         getUpdatedFormItem: async ({ formItem, dispatch, dependsOnValue }) => {
    //             if (!dependsOnValue) {
    //                 return null
    //             }
    //             const responseData = await dispatch(getClassDependsOnFamilyAction({
    //                 collectionName: 'categories',
    //                 // locale: 'en',
    //                 familyCode: dependsOnValue.id ? dependsOnValue.id : dependsOnValue
    //             })).unwrap()
    //             const { classListEn, classListFi, classListSv } = responseData
    //             const classAll = [...classListEn, ...classListFi, ...classListSv]

    //             const uniqueclassCode = [...new Set(classAll.map(item => item.classCode))]


    //             const options = uniqueclassCode.map((classCode) => {
    //                 const objectEn = classListEn.find((element) => element.classCode === classCode)
    //                 const labelEn = _.get(objectEn, "classDescription", "")

    //                 const objectFi = classListFi.find((element) => element.classCode === classCode)
    //                 const labelFi = _.get(objectFi, "classDescription", "")

    //                 const objectSv = classListSv.find((element) => element.classCode === classCode)
    //                 const labelSv = _.get(objectSv, "classDescription", "")

    //                 const item = {
    //                     value: classCode,
    //                     label: {
    //                         en: labelEn ? labelEn : classCode,
    //                         fi: labelFi ? labelFi : labelEn,
    //                         sv: labelSv ? labelSv : labelEn,
    //                     }
    //                 }
    //                 return item;
    //             })
    //             const newFormItem = { ...formItem, options: options }
    //             return newFormItem;
    //         }
    //     },
    // },
    // {
    //     name: "categoryCode.id",
    //     updateData: {
    //         getUpdatedFormItem: async ({ formItem, dispatch, dependsOnValue }) => {
    //             if (!dependsOnValue) {
    //                 return null
    //             }
    //             const responseData = await dispatch(getBrickDependsOnClassAction({
    //                 collectionName: 'categories',
    //                 // locale: 'en',
    //                 classCode: dependsOnValue.id ? dependsOnValue.id : dependsOnValue
    //             })).unwrap()
    //             const { brickListEn, brickListFi, brickListSv } = responseData
    //             const brickAll = [...brickListEn, ...brickListFi, ...brickListSv]

    //             const uniquebrickCode = [...new Set(brickAll.map(item => item.brickCode))]


    //             const options = uniquebrickCode.map((brickCode) => {
    //                 const objectEn = brickListEn.find((element) => element.brickCode === brickCode)
    //                 const labelEn = _.get(objectEn, "brickDescription", "")

    //                 const objectFi = brickListFi.find((element) => element.brickCode === brickCode)
    //                 const labelFi = _.get(objectFi, "brickDescription", "")

    //                 const objectSv = brickListSv.find((element) => element.brickCode === brickCode)
    //                 const labelSv = _.get(objectSv, "brickDescription", "")

    //                 const item = {
    //                     value: brickCode,
    //                     label: {
    //                         en: labelEn ? labelEn : brickCode,
    //                         fi: labelFi ? labelFi : labelEn,
    //                         sv: labelSv ? labelSv : labelEn,
    //                     }
    //                 }
    //                 return item
    //             })
    //             const newFormItem = { ...formItem, options: options }
    //             return newFormItem;
    //         }
    //     },
    // },
    // {
    //     name: "list.contains",
    //     updateData: {
    //         getUpdatedFormItem: async ({ formItem, dispatch }) => {
    //             const responseData = await dispatch(getSpecificMetadataServer({ collectionName: 'allergens', })).unwrap()
    //             const { metadataEn, metadataFi, metadataSv } = responseData
    //             const metadataAll = [...metadataEn, ...metadataFi, ...metadataSv]

    //             const uniqueMetadataCode = [...new Set(metadataAll.map(item => item.code))]


    //             const options = uniqueMetadataCode.map((code, index) => {
    //                 const objectEn = metadataEn.find((element) => element.code === code)
    //                 const labelEn = _.get(objectEn, "name", "")

    //                 const objectFi = metadataFi.find((element) => element.code === code)
    //                 const labelFi = _.get(objectFi, "name", "")

    //                 const objectSv = metadataSv.find((element) => element.code === code)
    //                 const labelSv = _.get(objectSv, "name", "")

    //                 const getContent = (object) => {
    //                     return (
    //                         <>
    //                             <div key={index}>
    //                                 <span style={{ display: "block", fontWeight: 'normal', fontSize: 14, }}>{_.get(object, "name", "")}</span>
    //                                 <span style={{ display: "block", fontWeight: 'normal', fontSize: 12, marginTop: 4, color: '#6489A0', }}>{code}</span>
    //                                 <span style={{ display: "block", fontWeight: 'lighter', fontSize: 12, marginTop: 4, color: '#6489A0', }}>{_.get(object, "description", "")}</span>
    //                             </div>
    //                         </>
    //                     )
    //                 }

    //                 const item = {
    //                     value: code,
    //                     label: {
    //                         en: labelEn ? labelEn : code,
    //                         fi: labelFi ? labelFi : labelEn,
    //                         sv: labelSv ? labelSv : labelEn,
    //                     },
    //                     content: {
    //                         en: getContent(objectEn),
    //                         fi: objectFi ? getContent(objectFi) : getContent(objectEn),
    //                         sv: objectSv ? getContent(objectSv) : getContent(objectEn),
    //                     }
    //                 }
    //                 return item
    //             })


    //             // const optionsTest = [
    //             //     { label: "Test1", value: "test1" },
    //             //     { label: "Test2", value: "test2" },
    //             //     { label: "Test3", value: "test3" },
    //             // ]
    //             // dispatc({ options: optionsTest, name: "list.free_from" }))

    //             dispatc({ options: options, name: "list.free_from" }))
    //             dispatc({ options: options, name: "list.may_contain" }))
    //             const newFormItem = { ...formItem, options: options }
    //             return newFormItem;
    //         }
    //     },
    // },
    // {
    //     name: "claim",
    //     updateData: {
    //         getUpdatedFormItem: async ({ formItem, dispatch }) => {

    //             const responseData = await dispatch(getNutritionalClaimsMetadataAction()).unwrap()
    //             const { metadataEn, metadataFi, metadataSv } = responseData
    //             const metadataAll = [...metadataEn, ...metadataFi, ...metadataSv]

    //             const uniqueMetadataValue = [...new Set(metadataAll.map(item => item.key))]

    //             const options = uniqueMetadataValue.map((value) => {
    //                 const objectEn = metadataEn.find((element) => element.key === value)
    //                 const labelEn = _.get(objectEn, "claim", "")

    //                 const objectFi = metadataFi.find((element) => element.key === value)
    //                 const labelFi = _.get(objectFi, "claim", "")

    //                 const objectSv = metadataSv.find((element) => element.key === value)
    //                 const labelSv = _.get(objectSv, "claim", "")

    //                 const item = {
    //                     value: value,
    //                     label: {
    //                         en: labelEn ? labelEn : value,
    //                         fi: labelFi ? labelFi : labelEn,
    //                         sv: labelSv ? labelSv : labelEn,
    //                     }
    //                 }
    //                 return item
    //             })

    //             const newFormItem = { ...formItem, options: options }
    //             return newFormItem;
    //         }
    //     },
    // },
]