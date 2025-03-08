

/**
 * @description UPIDSIO
section
subSection
label

fieldOrder == 1.00
valueFrom = "upidsProduct" || "masterProduct"
*/



export default [
   {
      "tabName": "Identifier_tab",
      "tooltipText": "_2AN",
      "isMultilingual": false,
      "validationType": "string",
      "name": "_2an",
      "readOnly": false,
      "label": "__2AN",
      "placeholder": "",
      "validations": [
         {
            "type": "required",
            "params": [
               "This field is required"
            ]
         }
      ],
      "type": "text",
      "parentTab": "General",
      "upidsIo": {
         "tabName": "Home",
         "tabRequired": true,
         "section": "Company",
         "subSection": "",
         "fieldOrder": 1.11,
         "label": "Article Number",
         "type": "identifier",
         "tabIcon": "bi bi-house"
      }
   },
   // {
   //    "tabName": "Identifier_tab",
   //    "tooltipText": "GTIN",
   //    "isMultilingual": false,
   //    "validationType": "string",
   //    "name": "gtin",
   //    "readOnly": false,
   //    "label": "_GTIN",
   //    "placeholder": "",
   //    "validations": [
   //       {
   //          "type": "matches",
   //          "params": [
   //             "^[0-9]{0}$|^[0-9]{8}$|^[0-9]{12}$|^[0-9]{14}$",
   //             "gtin should be 8 or 12 or 14 character & should be number."
   //          ]
   //       }
   //    ],
   //    "type": "text",
   //    "parentTab": "General",
   //    "upidsIo": {
   //       "tabName": "Home",
   //       "tabRequired": true,
   //       "section": "Company",
   //       "subSection": "",
   //       "fieldOrder": 1.11,
   //       "label": "GTIN code",
   //       "type": "identifier",
   //       "tabIcon": "bi bi-house"
   //    }
   // },
   // {
   //    "tabName": "Identifier_tab",
   //    "tooltipText": "_Business Id",
   //    "isMultilingual": false,
   //    "validationType": "",
   //    "options": [],
   //    "name": "businessIdentifiers",
   //    "readOnly": true,
   //    "validations": [],
   //    "label": "_Company",
   //    "placeholder": "",
   //    "type": "businessIdentifiers",
   //    "parentTab": "General"
   // },
   {
      "tabName": "Identifier_tab",
      "tooltipText": "Brand Name",
      "isMultilingual": false,
      "validationType": "string",
      "name": "brandName",
      "readOnly": false,
      "label": "_Brand Name",
      "placeholder": "",
      "validations": [
         {
            "type": "required",
            "params": [
               "This field is required"
            ]
         }
      ],
      "type": "text",
      "parentTab": "General",
      "upidsIo": {
         "tabName": "Home",
         "tabRequired": true,
         "section": "Company",
         "subSection": "",
         "fieldOrder": 1.06,
         "label": "Company",
         "type": "text",
         "tabIcon": "bi bi-house"
      }
   },
   // {
   //    "tabName": "Identifier_tab",
   //    "tooltipText": "Created Date",
   //    "isMultilingual": false,
   //    "name": "createdDate",
   //    "readOnly": true,
   //    "label": "_Created Date",
   //    "placeholder": "",
   //    "type": "text",
   //    "parentTab": "General",
   //    "upidsIo": {
   //       "tabName": "Home",
   //       "tabRequired": true,
   //       "section": "Company",
   //       "subSection": "",
   //       "fieldOrder": 1.09,
   //       "label": "",
   //       "type": "dates",
   //       "tabIcon": "bi bi-house"
   //    }
   // },
   // {
   //    "tabName": "Identifier_tab",
   //    "tooltipText": "Modified Date",
   //    "isMultilingual": false,
   //    "name": "modifiedDate",
   //    "readOnly": true,
   //    "label": "_Modified Date",
   //    "placeholder": "",
   //    "type": "text",
   //    "parentTab": "General"
   // },
   {
      "tabName": "Identifier_tab",
      "tooltipText": "Profile Active",
      "isMultilingual": false,
      "name": "profileActive",
      "readOnly": false,
      "label": "Profile Active",
      "placeholder": "",
      "type": "switch",
      "parentTab": "General"
   },
   {
      "tabName": "Identifier_tab",
      "tooltipText": "Product Name",
      "isMultilingual": true,
      "name": "productName",
      "readOnly": false,
      "label": "_Product Name",
      "placeholder": "",
      "validationType": "string",
      "validations": [
         {
            "type": "required",
            "params": [
               "This field is required"
            ]
         }
      ],
      "type": "text",
      "parentTab": "General",
      "upidsIo": {
         "tabName": "Home",
         "tabRequired": true,
         "section": "Company",
         "subSection": "",
         "fieldOrder": 1.05,
         "label": "",
         "type": "header",
         "tabIcon": "bi bi-house"
      }
   },
   {
      "tabName": "Identifier_tab",
      "tooltipText": "Regulated Product Name",
      "isMultilingual": true,
      "name": "regulatedProductName",
      "readOnly": false,
      "label": "_Regulated Product Name",
      "placeholder": "",
      "validationType": "string",
      "validations": [
         {
            "type": "required",
            "params": [
               "This field is required"
            ]
         }
      ],
      "type": "text",
      "parentTab": "General"
   },
   {
      "aiEnable": true,
      "tabName": "Identifier_tab",
      "tooltipText": "Description Short",
      "isMultilingual": true,
      "name": "descriptionShort",
      "readOnly": false,
      "label": "_Description Short",
      "placeholder": "",
      "type": "text",
      "validationType": "string",
      "validations": [
         {
            "type": "required",
            "params": [
               "This field is required"
            ]
         }
      ],
      "parentTab": "General",
      "upidsIo": {
         "tabName": "Home",
         "tabRequired": true,
         "section": "Company",
         "subSection": "",
         "fieldOrder": 1.07,
         "label": "Description Short",
         "type": "text",
         "tabIcon": "bi bi-house"
      }
   },
   {
      "aiEnable": true,
      "tabName": "Identifier_tab",
      "tooltipText": "Description",
      "isMultilingual": true,
      "name": "description",
      "readOnly": false,
      "label": "_Description",
      "placeholder": "",
      "type": "textarea",
      "parentTab": "General",
      "upidsIo": {
         "tabName": "Home",
         "tabRequired": true,
         "section": "Company",
         "subSection": "",
         "fieldOrder": 1.08,
         "label": "Description",
         "type": "text",
         "tabIcon": "bi bi-house"
      }
   },
   // {
   //    "aiEnable": false,
   //    "tabName": "Identifier_tab",
   //    "tooltipText": "External sources",
   //    "isMultilingual": false,
   //    "name": "externalSources",
   //    "readOnly": false,
   //    "label": "External sources",
   //    "placeholder": "",
   //    "type": "externalSources",
   //    "parentTab": "General",
   //    "upidsIo": {
   //       "tabName": "Home",
   //       "tabRequired": true,
   //       "section": "certificationsLogo",
   //       "subSection": "",
   //       "fieldOrder": 1.032,
   //       "label": "",
   //       "type": "externalSources",
   //       "tabIcon": "bi bi-house"
   //    }
   // },
   // {
   //    "tabName": "Manufacturer_tab",
   //    "componentSchema": [
   //       {
   //          "tabName": "Manufacturer_tab",
   //          "tooltipText": "Manufacturer Name",
   //          "isMultilingual": false,
   //          "name": "name",
   //          "readOnly": false,
   //          "label": "_Manufacturer Name",
   //          "placeholder": "",
   //          "type": "text",
   //          "parentTab": "General"
   //       },
   //       {
   //          "tabName": "Manufacturer_tab",
   //          "tooltipText": "Business Id",
   //          "isMultilingual": false,
   //          "name": "businessId",
   //          "readOnly": false,
   //          "label": "_Business Id",
   //          "placeholder": "",
   //          "type": "text",
   //          "parentTab": "General"
   //       },
   //       {
   //          "tabName": "Manufacturer_tab",
   //          "tooltipText": "Contact",
   //          "isMultilingual": false,
   //          "name": "contact",
   //          "readOnly": false,
   //          "label": "_Contact",
   //          "placeholder": "",
   //          "type": "text",
   //          "parentTab": "General"
   //       },
   //       {
   //          "tabName": "Manufacturer_tab",
   //          "tooltipText": "Address",
   //          "isMultilingual": false,
   //          "name": "address",
   //          "readOnly": false,
   //          "label": "_Address",
   //          "placeholder": "",
   //          "type": "text",
   //          "parentTab": "General"
   //       }
   //    ],
   //    "manufacturesSchema": [
   //       {
   //          "tabName": "Manufacturer_tab",
   //          "tooltipText": "Company Name",
   //          "isMultilingual": false,
   //          "name": "name",
   //          "readOnly": false,
   //          "label": "_Company Name",
   //          "placeholder": "",
   //          "type": "text",
   //          "parentTab": "General"
   //       },
   //       {
   //          "tabName": "Manufacturer_tab",
   //          "tooltipText": "Company Id",
   //          "isMultilingual": false,
   //          "name": "businessId",
   //          "readOnly": false,
   //          "label": "_Company Id",
   //          "placeholder": "",
   //          "type": "text",
   //          "parentTab": "General"
   //       }
   //    ],
   //    "readOnly": false,
   //    "type": "manufacturerDetails",
   //    "parentTab": "General"
   // },
   // {
   //    "tabName": "Manufacturer_tab",
   //    "tooltipText": "Additional Business Identifiers",
   //    "isMultilingual": false,
   //    "name": "businessIdentifiers",
   //    "readOnly": true,
   //    "label": "_Additional Business Identifiers",
   //    "placeholder": "",
   //    "type": "showAdditionalBusinessIdentifiers",
   //    "parentTab": "General"
   // },
   // {
   //    "tabName": "Manufacturer_tab",
   //    "tooltipText": "Feedback Recipient Emails",
   //    "isMultilingual": false,
   //    "name": "private.feedback.emails",
   //    "readOnly": false,
   //    "label": "_Feedback Recipient Emails",
   //    "placeholder": "",
   //    "type": "emailMultiAdd",
   //    "parentTab": "General"
   // },
   // {
   //    "tabName": "Manufacturer_tab",
   //    "name": "ecommerce",
   //    "type": "ecommerce",
   //    "parentTab": "General"
   // },
   // {
   //    "tabName": "Category_tab",
   //    "tooltipText": "_Restrictions",
   //    "isMultilingual": false,
   //    "name": "restrictions",
   //    "readOnly": false,
   //    "label": "_Restrictions",
   //    "placeholder": "",
   //    "type": "restrictions",
   //    "parentTab": "General"
   // },
   // {
   //    "tabName": "Category_tab",
   //    "tooltipText": "_Doormat Modal",
   //    "isMultilingual": false,
   //    "name": "doormatModal",
   //    "readOnly": false,
   //    "label": "_Doormat Modal",
   //    "placeholder": "",
   //    "type": "doormat_modal",
   //    "parentTab": "General"
   // },
   // {
   //    "category": [
   //       {
   //          "tabName": "Category_tab",
   //          "tooltipText": "Select Segment",
   //          "isMultilingual": true,
   //          "name": "segmentCode.id",
   //          "readOnly": false,
   //          "label": "_Segment",
   //          "placeholder": "",
   //          "type": "select",
   //          "parentTab": "General"
   //       },
   //       {
   //          "tabName": "Category_tab",
   //          "tooltipText": "_Family",
   //          "isMultilingual": true,
   //          "name": "familyCode.id",
   //          "dependsOnName": "segmentCode.id",
   //          "readOnly": false,
   //          "label": "_Family",
   //          "placeholder": "",
   //          "type": "select",
   //          "parentTab": "General"
   //       },
   //       {
   //          "tabName": "Category_tab",
   //          "tooltipText": "_Class",
   //          "isMultilingual": true,
   //          "name": "classCode.id",
   //          "dependsOnName": "familyCode.id",
   //          "readOnly": false,
   //          "label": "_Class",
   //          "placeholder": "",
   //          "type": "select",
   //          "parentTab": "General"
   //       },
   //       {
   //          "tabName": "Category_tab",
   //          "tooltipText": "_Category",
   //          "isMultilingual": true,
   //          "name": "categoryCode.id",
   //          "dependsOnName": "classCode.id",
   //          "readOnly": false,
   //          "label": "_Category",
   //          "placeholder": "",
   //          "type": "select",
   //          "parentTab": "General"
   //       }
   //    ]
   // },
   {
      "tabName": "Ingredients_tab",
      "tooltipText": "Ingredients",
      "isMultilingual": true,
      "name": "ingredients",
      "readOnly": false,
      "label": "_Ingredients",
      "placeholder": "",
      "type": "textarea",
      "parentTab": "Contents",
      "upidsIo": {
         "tabName": "Ingredients",
         "sectionTitle": true,
         "section": "Product Ingredients",
         "subSection": "",
         "fieldOrder": 2.99,
         "label": "",
         "type": "ingredients",
         "tabIcon": "bi bi-info-circle"
      }
   },
   // {
   //    "allergens": [
   //       {
   //          "tabName": "Allergens_tab",
   //          "modalTitle": "Select Allergens Here",
   //          "tooltipText": "Allergens Contains",
   //          "isMultilingual": true,
   //          "validationType": "array",
   //          "name": "list.contains",
   //          "readOnly": false,
   //          "label": "_Allergens Contains",
   //          "placeholder": "",
   //          "type": "multiSelectWithModal",
   //          "parentTab": "Contents",
   //          "upidsIo": {
   //             "tabName": "Allergens",
   //             "subSectionTitle": true,
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "fallbackLanguage": "en",
   //             "section": "Allergens & Additives",
   //             "subSection": "Allergens",
   //             "fieldOrder": 3.01,
   //             "label": "Contains",
   //             "type": "allergens",
   //             "tabIcon": "bi bi-exclamation-square"
   //          }
   //       },
   //       {
   //          "tabName": "Allergens_tab",
   //          "modalTitle": "Select Allergens Here",
   //          "tooltipText": "Allergens Free From",
   //          "isMultilingual": true,
   //          "validationType": "array",
   //          "name": "list.free_from",
   //          "readOnly": false,
   //          "label": "_Allergens Free From",
   //          "placeholder": "",
   //          "type": "multiSelectWithModal",
   //          "parentTab": "Contents",
   //          "upidsIo": {
   //             "tabName": "Allergens",
   //             "subSectionTitle": true,
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "fallbackLanguage": "en",
   //             "section": "Allergens & Additives",
   //             "subSection": "Allergens",
   //             "fieldOrder": 3.03,
   //             "label": "Free From",
   //             "type": "allergens",
   //             "tabIcon": "bi bi-exclamation-square"
   //          }
   //       },
   //       {
   //          "tabName": "Allergens_tab",
   //          "modalTitle": "Select Allergens Here",
   //          "tooltipText": "Allergens May Contains",
   //          "isMultilingual": true,
   //          "validationType": "array",
   //          "name": "list.may_contain",
   //          "readOnly": false,
   //          "label": "_Allergens May Contains",
   //          "placeholder": "",
   //          "type": "multiSelectWithModal",
   //          "parentTab": "Contents",
   //          "upidsIo": {
   //             "tabName": "Allergens",
   //             "subSectionTitle": true,
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "fallbackLanguage": "en",
   //             "section": "Allergens & Additives",
   //             "subSection": "Allergens",
   //             "fieldOrder": 3.02,
   //             "label": "May Contains",
   //             "type": "allergens",
   //             "tabIcon": "bi bi-exclamation-square"
   //          }
   //       }
   //    ]
   // },
   // {
   //    "additives": [
   //       {
   //          "tabName": "Additives_tab",
   //          "tooltipText": "Additives Contains",
   //          "isMultilingual": false,
   //          "validationType": "array",
   //          "name": "contains",
   //          "readOnly": false,
   //          "label": "_Additives Contains",
   //          "placeholder": "",
   //          "type": "textMultiAdd",
   //          "parentTab": "Contents",
   //          "upidsIo": {
   //             "tabName": "Allergens",
   //             "subSectionTitle": true,
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "Allergens & Additives",
   //             "subSection": "Additives",
   //             "fieldOrder": 3.04,
   //             "label": "Contains",
   //             "type": "additive",
   //             "tabIcon": "bi bi-exclamation-square"
   //          }
   //       },
   //       {
   //          "tabName": "Additives_tab",
   //          "tooltipText": "Additives Free From",
   //          "isMultilingual": false,
   //          "validationType": "array",
   //          "name": "free_from",
   //          "readOnly": false,
   //          "label": "_Additives Free From",
   //          "placeholder": "",
   //          "type": "textMultiAdd",
   //          "parentTab": "Contents",
   //          "upidsIo": {
   //             "tabName": "Allergens",
   //             "subSectionTitle": true,
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "Allergens & Additives",
   //             "subSection": "Additives",
   //             "fieldOrder": 3.06,
   //             "label": "Free From",
   //             "type": "additive",
   //             "tabIcon": "bi bi-exclamation-square"
   //          }
   //       },
   //       {
   //          "tabName": "Additives_tab",
   //          "tooltipText": "Additives May Contains",
   //          "isMultilingual": false,
   //          "validationType": "array",
   //          "name": "may_contain",
   //          "readOnly": false,
   //          "label": "_Additives May Contains",
   //          "placeholder": "",
   //          "type": "textMultiAdd",
   //          "parentTab": "Contents",
   //          "upidsIo": {
   //             "tabName": "Allergens",
   //             "subSectionTitle": true,
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "Allergens & Additives",
   //             "subSection": "Additives",
   //             "fieldOrder": 3.05,
   //             "label": "May Contains",
   //             "type": "additive",
   //             "tabIcon": "bi bi-exclamation-square"
   //          }
   //       }
   //    ]
   // },
   // {
   //    "multimedia": [
   //       {
   //          "tabName": "Media_tab",
   //          "tooltipText": "",
   //          "sectionTooltipText": "Product Profile Images",
   //          "bottomLabel": "primary Image",
   //          "name": "primary[0]",
   //          "section": "Product profile Images",
   //          "readOnly": false,
   //          "placeholder": "",
   //          "type": "mediaImage",
   //          "upidsIo": {
   //             "sectionRequired": true,
   //             "tabName": "Home",
   //             "tabRequired": true,
   //             "section": "multimedia",
   //             "subSection": "",
   //             "fieldOrder": 1.02,
   //             "label": "",
   //             "type": "mediaImage",
   //             "tabIcon": "bi bi-three-dots",
   //             "swiperSlide": true
   //          }
   //       },
   //       {
   //          "tabName": "Media_tab",
   //          "tooltipText": "",
   //          "bottomLabel": "frontal Image",
   //          "name": "frontal[0]",
   //          "section": "Product profile Images",
   //          "readOnly": false,
   //          "placeholder": "",
   //          "type": "mediaImage",
   //          "upidsIo": {
   //             "sectionRequired": true,
   //             "tabName": "Home",
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "multimedia",
   //             "subSection": "",
   //             "fieldOrder": 1.99,
   //             "label": "",
   //             "type": "mediaImage",
   //             "tabIcon": "bi bi-three-dots",
   //             "swiperSlide": true
   //          }
   //       },
   //       {
   //          "tabName": "Media_tab",
   //          "tooltipText": "",
   //          "bottomLabel": "backside Image",
   //          "name": "backside[0]",
   //          "section": "Product profile Images",
   //          "readOnly": false,
   //          "placeholder": "",
   //          "type": "mediaImage",
   //          "upidsIo": {
   //             "sectionRequired": true,
   //             "tabName": "Home",
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "multimedia",
   //             "subSection": "",
   //             "fieldOrder": 1.99,
   //             "label": "",
   //             "type": "mediaImage",
   //             "tabIcon": "bi bi-three-dots",
   //             "swiperSlide": true
   //          }
   //       },
   //       {
   //          "tabName": "Media_tab",
   //          "tooltipText": "",
   //          "bottomLabel": "square Image",
   //          "name": "square[0]",
   //          "section": "Product profile Images",
   //          "readOnly": false,
   //          "placeholder": "",
   //          "type": "mediaImage"
   //       },
   //       {
   //          "tabName": "Media_tab",
   //          "tooltipText": "",
   //          "bottomLabel": "logo Image",
   //          "name": "logo[0]",
   //          "section": "Product profile Images",
   //          "readOnly": false,
   //          "placeholder": "",
   //          "type": "mediaImage"
   //       },
   //       {
   //          "tabName": "Media_tab",
   //          "tooltipText": "",
   //          "sectionTooltipText": "Other Images",
   //          "name": "other",
   //          "section": "Other Images",
   //          "readOnly": false,
   //          "label": "",
   //          "placeholder": "",
   //          "type": "mediaImageOther",
   //          "upidsIo": {
   //             "sectionRequired": true,
   //             "tabName": "Home",
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "multimedia",
   //             "subSection": "",
   //             "fieldOrder": 1.99,
   //             "label": "",
   //             "type": "mediaImageOther",
   //             "tabIcon": "bi bi-three-dots",
   //             "swiperSlide": true
   //          }
   //       },
   //       {
   //          "tabName": "Media_tab",
   //          "sectionTooltipText": "3d Models",
   //          "tooltipText": "",
   //          "name": "other",
   //          "section": "3D Models",
   //          "readOnly": false,
   //          "label": "",
   //          "placeholder": "",
   //          "type": "media3dmodel",
   //          "upidsIo": {
   //             "sectionRequired": true,
   //             "tabName": "Home",
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "multimedia",
   //             "subSection": "",
   //             "fieldOrder": 1.99,
   //             "label": "",
   //             "type": "media3dmodel",
   //             "tabIcon": "bi bi-three-dots",
   //             "swiperSlide": true
   //          }
   //       },
   //       {
   //          "tabName": "Media_tab",
   //          "sectionTooltipText": "Videos",
   //          "tooltipText": "",
   //          "name": "other",
   //          "section": "Video",
   //          "readOnly": false,
   //          "label": "",
   //          "placeholder": "",
   //          "type": "video",
   //          "upidsIo": {
   //             "sectionRequired": true,
   //             "tabName": "Home",
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "multimedia",
   //             "subSection": "",
   //             "fieldOrder": 1.99,
   //             "label": "",
   //             "type": "video",
   //             "tabIcon": "bi bi-three-dots",
   //             "swiperSlide": true
   //          }
   //       },
   //       {
   //          "tabName": "Media_tab",
   //          "tooltipText": "",
   //          "name": "pdf",
   //          "section": "PDF file",
   //          "readOnly": false,
   //          "label": "",
   //          "placeholder": "",
   //          "type": "pdf",
   //          "upidsIo": {
   //             "tabName": "General",
   //             "sectionTitle": true,
   //             "section": "More Information",
   //             "subSection": "",
   //             "fieldOrder": 6.1,
   //             "label": "Other Files",
   //             "type": "pdfDownloader",
   //             "tabIcon": "bi bi-three-dots"
   //          }
   //       },
   //       {
   //          "tabName": "Media_tab",
   //          "sectionTooltipText": "Other Files",
   //          "tooltipText": "",
   //          "name": "other",
   //          "section": "Other file",
   //          "readOnly": false,
   //          "label": "",
   //          "placeholder": "",
   //          "type": "mediaOtherFile"
   //       }
   //    ]
   // },
   // {
   //    "tabName": "Media_tab",
   //    "sectionTooltipText": "Video Urls",
   //    "tooltipText": "",
   //    "name": "videos",
   //    "section": "Video URL",
   //    "readOnly": false,
   //    "label": "",
   //    "placeholder": "",
   //    "type": "videoUrl",
   //    "upidsIo": {
   //       "sectionRequired": true,
   //       "tabName": "Home",
   //       "sectionTitle": true,
   //       "tabRequired": true,
   //       "section": "multimedia",
   //       "subSection": "",
   //       "fieldOrder": 1.99,
   //       "label": "",
   //       "type": "videoUrl",
   //       "tabIcon": "bi bi-three-dots",
   //       "swiperSlide": true
   //    }
   // },
   {
      "marketing": [
         {
            "tabName": "Marketing_tab",
            "tooltipText": "Website Url",
            "isMultilingual": false,
            "validationType": "string",
            "name": "websiteUrl",
            "readOnly": false,
            "label": "_Website Url",
            "placeholder": "",
            "validations": [
               {
                  "type": "required",
                  "params": [
                     "This field is required"
                  ]
               }
            ],
            "type": "text",
            "upidsIo": {
               "tabName": "General",
               "sectionTitle": true,
               "section": "More Information",
               "subSection": "",
               "fieldOrder": 6.06,
               "label": "Visite Website",
               "type": "links",
               "tabIcon": "bi bi-three-dots"
            }
         },
         {
            "tabName": "Marketing_tab",
            "tooltipText": "Overlay Url",
            "isMultilingual": false,
            "validationType": "string",
            "name": "overlayUrl",
            "readOnly": false,
            "label": "_Overlay Url",
            "placeholder": "",
            "validations": [
               {
                  "type": "required",
                  "params": [
                     "This field is required"
                  ]
               }
            ],
            "type": "text"
         },
         {
            "tabName": "Marketing_tab",
            "tooltipText": "Public Email",
            "isMultilingual": false,
            "name": "publicEmail",
            "readOnly": false,
            "validationType": "string",
            "label": "_Public Email",
            "placeholder": "",
            "type": "text",
            "validations": [
               {
                  "type": "required",
                  "params": [
                     "This field is required"
                  ]
               }
            ],
            "upidsIo": {
               "tabName": "General",
               "sectionTitle": true,
               "section": "More Information",
               "subSection": "",
               "fieldOrder": 6.02,
               "label": "Email",
               "type": "text",
               "tabIcon": "bi bi-three-dots"
            }
         },
         {
            "tabName": "Marketing_tab",
            "tooltipText": "Public Telephone",
            "isMultilingual": false,
            "name": "publicTelephone",
            "readOnly": false,
            "label": "_Public Telephone",
            "placeholder": "",
            "validationType": "string",
            "type": "text",
            "validations": [
               {
                  "type": "required",
                  "params": [
                     "This field is required"
                  ]
               }
            ],
            "upidsIo": {
               "tabName": "General",
               "sectionTitle": true,
               "section": "More Information",
               "subSection": "",
               "fieldOrder": 6.03,
               "label": "Telephone",
               "type": "text",
               "tabIcon": "bi bi-three-dots"
            }
         },
      ]
   },

   //       {
   //          "subsection": "Postal Address",
   //          "tabName": "Marketing_tab",
   //          "subSectionTooltipText": "Postal Address",
   //          "isMultilingual": false,
   //          "name": "postalAddress[0]",
   //          "readOnly": false,
   //          "placeholder": "Line 1",
   //          "type": "text",
   //          "upidsIo": {
   //             "tabName": "General",
   //             "sectionTitle": true,
   //             "section": "More Information",
   //             "subSection": "",
   //             "fieldOrder": 6.09,
   //             "label": "Postal address",
   //             "type": "postalAddress",
   //             "tabIcon": "bi bi-three-dots"
   //          }
   //       },
   //       {
   //          "subsection": "Postal Address",
   //          "tabName": "Marketing_tab",
   //          "isMultilingual": false,
   //          "name": "postalAddress[1]",
   //          "readOnly": false,
   //          "placeholder": "Line 2",
   //          "type": "text"
   //       },
   //       {
   //          "subsection": "Postal Address",
   //          "tabName": "Marketing_tab",
   //          "isMultilingual": false,
   //          "name": "postalAddress[2]",
   //          "readOnly": false,
   //          "placeholder": "Line 3",
   //          "type": "text"
   //       },
   //       {
   //          "subsection": "Postal Address",
   //          "tabName": "Marketing_tab",
   //          "isMultilingual": false,
   //          "name": "postalAddress[3]",
   //          "readOnly": false,
   //          "placeholder": "Line 4",
   //          "type": "text"
   //       },
   //       {
   //          "aiEnable": true,
   //          "tabName": "Marketing_tab",
   //          "tooltipText": "Marketing Text",
   //          "isMultilingual": true,
   //          "name": "marketingTexts",
   //          "readOnly": false,
   //          "label": "_Marketing Texts",
   //          "placeholder": "",
   //          "type": "textarea",
   //          "upidsIo": {
   //             "tabName": "General",
   //             "sectionTitle": true,
   //             "section": "More Information",
   //             "subSection": "",
   //             "fieldOrder": 6.01,
   //             "label": "",
   //             "type": "text",
   //             "tabIcon": "bi bi-three-dots"
   //          }
   //       },
   //       {
   //          "tabName": "Marketing_tab",
   //          "tooltipText": "Top Banner",
   //          "isMultilingual": true,
   //          "name": "banner1",
   //          "readOnly": false,
   //          "label": "_Top Banner",
   //          "placeholder": "",
   //          "type": "text",
   //          "upidsIo": {
   //             "tabName": "Home",
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "",
   //             "subSection": "",
   //             "fieldOrder": 1.01,
   //             "label": "",
   //             "type": "banner",
   //             "tabIcon": "bi bi-house"
   //          }
   //       },
   //       {
   //          "tabName": "Marketing_tab",
   //          "tooltipText": "Lower Banner",
   //          "isMultilingual": true,
   //          "name": "banner2",
   //          "readOnly": false,
   //          "label": "_Lower Banner",
   //          "placeholder": "",
   //          "type": "text",
   //          "upidsIo": {
   //             "tabName": "Home",
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "",
   //             "subSection": "",
   //             "fieldOrder": 1.04,
   //             "label": "",
   //             "type": "banner",
   //             "tabIcon": "bi bi-house"
   //          }
   //       },
   //       {
   //          "tabName": "Marketing_tab",
   //          "tooltipText": "Usage Instructions",
   //          "isMultilingual": true,
   //          "name": "usageInstructions",
   //          "readOnly": false,
   //          "label": "_Usage Instructions",
   //          "placeholder": "",
   //          "type": "textarea",
   //          "upidsIo": {
   //             "tabName": "General",
   //             "sectionTitle": true,
   //             "section": "More Information",
   //             "subSection": "",
   //             "fieldOrder": 6.05,
   //             "label": "Usage instructions",
   //             "type": "text",
   //             "tabIcon": "bi bi-three-dots"
   //          }
   //       },
   //       {
   //          "tabName": "Marketing_tab",
   //          "tooltipText": "Buy Now Urls",
   //          "isMultilingual": false,
   //          "name": "buyNowUrls",
   //          "readOnly": false,
   //          "label": "_Buy Now Urls",
   //          "placeholder": "",
   //          "type": "urlMultiAdd",
   //          "upidsIo": {
   //             "tabName": "General",
   //             "sectionTitle": true,
   //             "section": "More Information",
   //             "subSection": "",
   //             "fieldOrder": 6.06,
   //             "label": "Buy now",
   //             "type": "externalLinks",
   //             "tabIcon": "bi bi-three-dots"
   //          }
   //       },
   //       {
   //          "tabName": "Marketing_tab",
   //          "tooltipText": "Social Media Urls",
   //          "isMultilingual": false,
   //          "name": "socialMediaUrls",
   //          "readOnly": false,
   //          "label": "_Social Media Urls",
   //          "placeholder": "",
   //          "type": "urlMultiAdd",
   //          "upidsIo": {
   //             "tabName": "General",
   //             "sectionTitle": true,
   //             "section": "More Information",
   //             "subSection": "",
   //             "fieldOrder": 6.07,
   //             "label": "Social media",
   //             "type": "externalLinks",
   //             "tabIcon": "bi bi-three-dots"
   //          }
   //       },
   //       {
   //          "tabName": "Marketing_tab",
   //          "tooltipText": "External Links",
   //          "isMultilingual": false,
   //          "name": "externalLinks",
   //          "readOnly": false,
   //          "label": "_External Links",
   //          "type": "urlMultiAdd",
   //          "upidsIo": {
   //             "tabName": "General",
   //             "sectionTitle": true,
   //             "section": "More Information",
   //             "subSection": "",
   //             "fieldOrder": 6.08,
   //             "label": "External Links",
   //             "type": "externalLinks",
   //             "tabIcon": "bi bi-three-dots"
   //          }
   //       }
   //    ]
   // },
   // {
   //    "tabName": "Marketing_tab",
   //    "tooltipText": "Certifications",
   //    "name": "certifications",
   //    "readOnly": false,
   //    "label": "_Certifications",
   //    "type": "null",
   //    "upidsIo": {
   //       "tabName": "Home",
   //       "tabRequired": true,
   //       "section": "certificationsLogo",
   //       "subSection": "",
   //       "fieldOrder": 1.031,
   //       "label": "",
   //       "type": "certificationsLogo",
   //       "tabIcon": "bi bi-house"
   //    }
   // },
   // {
   //    "tabName": "Marketing_tab",
   //    "tooltipText": "Certifications",
   //    "isMultilingual": false,
   //    "name": "certifications",
   //    "modalTitle": "Select Certifications Here",
   //    // "options": [
   //    //    {
   //    //       "label": "UTZ",
   //    //       "value": "utz"
   //    //    },
   //    //    {
   //    //       "label": "Rainforest Alliance",
   //    //       "value": "rainforestalliance"
   //    //    }
   //    // ],
   //    "readOnly": false,
   //    "label": "_Certifications",
   //    "type": "certificationMultiSelectWithModal",
   //    "upidsIo": {
   //       "tabName": "Home",
   //       "sectionTitle": true,
   //       "tabRequired": true,
   //       "section": "Certifications",
   //       "subSection": "",
   //       "fieldOrder": 1.2,
   //       "label": "",
   //       "type": "certifications",
   //       "tabIcon": "bi bi-house"
   //    }
   // },
   // {
   //    "carbonFootprint": [
   //       {
   //          "tabName": "Marketing_tab",
   //          "tooltipText": "Carbon footprint total",
   //          "sectionTooltipText": "Carbon Footprint Data",
   //          "isMultilingual": false,
   //          "name": "total",
   //          "section": "Carbon footprint",
   //          "readOnly": false,
   //          "label": "_Carbon footprint total",
   //          "placeholder": "",
   //          "type": "text",
   //          "upidsIo": {
   //             "tabName": "Home",
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "Carbon Footprint Data",
   //             "subSection": "",
   //             "fieldOrder": 1.11,
   //             "label": "Total",
   //             "type": "text",
   //             "tabIcon": "bi bi-house"
   //          },
   //          "validation": ""
   //       },
   //       {
   //          "tabName": "Marketing_tab",
   //          "tooltipText": "Carbon footprint date of calculation",
   //          "isMultilingual": false,
   //          "name": "dateOfCalculation",
   //          "section": "Carbon footprint",
   //          "readOnly": false,
   //          "label": "_Carbon footprint date of calculation",
   //          "placeholder": "",
   //          "type": "text",
   //          "upidsIo": {
   //             "tabName": "Home",
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "Carbon Footprint Data",
   //             "subSection": "",
   //             "fieldOrder": 1.12,
   //             "label": "Date Of Calculation",
   //             "type": "text",
   //             "tabIcon": "bi bi-house"
   //          },
   //          "validation": ""
   //       },
   //       {
   //          "tabName": "Marketing_tab",
   //          "tooltipText": "Carbon footprint source",
   //          "isMultilingual": false,
   //          "name": "source",
   //          "section": "Carbon footprint",
   //          "readOnly": false,
   //          "label": "_Carbon footprint source",
   //          "placeholder": "",
   //          "type": "text",
   //          "upidsIo": {
   //             "tabName": "Home",
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "Carbon Footprint Data",
   //             "subSection": "",
   //             "fieldOrder": 1.13,
   //             "label": "Source",
   //             "type": "text",
   //             "tabIcon": "bi bi-house"
   //          },
   //          "validation": ""
   //       },
   //       {
   //          "tabName": "Marketing_tab",
   //          "tooltipText": "Carbon footprint external reference",
   //          "isMultilingual": false,
   //          "name": "externalReference",
   //          "section": "Carbon footprint",
   //          "readOnly": false,
   //          "label": "_Carbon footprint external reference",
   //          "placeholder": "",
   //          "type": "text",
   //          "upidsIo": {
   //             "tabName": "Home",
   //             "sectionTitle": true,
   //             "tabRequired": true,
   //             "section": "Carbon Footprint Data",
   //             "subSection": "",
   //             "fieldOrder": 1.14,
   //             "label": "External Reference",
   //             "type": "text",
   //             "tabIcon": "bi bi-house"
   //          },
   //          "validation": ""
   //       }
   //    ]
   // },
   // {
   //    "marketing.custom": [
   //       {
   //          "tabName": "Marketing_tab",
   //          "tooltipText": "Background Color",
   //          "sectionTooltipText": "Custom Header",
   //          "isMultilingual": false,
   //          "name": "bgColor",
   //          "section": "Custom header",
   //          "readOnly": false,
   //          "label": "_Background Color",
   //          "placeholder": "",
   //          "type": "color"
   //       },
   //       {
   //          "tabName": "Marketing_tab",
   //          "tooltipText": "Header Text",
   //          "isMultilingual": false,
   //          "name": "headerText",
   //          "section": "Custom header",
   //          "readOnly": false,
   //          "label": "_Header Text",
   //          "placeholder": "",
   //          "type": "text"
   //       }
   //    ]
   // },
   // {
   //    "tabName": "Marketing_tab",
   //    "tooltipText": "Marketing email subscriptions",
   //    "isMultilingual": false,
   //    "name": "emailConsent",
   //    "readOnly": false,
   //    "label": "_Email consent",
   //    "placeholder": "",
   //    "type": "emailConsent"
   // },
   // {
   //    "directCommerce": [
   //       {
   //          "tabName": "Sales_tab",
   //          "tooltipText": "Status",
   //          "validationType": "string",
   //          "showTooltip": true,
   //          "readOnly": false,
   //          "label": "_Status",
   //          "type": "select",
   //          "upidsIo": {
   //             "tabName": "Home",
   //             "section": "Company",
   //             "subSection": "",
   //             "fieldOrder": 5.99,
   //             "label": "",
   //             "type": "directCommerce",
   //             "tabIcon": "bi bi-house"
   //          },
   //          "isMultilingual": false,
   //          "name": "status",
   //          "options": [
   //             {
   //                "label": "Sell",
   //                "value": "sell"
   //             },
   //             {
   //                "label": "Presale",
   //                "value": "presale"
   //             },
   //             {
   //                "label": "Nostock",
   //                "value": "nostock"
   //             },
   //             {
   //                "label": "Eol",
   //                "value": "eol"
   //             },
   //             {
   //                "label": "Na",
   //                "value": "na"
   //             },
   //             {
   //                "label": "Disabled",
   //                "value": "disabled"
   //             }
   //          ],
   //          "validations": [],
   //          "placeholder": ""
   //       },
   //       {
   //          "tabName": "Sales_tab",
   //          "tooltipText": "Price",
   //          "isMultilingual": false,
   //          "validationType": "string",
   //          "name": "price",
   //          "showTooltip": true,
   //          "readOnly": false,
   //          "validations": [],
   //          "label": "_Price",
   //          "placeholder": "",
   //          "type": "number"
   //       },
   //       {
   //          "tabName": "Sales_tab",
   //          "tooltipText": "Tax",
   //          "isMultilingual": false,
   //          "validationType": "string",
   //          "name": "tax",
   //          "showTooltip": true,
   //          "readOnly": false,
   //          "validations": [],
   //          "label": "_Tax",
   //          "placeholder": "",
   //          "type": "text"
   //       },
   //       {
   //          "tabName": "Sales_tab",
   //          "tooltipText": "Shipping",
   //          "isMultilingual": false,
   //          "validationType": "string",
   //          "name": "shipping",
   //          "showTooltip": true,
   //          "readOnly": false,
   //          "validations": [],
   //          "label": "_Shipping",
   //          "placeholder": "",
   //          "type": "text"
   //       },
   //       {
   //          "tabName": "Sales_tab",
   //          "tooltipText": "Delivery Type",
   //          "isMultilingual": false,
   //          "validationType": "string",
   //          "name": "deliveryType",
   //          "showTooltip": true,
   //          "options": [
   //             {
   //                "label": "Postal",
   //                "value": "postal"
   //             },
   //             {
   //                "label": "Digital",
   //                "value": "digital"
   //             },
   //             {
   //                "label": "Direct",
   //                "value": "direct"
   //             }
   //          ],
   //          "readOnly": false,
   //          "validations": [],
   //          "label": "_Delivery Type",
   //          "placeholder": "",
   //          "type": "select"
   //       },
   //       {
   //          "tabName": "Sales_tab",
   //          "tooltipText": "Currency Type",
   //          "isMultilingual": false,
   //          "validationType": "string",
   //          "name": "currencyType",
   //          "showTooltip": true,
   //          "options": [
   //             {
   //                "label": "EUR",
   //                "value": "EUR"
   //             },
   //             {
   //                "label": "AED",
   //                "value": "AED"
   //             },
   //             {
   //                "label": "AFN",
   //                "value": "AFN"
   //             },
   //             {
   //                "label": "XCD",
   //                "value": "XCD"
   //             },
   //             {
   //                "label": "ALL",
   //                "value": "ALL"
   //             },
   //             {
   //                "label": "AMD",
   //                "value": "AMD"
   //             },
   //             {
   //                "label": "AOA",
   //                "value": "AOA"
   //             },
   //             {
   //                "label": "ARS",
   //                "value": "ARS"
   //             },
   //             {
   //                "label": "USD",
   //                "value": "USD"
   //             },
   //             {
   //                "label": "AUD",
   //                "value": "AUD"
   //             },
   //             {
   //                "label": "AWG",
   //                "value": "AWG"
   //             },
   //             {
   //                "label": "AZN",
   //                "value": "AZN"
   //             },
   //             {
   //                "label": "BAM",
   //                "value": "BAM"
   //             },
   //             {
   //                "label": "BBD",
   //                "value": "BBD"
   //             },
   //             {
   //                "label": "BDT",
   //                "value": "BDT"
   //             },
   //             {
   //                "label": "XOF",
   //                "value": "XOF"
   //             },
   //             {
   //                "label": "BGN",
   //                "value": "BGN"
   //             },
   //             {
   //                "label": "BHD",
   //                "value": "BHD"
   //             },
   //             {
   //                "label": "BIF",
   //                "value": "BIF"
   //             },
   //             {
   //                "label": "BMD",
   //                "value": "BMD"
   //             },
   //             {
   //                "label": "BND",
   //                "value": "BND"
   //             },
   //             {
   //                "label": "BOB",
   //                "value": "BOB"
   //             },
   //             {
   //                "label": "BRL",
   //                "value": "BRL"
   //             },
   //             {
   //                "label": "BSD",
   //                "value": "BSD"
   //             },
   //             {
   //                "label": "BTN",
   //                "value": "BTN"
   //             },
   //             {
   //                "label": "NOK",
   //                "value": "NOK"
   //             },
   //             {
   //                "label": "BWP",
   //                "value": "BWP"
   //             },
   //             {
   //                "label": "BYN",
   //                "value": "BYN"
   //             },
   //             {
   //                "label": "BZD",
   //                "value": "BZD"
   //             },
   //             {
   //                "label": "CAD",
   //                "value": "CAD"
   //             },
   //             {
   //                "label": "CDF",
   //                "value": "CDF"
   //             },
   //             {
   //                "label": "XAF",
   //                "value": "XAF"
   //             },
   //             {
   //                "label": "CHF",
   //                "value": "CHF"
   //             },
   //             {
   //                "label": "NZD",
   //                "value": "NZD"
   //             },
   //             {
   //                "label": "CLP",
   //                "value": "CLP"
   //             },
   //             {
   //                "label": "CNY",
   //                "value": "CNY"
   //             },
   //             {
   //                "label": "COP",
   //                "value": "COP"
   //             },
   //             {
   //                "label": "CRC",
   //                "value": "CRC"
   //             },
   //             {
   //                "label": "CUP",
   //                "value": "CUP"
   //             },
   //             {
   //                "label": "CVE",
   //                "value": "CVE"
   //             },
   //             {
   //                "label": "ANG",
   //                "value": "ANG"
   //             },
   //             {
   //                "label": "CZK",
   //                "value": "CZK"
   //             },
   //             {
   //                "label": "DJF",
   //                "value": "DJF"
   //             },
   //             {
   //                "label": "DKK",
   //                "value": "DKK"
   //             },
   //             {
   //                "label": "DOP",
   //                "value": "DOP"
   //             },
   //             {
   //                "label": "DZD",
   //                "value": "DZD"
   //             },
   //             {
   //                "label": "EGP",
   //                "value": "EGP"
   //             },
   //             {
   //                "label": "MAD",
   //                "value": "MAD"
   //             },
   //             {
   //                "label": "ERN",
   //                "value": "ERN"
   //             },
   //             {
   //                "label": "ETB",
   //                "value": "ETB"
   //             },
   //             {
   //                "label": "FJD",
   //                "value": "FJD"
   //             },
   //             {
   //                "label": "FKP",
   //                "value": "FKP"
   //             },
   //             {
   //                "label": "GBP",
   //                "value": "GBP"
   //             },
   //             {
   //                "label": "GEL",
   //                "value": "GEL"
   //             },
   //             {
   //                "label": "GHS",
   //                "value": "GHS"
   //             },
   //             {
   //                "label": "GIP",
   //                "value": "GIP"
   //             },
   //             {
   //                "label": "GMD",
   //                "value": "GMD"
   //             },
   //             {
   //                "label": "GNF",
   //                "value": "GNF"
   //             },
   //             {
   //                "label": "GTQ",
   //                "value": "GTQ"
   //             },
   //             {
   //                "label": "GYD",
   //                "value": "GYD"
   //             },
   //             {
   //                "label": "HKD",
   //                "value": "HKD"
   //             },
   //             {
   //                "label": "HNL",
   //                "value": "HNL"
   //             },
   //             {
   //                "label": "HRK",
   //                "value": "HRK"
   //             },
   //             {
   //                "label": "HTG",
   //                "value": "HTG"
   //             },
   //             {
   //                "label": "HUF",
   //                "value": "HUF"
   //             },
   //             {
   //                "label": "IDR",
   //                "value": "IDR"
   //             },
   //             {
   //                "label": "ILS",
   //                "value": "ILS"
   //             },
   //             {
   //                "label": "INR",
   //                "value": "INR"
   //             },
   //             {
   //                "label": "IQD",
   //                "value": "IQD"
   //             },
   //             {
   //                "label": "IRR",
   //                "value": "IRR"
   //             },
   //             {
   //                "label": "ISK",
   //                "value": "ISK"
   //             },
   //             {
   //                "label": "JMD",
   //                "value": "JMD"
   //             },
   //             {
   //                "label": "JOD",
   //                "value": "JOD"
   //             },
   //             {
   //                "label": "JPY",
   //                "value": "JPY"
   //             },
   //             {
   //                "label": "KES",
   //                "value": "KES"
   //             },
   //             {
   //                "label": "KGS",
   //                "value": "KGS"
   //             },
   //             {
   //                "label": "KHR",
   //                "value": "KHR"
   //             },
   //             {
   //                "label": "KMF",
   //                "value": "KMF"
   //             },
   //             {
   //                "label": "KPW",
   //                "value": "KPW"
   //             },
   //             {
   //                "label": "KRW",
   //                "value": "KRW"
   //             },
   //             {
   //                "label": "KWD",
   //                "value": "KWD"
   //             },
   //             {
   //                "label": "KYD",
   //                "value": "KYD"
   //             },
   //             {
   //                "label": "KZT",
   //                "value": "KZT"
   //             },
   //             {
   //                "label": "LAK",
   //                "value": "LAK"
   //             },
   //             {
   //                "label": "LBP",
   //                "value": "LBP"
   //             },
   //             {
   //                "label": "LKR",
   //                "value": "LKR"
   //             },
   //             {
   //                "label": "LRD",
   //                "value": "LRD"
   //             },
   //             {
   //                "label": "LSL",
   //                "value": "LSL"
   //             },
   //             {
   //                "label": "LYD",
   //                "value": "LYD"
   //             },
   //             {
   //                "label": "MDL",
   //                "value": "MDL"
   //             },
   //             {
   //                "label": "MGA",
   //                "value": "MGA"
   //             },
   //             {
   //                "label": "MKD",
   //                "value": "MKD"
   //             },
   //             {
   //                "label": "MMK",
   //                "value": "MMK"
   //             },
   //             {
   //                "label": "MNT",
   //                "value": "MNT"
   //             },
   //             {
   //                "label": "MOP",
   //                "value": "MOP"
   //             },
   //             {
   //                "label": "MRO",
   //                "value": "MRO"
   //             },
   //             {
   //                "label": "MUR",
   //                "value": "MUR"
   //             },
   //             {
   //                "label": "MVR",
   //                "value": "MVR"
   //             },
   //             {
   //                "label": "MWK",
   //                "value": "MWK"
   //             },
   //             {
   //                "label": "MXN",
   //                "value": "MXN"
   //             },
   //             {
   //                "label": "MYR",
   //                "value": "MYR"
   //             },
   //             {
   //                "label": "MZN",
   //                "value": "MZN"
   //             },
   //             {
   //                "label": "NAD",
   //                "value": "NAD"
   //             },
   //             {
   //                "label": "XPF",
   //                "value": "XPF"
   //             },
   //             {
   //                "label": "NGN",
   //                "value": "NGN"
   //             },
   //             {
   //                "label": "NIO",
   //                "value": "NIO"
   //             },
   //             {
   //                "label": "NPR",
   //                "value": "NPR"
   //             },
   //             {
   //                "label": "OMR",
   //                "value": "OMR"
   //             },
   //             {
   //                "label": "PAB",
   //                "value": "PAB"
   //             },
   //             {
   //                "label": "PEN",
   //                "value": "PEN"
   //             },
   //             {
   //                "label": "PGK",
   //                "value": "PGK"
   //             },
   //             {
   //                "label": "PHP",
   //                "value": "PHP"
   //             },
   //             {
   //                "label": "PKR",
   //                "value": "PKR"
   //             },
   //             {
   //                "label": "PLN",
   //                "value": "PLN"
   //             },
   //             {
   //                "label": "PYG",
   //                "value": "PYG"
   //             },
   //             {
   //                "label": "QAR",
   //                "value": "QAR"
   //             },
   //             {
   //                "label": "RON",
   //                "value": "RON"
   //             },
   //             {
   //                "label": "RSD",
   //                "value": "RSD"
   //             },
   //             {
   //                "label": "RUB",
   //                "value": "RUB"
   //             },
   //             {
   //                "label": "RWF",
   //                "value": "RWF"
   //             },
   //             {
   //                "label": "SAR",
   //                "value": "SAR"
   //             },
   //             {
   //                "label": "SBD",
   //                "value": "SBD"
   //             },
   //             {
   //                "label": "SCR",
   //                "value": "SCR"
   //             },
   //             {
   //                "label": "SDG",
   //                "value": "SDG"
   //             },
   //             {
   //                "label": "SEK",
   //                "value": "SEK"
   //             },
   //             {
   //                "label": "SGD",
   //                "value": "SGD"
   //             },
   //             {
   //                "label": "SHP",
   //                "value": "SHP"
   //             },
   //             {
   //                "label": "SLL",
   //                "value": "SLL"
   //             },
   //             {
   //                "label": "SOS",
   //                "value": "SOS"
   //             },
   //             {
   //                "label": "SRD",
   //                "value": "SRD"
   //             },
   //             {
   //                "label": "SSP",
   //                "value": "SSP"
   //             },
   //             {
   //                "label": "STD",
   //                "value": "STD"
   //             },
   //             {
   //                "label": "SYP",
   //                "value": "SYP"
   //             },
   //             {
   //                "label": "SZL",
   //                "value": "SZL"
   //             },
   //             {
   //                "label": "THB",
   //                "value": "THB"
   //             },
   //             {
   //                "label": "TJS",
   //                "value": "TJS"
   //             },
   //             {
   //                "label": "TMT",
   //                "value": "TMT"
   //             },
   //             {
   //                "label": "TND",
   //                "value": "TND"
   //             },
   //             {
   //                "label": "TOP",
   //                "value": "TOP"
   //             },
   //             {
   //                "label": "TRY",
   //                "value": "TRY"
   //             },
   //             {
   //                "label": "TTD",
   //                "value": "TTD"
   //             },
   //             {
   //                "label": "TWD",
   //                "value": "TWD"
   //             },
   //             {
   //                "label": "TZS",
   //                "value": "TZS"
   //             },
   //             {
   //                "label": "UAH",
   //                "value": "UAH"
   //             },
   //             {
   //                "label": "UGX",
   //                "value": "UGX"
   //             },
   //             {
   //                "label": "UYU",
   //                "value": "UYU"
   //             },
   //             {
   //                "label": "UZS",
   //                "value": "UZS"
   //             },
   //             {
   //                "label": "VEF",
   //                "value": "VEF"
   //             },
   //             {
   //                "label": "VND",
   //                "value": "VND"
   //             },
   //             {
   //                "label": "VUV",
   //                "value": "VUV"
   //             },
   //             {
   //                "label": "WST",
   //                "value": "WST"
   //             },
   //             {
   //                "label": "YER",
   //                "value": "YER"
   //             },
   //             {
   //                "label": "ZAR",
   //                "value": "ZAR"
   //             },
   //             {
   //                "label": "ZMW",
   //                "value": "ZMW"
   //             },
   //             {
   //                "label": "ZWL",
   //                "value": "ZWL"
   //             },
   //             {
   //                "label": "MRU",
   //                "value": "MRU"
   //             },
   //             {
   //                "label": "STN",
   //                "value": "STN"
   //             }
   //          ],
   //          "readOnly": false,
   //          "validations": [],
   //          "label": "_Currency Type",
   //          "placeholder": "",
   //          "type": "select"
   //       }
   //    ]
   // },
   {
      "nutritional": [
         {
            "tabName": "Nutritional_tab",
            "tooltipText": "Claims",
            "isMultilingual": true,
            "name": "claim",
            "readOnly": false,
            "label": "_Claims",
            "placeholder": "",
            "type": "multiSelectWithModal",
            "options": [
               {
                  "value": "CONTAINS PANTOTHENIC_ACID",
                  "label": {
                     "en": "CONTAINS PANTOTHENIC ACID",
                     "fi": "SISÄLTÄÄ PANTOTEENIHAPPOA",
                     "sv": "INNEHÅLLER PANTOTENSYRA"
                  }
               },
               {
                  "value": "CONTAINS FAT",
                  "label": {
                     "en": "CONTAINS FAT",
                     "fi": "SISÄLTÄÄ RASVAA",
                     "sv": "INNEHÅLLER FETT"
                  }
               },
               {
                  "value": "SOURCE OF PHOSPHATE",
                  "label": {
                     "en": "SOURCE OF PHOSPHATE",
                     "fi": "FOSFAATIN LÄHDE",
                     "sv": "KÄLLA TILL FOSFAT"
                  }
               },
               {
                  "value": "SWEETENED WITH SORBITOL",
                  "label": {
                     "en": "SWEETENED WITH SORBITOL",
                     "fi": "MAKEUTETTU SORBITOLILLA",
                     "sv": "SÖTTAD MED SORBITOL"
                  }
               },
               {
                  "value": "CONTAINS PORK_GELATINE",
                  "label": {
                     "en": "CONTAINS PORK GELATINE",
                     "fi": "SISÄLTÄÄ SIANLIHAA",
                     "sv": "INNEHÅLLER FISKGELATIN"
                  }
               },
               {
                  "value": "CONTAINS HONEY",
                  "label": {
                     "en": "CONTAINS HONEY",
                     "fi": "SISÄLTÄÄ HUNAJAA",
                     "sv": "INNEHÅLLER HONING"
                  }
               },
               {
                  "value": "CONTAINS NUTS",
                  "label": {
                     "en": "CONTAINS NUTS",
                     "fi": "SISÄLTÄÄ PÄHKINÄÄ",
                     "sv": "INNEHÅLLER NÖTTER"
                  }
               },
               {
                  "value": "NO ADDED SODIUM_SALT",
                  "label": {
                     "en": "NO ADDED SODIUM SALT",
                     "fi": "EI LISÄTTYÄ NATRIUMSUOLAA",
                     "sv": "INGET TILLSATT NATRIUMSALT"
                  }
               },
               {
                  "value": "SOURCE OF VITAMIN_B12",
                  "label": {
                     "en": "SOURCE OF VITAMIN B12",
                     "fi": "B12-VITAMIININ LÄHDE",
                     "sv": "KÄLLA TILL VITAMIN B12"
                  }
               },
               {
                  "value": "CONTAINS CAFFEINE",
                  "label": {
                     "en": "CONTAINS CAFFEINE",
                     "fi": "SISÄLTÄÄ KOFEIINIA",
                     "sv": "INNEHÅLLER KAFFEIN"
                  }
               },
               {
                  "value": "INCREASED VITAMIN_B6",
                  "label": {
                     "en": "INCREASED VITAMIN B6",
                     "fi": "LISÄTTY B6-VITAMIINIA",
                     "sv": "ÖKAT VITAMIN B6"
                  }
               },
               {
                  "value": "HIGH VITAMIN_B6",
                  "label": {
                     "en": "HIGH VITAMIN B6",
                     "fi": "RUNSAASTI B6-VITAMIINIA",
                     "sv": "HÖGT VITAMIN B6"
                  }
               },
               {
                  "value": "ENRICHED WITH OMEGA_3_FATTY_ACIDS",
                  "label": {
                     "en": "ENRICHED WITH OMEGA-3 FATTY ACIDS",
                     "fi": "RIKASTETTU OMEGA-3 RASVAHAPOILLA",
                     "sv": "BERIKADE MED OMEGA-3 FETTSYROR"
                  }
               },
               {
                  "value": "SOURCE OF POLYUNSATURATED_FAT",
                  "label": {
                     "en": "SOURCE OF POLYUNSATURATED FAT",
                     "fi": "MONITYYDYTTYMÄTTÖMIEN RASVOJEN LÄHDE",
                     "sv": "KÄLLA TILL FLEROMÄTTAT FETT"
                  }
               },
            ],
            "upidsIo": {
               "tabName": "Nutrition",
               "section": "nutritional",
               "subSection": "",
               "fieldOrder": 4.99,
               "label": "Claims",
               "type": "textMultiBadges",
               "tabIcon": "bi bi-stack"
            }
         },
         //       {
         //          "tabName": "Nutritional_tab",
         //          "tooltipText": "Per Quantity",
         //          "isMultilingual": false,
         //          "name": "perQuantity",
         //          "readOnly": false,
         //          "label": "_Per Quantity",
         //          "placeholder": "",
         //          "type": "text"
         //       },
         {
            "tabName": "Nutritional_tab",
            "tooltipText": "Calculated for",
            "isMultilingual": false,
            "name": "calculatedFor",
            "options": [
               {
                  "label": "PREPARED",
                  "value": "PREPARED"
               },
               {
                  "label": "UNPREPARED",
                  "value": "UNPREPARED"
               }
            ],
            "readOnly": false,
            "label": "_Calculated for",
            "placeholder": "",
            "type": "select"
         },
         //       {
         //          "tabName": "Nutritional_tab",
         //          "tooltipText": "Details",
         //          "isMultilingual": false,
         //          "name": "details",
         //          "readOnly": false,
         //          "placeholder": "",
         //          "type": "nutritionalDetails",
         //          "upidsIo": {
         //             "tabName": "Nutrition",
         //             "section": "nutritional",
         //             "subSection": "",
         //             "fieldOrder": 4.99,
         //             "label": "Claims",
         //             "type": "nutritional",
         //             "tabIcon": "bi bi-stack"
         //          }
         //       }
      ]
   },
   // {
   //    "tabName": "UPIDS Product_tab",
   //    "tooltipText": "manufacturerName_en help text",
   //    "isMultilingual": false,
   //    "name": "UPIDS_Product",
   //    "readOnly": false,
   //    "label": "_UPIDS Product",
   //    "placeholder": "",
   //    "type": "upidsProduct"
   // },
   // {
   //    "tabName": "Feedbacks_tab",
   //    "tooltipText": "manufacturerName_en help text",
   //    "isMultilingual": false,
   //    "name": "feedback",
   //    "readOnly": false,
   //    "label": "_Feedbacks",
   //    "placeholder": "",
   //    "type": "feedback",
   //    "upidsIo": {
   //       "tabName": "Feedback",
   //       "tabRequired": true,
   //       "fieldRequired": true,
   //       "section": "",
   //       "subSection": "",
   //       "fieldOrder": 5.99,
   //       "label": "",
   //       "type": "feedback",
   //       "tabIcon": "bi bi-messenger"
   //    }
   // },
   // {
   //    "tabName": "",
   //    "tooltipText": "",
   //    "isMultilingual": false,
   //    "name": "linkedUpids",
   //    "readOnly": false,
   //    "label": "",
   //    "placeholder": "",
   //    "type": "",
   //    "upidsIo": {
   //       "tabName": "Linked",
   //       "section": "",
   //       "subSection": "",
   //       "fieldOrder": 7.99,
   //       "label": "",
   //       "type": "linked",
   //       "tabIcon": "bi bi-link-45deg",
   //       "valueFrom": "upidsProduct"
   //    }
   // },
   // {
   //    "tabName": "",
   //    "tooltipText": "",
   //    "isMultilingual": false,
   //    "name": "audio",
   //    "readOnly": false,
   //    "label": "",
   //    "placeholder": "",
   //    "type": "",
   //    "upidsIo": {
   //       "tabName": "Home",
   //       "fieldRequired": true,
   //       "section": "Company",
   //       "subSection": "",
   //       "fieldOrder": 1.11,
   //       "label": "",
   //       "type": "audio",
   //       "tabIcon": "bi bi-house"
   //    }
   // },
   // {
   //    "tabName": "",
   //    "tooltipText": "",
   //    "isMultilingual": false,
   //    "name": "QrCodeViewer",
   //    "readOnly": false,
   //    "label": "",
   //    "placeholder": "",
   //    "type": "",
   //    "upidsIo": {
   //       "sectionRequired": true,
   //       "tabName": "Home",
   //       "fieldRequired": true,
   //       "section": "multimedia",
   //       "subSection": "",
   //       "fieldOrder": 1.11,
   //       "label": "",
   //       "type": "qrCodeViewer",
   //       "tabIcon": "bi bi-house"
   //    }
   // },
   // {
   //    "tabName": "",
   //    "tooltipText": "",
   //    "isMultilingual": false,
   //    "name": "GrainpassData",
   //    "readOnly": false,
   //    "label": "",
   //    "placeholder": "",
   //    "type": "",
   //    "upidsIo": {
   //       "tabName": "GrainpassData",
   //       "section": "",
   //       "subSection": "",
   //       "fieldOrder": 5.99,
   //       "label": "",
   //       "type": "grainpassData",
   //       "tabIcon": "bi bi-pass-fill"
   //    }
   // },
   // {
   //    "tabName": "",
   //    "tooltipText": "",
   //    "isMultilingual": false,
   //    "name": "UserInstruction",
   //    "readOnly": false,
   //    "label": "",
   //    "placeholder": "",
   //    "type": "",
   //    "upidsIo": {
   //       "tabName": "General",
   //       "sectionTitle": true,
   //       "section": "More Information",
   //       "subSection": "",
   //       "fieldOrder": 5.99,
   //       "label": "",
   //       "type": "text",
   //       "tabIcon": "bi bi-three-dots"
   //    }
   // },
   // {
   //    "tabName": "Versioning_tab",
   //    "tooltipText": "manufacturerName_en help text",
   //    "isMultilingual": false,
   //    "name": "Versioning",
   //    "readOnly": false,
   //    "label": "_Versioning",
   //    "placeholder": "",
   //    "type": "versioning"
   // },
   // {
   //    "tabName": "",
   //    "tooltipText": "",
   //    "isMultilingual": false,
   //    "name": "uniqueIdentifier",
   //    "readOnly": false,
   //    "label": "",
   //    "placeholder": "",
   //    "type": "",
   //    "upidsIo": {
   //       "tabName": "Home",
   //       "fieldRequired": true,
   //       "section": "Company",
   //       "subSection": "",
   //       "fieldOrder": 1.1,
   //       "label": "Unique Identifier",
   //       "type": "uniqueIdentifier",
   //       "tabIcon": "bi bi-house"
   //    }
   // },
   // {
   //    "tooltipText": "",
   //    "name": "gs1DigitalLinkStructure",
   //    "readOnly": true,
   //    "label": "",
   //    "placeholder": "",
   //    "type": "gs1DigitalLinkStructure",
   //    "value": {
   //       "urlStructureList": [
   //          {
   //             "label": "",
   //             "value": "01/"
   //          },
   //          {
   //             "name": "gtin",
   //             "label": "gtin"
   //          },
   //          {
   //             "label": "",
   //             "value": "/21/"
   //          },
   //          {
   //             "name": "upidsCodeSegment2",
   //             "label": "upidsCodeSegment2"
   //          },
   //          {
   //             "label": "",
   //             "value": "A"
   //          },
   //          {
   //             "name": "upidsCodeSegment3",
   //             "label": "upidsCodeSegment3"
   //          },
   //          {
   //             "label": "",
   //             "value": "?17="
   //          },
   //          {
   //             "name": "expiryDate",
   //             "label": "expiryDate"
   //          }
   //       ]
   //    }
   // }
]
