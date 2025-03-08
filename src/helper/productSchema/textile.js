export default [
  {
     "tabName": "Identifier_tab",
     "tooltipText": "_2AN",
     "isMultilingual": false,
     "validationType": "string",
     "name": "_2an",
     "readOnly": true,
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
  {
     "tabName": "Identifier_tab",
     "tooltipText": "GTIN",
     "isMultilingual": false,
     "validationType": "string",
     "name": "gtin",
     "readOnly": true,
     "label": "_GTIN",
     "placeholder": "",
     "validations": [
        {
           "type": "matches",
           "params": [
              "^[0-9]{0}$|^[0-9]{8}$|^[0-9]{12}$|^[0-9]{14}$",
              "gtin should be 8 or 12 or 14 character & should be number."
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
        "label": "GTIN code",
        "type": "identifier",
        "tabIcon": "bi bi-house"
     }
  },
  {
     "tabName": "Identifier_tab",
     "tooltipText": "Business IDS",
     "validationType": "string",
     "readOnly": false,
     "label": "_Company",
     "type": "businessIdentifier_tabs",
     "parentTab": "General",
     "upidsIo": {
        "tabName": "Home",
        "section": "",
        "subSection": "",
        "label": "",
        "type": "",
        "tabIcon": "bi bi-house",
        "order": "1"
     },
     "isMultilingual": false,
     "options": [],
     "name": "businessIdentifier_tabs",
     "validations": [],
     "placeholder": ""
  },
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
           "params": [
              "This field is required Brand Name"
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
  {
     "tabName": "Identifier_tab",
     "tooltipText": "Created Date",
     "isMultilingual": false,
     "name": "createdDate",
     "readOnly": true,
     "label": "_Created Date",
     "placeholder": "",
     "type": "text",
     "parentTab": "General",
     "upidsIo": {
        "tabName": "Home",
        "tabRequired": true,
        "section": "Company",
        "subSection": "",
        "fieldOrder": 1.09,
        "label": "",
        "type": "dates",
        "tabIcon": "bi bi-house"
     }
  },
  {
     "tabName": "Identifier_tab",
     "tooltipText": "Modified Date",
     "isMultilingual": false,
     "name": "modifiedDate",
     "readOnly": true,
     "label": "_Modified Date",
     "placeholder": "",
     "type": "text",
     "parentTab": "General"
  },
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
  {
     "aiEnable": false,
     "tabName": "Identifier_tab",
     "tooltipText": "External sources",
     "isMultilingual": false,
     "name": "externalSources",
     "readOnly": false,
     "label": "External sources",
     "placeholder": "",
     "type": "externalSources",
     "parentTab": "General",
     "upidsIo": {
        "tabName": "Home",
        "tabRequired": true,
        "section": "certificationsLogo",
        "subSection": "",
        "fieldOrder": 1.032,
        "label": "",
        "type": "externalSources",
        "tabIcon": "bi bi-house"
     }
  },
  {
     "multimedia": [
        {
           "tabName": "Media_tab",
           "tooltipText": "_Product Profile Images",
           "sectionTooltipText": "Product Profile Images",
           "name": "primary[0]",
           "section": "Product profile Images",
           "readOnly": false,
           "label": "_Primary image",
           "placeholder": "",
           "type": "mediaImage",
           "upidsIo": {
              "sectionRequired": true,
              "tabName": "Home",
              "tabRequired": true,
              "section": "multimedia",
              "subSection": "",
              "fieldOrder": 1.02,
              "label": "",
              "type": "mediaImage",
              "tabIcon": "bi bi-three-dots",
              "swiperSlide": true
           }
        },
        {
           "tabName": "Media_tab",
           "tooltipText": "_Product profile Images",
           "name": "frontal[0]",
           "section": "Product profile Images",
           "readOnly": false,
           "label": "_frontal image",
           "placeholder": "",
           "type": "mediaImage",
           "upidsIo": {
              "sectionRequired": true,
              "tabName": "Home",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "multimedia",
              "subSection": "",
              "fieldOrder": 1.99,
              "label": "",
              "type": "mediaImage",
              "tabIcon": "bi bi-three-dots",
              "swiperSlide": true
           }
        },
        {
           "tabName": "Media_tab",
           "tooltipText": "",
           "name": "backside[0]",
           "section": "Product profile Images",
           "readOnly": false,
           "label": "_backside image",
           "placeholder": "",
           "type": "mediaImage",
           "upidsIo": {
              "sectionRequired": true,
              "tabName": "Home",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "multimedia",
              "subSection": "",
              "fieldOrder": 1.99,
              "label": "",
              "type": "mediaImage",
              "tabIcon": "bi bi-three-dots",
              "swiperSlide": true
           }
        },
        {
           "tabName": "Media_tab",
           "tooltipText": "",
           "name": "square[0]",
           "section": "Product profile Images",
           "readOnly": false,
           "label": "_square image",
           "placeholder": "",
           "type": "mediaImage"
        },
        {
           "tabName": "Media_tab",
           "tooltipText": "",
           "name": "logo[0]",
           "section": "Product profile Images",
           "readOnly": false,
           "label": "_logo image",
           "placeholder": "",
           "type": "mediaImage"
        },
        {
           "tabName": "Media_tab",
           "tooltipText": "",
           "sectionTooltipText": "Other Images",
           "name": "other",
           "section": "Other Images",
           "readOnly": false,
           "label": "",
           "placeholder": "",
           "type": "mediaImageOther",
           "upidsIo": {
              "sectionRequired": true,
              "tabName": "Home",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "multimedia",
              "subSection": "",
              "fieldOrder": 1.99,
              "label": "",
              "type": "mediaImageOther",
              "tabIcon": "bi bi-three-dots",
              "swiperSlide": true
           }
        },
        {
           "tabName": "Media_tab",
           "sectionTooltipText": "3d Models",
           "tooltipText": "",
           "name": "other",
           "section": "3D Models",
           "readOnly": false,
           "label": "",
           "placeholder": "",
           "type": "media3dmodel",
           "upidsIo": {
              "sectionRequired": true,
              "tabName": "Home",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "multimedia",
              "subSection": "",
              "fieldOrder": 1.99,
              "label": "",
              "type": "media3dmodel",
              "tabIcon": "bi bi-three-dots",
              "swiperSlide": true
           }
        },
        {
           "tabName": "Media_tab",
           "sectionTooltipText": "Videos",
           "tooltipText": "",
           "name": "other",
           "section": "Video",
           "readOnly": false,
           "label": "",
           "placeholder": "",
           "type": "video",
           "upidsIo": {
              "sectionRequired": true,
              "tabName": "Home",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "multimedia",
              "subSection": "",
              "fieldOrder": 1.99,
              "label": "",
              "type": "video",
              "tabIcon": "bi bi-three-dots",
              "swiperSlide": true
           }
        },
        {
           "tabName": "Media_tab",
           "sectionTooltipText": "Other Files",
           "tooltipText": "",
           "name": "pdf",
           "section": "PDF file",
           "readOnly": false,
           "label": "",
           "placeholder": "",
           "type": "pdf",
           "upidsIo": {
              "tabName": "General",
              "sectionTitle": true,
              "section": "More information",
              "subSection": "",
              "fieldOrder": 8.1,
              "label": "Other Files",
              "type": "pdfDownloader",
              "tabIcon": "bi bi-three-dots"
           }
        },
        {
           "tabName": "Media_tab",
           "sectionTooltipText": "Other Files",
           "tooltipText": "",
           "name": "other",
           "section": "Other file",
           "readOnly": false,
           "label": "",
           "placeholder": "",
           "type": "mediaOtherFile"
        }
     ]
  },
  {
     "tabName": "Media_tab",
     "tooltipText": "",
     "sectionTooltipText": "Video Urls",
     "name": "videos",
     "section": "Video URL",
     "readOnly": false,
     "label": "",
     "placeholder": "",
     "type": "videoUrl",
     "upidsIo": {
        "sectionRequired": true,
        "tabName": "Home",
        "sectionTitle": true,
        "tabRequired": true,
        "section": "multimedia",
        "subSection": "",
        "fieldOrder": 1.99,
        "label": "",
        "type": "videoUrl",
        "tabIcon": "bi bi-three-dots",
        "swiperSlide": true
     }
  },
  {
     "marketing": [
        {
           "tabName": "Marketing_tab",
           "tooltipText": "Website Url",
           "isMultilingual": false,
           "name": "websiteUrl",
           "readOnly": false,
           "label": "_Website Url",
           "placeholder": "Website Url",
           "type": "text",
           "upidsIo": {
              "tabName": "General",
              "sectionTitle": true,
              "section": "More information",
              "subSection": "",
              "fieldOrder": 8.06,
              "label": "Visite Website",
              "type": "links",
              "tabIcon": "bi bi-three-dots"
           }
        },
        {
           "tabName": "Marketing_tab",
           "tooltipText": "Overlay Url",
           "isMultilingual": false,
           "name": "overlayUrl",
           "readOnly": false,
           "label": "_Overlay Url",
           "placeholder": "",
           "type": "text"
        },
        {
           "tabName": "Marketing_tab",
           "tooltipText": "Public Email",
           "isMultilingual": false,
           "name": "publicEmail",
           "readOnly": false,
           "label": "_Public Email",
           "placeholder": "",
           "type": "text",
           "upidsIo": {
              "tabName": "General",
              "sectionTitle": true,
              "section": "More information",
              "subSection": "",
              "fieldOrder": 8.02,
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
           "type": "text",
           "upidsIo": {
              "tabName": "General",
              "sectionTitle": true,
              "section": "More information",
              "subSection": "",
              "fieldOrder": 8.03,
              "label": "Telephone",
              "type": "text",
              "tabIcon": "bi bi-three-dots"
           }
        },
        {
           "subsection": "Postal Address",
           "tabName": "Marketing_tab",
           "subSectionTooltipText": "Postal Address",
           "isMultilingual": false,
           "name": "postalAddress[0]",
           "readOnly": false,
           "placeholder": "Line 1",
           "type": "text",
           "upidsIo": {
              "tabName": "General",
              "sectionTitle": true,
              "section": "More information",
              "subSection": "",
              "fieldOrder": 8.09,
              "label": "Postal address",
              "type": "postalAddress",
              "tabIcon": "bi bi-three-dots"
           }
        },
        {
           "subsection": "Postal Address",
           "tabName": "Marketing_tab",
           "isMultilingual": false,
           "name": "postalAddress[1]",
           "readOnly": false,
           "placeholder": "Line 2",
           "type": "text"
        },
        {
           "subsection": "Postal Address",
           "tabName": "Marketing_tab",
           "isMultilingual": false,
           "name": "postalAddress[2]",
           "readOnly": false,
           "placeholder": "Line 3",
           "type": "text"
        },
        {
           "subsection": "Postal Address",
           "tabName": "Marketing_tab",
           "isMultilingual": false,
           "name": "postalAddress[3]",
           "readOnly": false,
           "placeholder": "Line 4",
           "type": "text"
        },
        {
           "aiEnable": true,
           "tabName": "Marketing_tab",
           "tooltipText": "Marketing Texts",
           "isMultilingual": true,
           "name": "marketingTexts",
           "readOnly": false,
           "label": "_Marketing Texts",
           "placeholder": "",
           "type": "textarea",
           "upidsIo": {
              "tabName": "General",
              "section": "More information",
              "subSection": "",
              "fieldOrder": 8.01,
              "label": "",
              "type": "text",
              "tabIcon": "bi bi-three-dots"
           }
        },
        {
           "tabName": "Marketing_tab",
           "tooltipText": "_Top Banner",
           "isMultilingual": true,
           "name": "banner1",
           "readOnly": false,
           "label": "_Top Banner",
           "placeholder": "",
           "type": "text",
           "upidsIo": {
              "tabName": "Home",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "",
              "subSection": "",
              "fieldOrder": 1.01,
              "label": "",
              "type": "banner",
              "tabIcon": "bi bi-house"
           }
        },
        {
           "tabName": "Marketing_tab",
           "tooltipText": "_Lower Banner",
           "isMultilingual": true,
           "name": "banner2",
           "readOnly": false,
           "label": "_Lower Banner",
           "placeholder": "",
           "type": "text",
           "upidsIo": {
              "tabName": "Home",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "",
              "subSection": "",
              "fieldOrder": 1.04,
              "label": "",
              "type": "banner",
              "tabIcon": "bi bi-house"
           }
        },
        {
           "tabName": "Marketing_tab",
           "tooltipText": "Usage Instructions text",
           "isMultilingual": true,
           "name": "usageInstructions",
           "readOnly": false,
           "label": "_Usage Instructions",
           "placeholder": "",
           "type": "textarea",
           "upidsIo": {
              "tabName": "General",
              "sectionTitle": true,
              "section": "More information",
              "subSection": "",
              "fieldOrder": 8.05,
              "label": "Usage instructions",
              "type": "text",
              "tabIcon": "bi bi-three-dots"
           }
        },
        {
           "tabName": "Marketing_tab",
           "tooltipText": "_Buy Now Urls",
           "isMultilingual": false,
           "name": "buyNowUrls",
           "readOnly": false,
           "label": "_Buy Now Urls",
           "placeholder": "",
           "type": "urlMultiAdd",
           "upidsIo": {
              "tabName": "General",
              "sectionTitle": true,
              "section": "More information",
              "subSection": "",
              "fieldOrder": 8.06,
              "label": "Buy now",
              "type": "externalLinks",
              "tabIcon": "bi bi-three-dots"
           }
        },
        {
           "tabName": "Marketing_tab",
           "tooltipText": "_Social Media Urls",
           "isMultilingual": false,
           "name": "socialMediaUrls",
           "readOnly": false,
           "label": "_Social Media Urls",
           "placeholder": "",
           "type": "urlMultiAdd",
           "upidsIo": {
              "tabName": "General",
              "sectionTitle": true,
              "section": "More information",
              "subSection": "",
              "fieldOrder": 8.07,
              "label": "Social media",
              "type": "externalLinks",
              "tabIcon": "bi bi-three-dots"
           }
        },
        {
           "tabName": "Marketing_tab",
           "tooltipText": "External links urls text",
           "isMultilingual": false,
           "name": "externalLinks",
           "readOnly": false,
           "label": "_External Links",
           "placeholder": "",
           "type": "urlMultiAdd",
           "upidsIo": {
              "tabName": "General",
              "sectionTitle": true,
              "section": "More information",
              "subSection": "",
              "fieldOrder": 8.08,
              "label": "External Links",
              "type": "externalLinks",
              "tabIcon": "bi bi-three-dots"
           }
        }
     ]
  },
  {
     "tabName": "Marketing_tab",
     "tooltipText": "Certifications",
     "name": "certifications",
     "readOnly": false,
     "label": "_Certifications",
     "type": "null",
     "upidsIo": {
        "tabName": "Home",
        "tabRequired": true,
        "section": "certificationsLogo",
        "subSection": "",
        "fieldOrder": 1.031,
        "label": "",
        "type": "certificationsLogo",
        "tabIcon": "bi bi-house"
     }
  },
  {
     "tabName": "Marketing_tab",
     "tooltipText": "_Certifications",
     "isMultilingual": false,
     "name": "certifications",
   //   "options": [
   //      {
   //         "label": "UTZ",
   //         "value": "utz"
   //      },
   //      {
   //         "label": "Rainforest Alliance",
   //         "value": "rainforestalliance"
   //      }
   //   ],
     "readOnly": false,
     "label": "_Certifications",
     "placeholder": "",
     "type": "certificationMultiSelectWithModal",
     "upidsIo": {
        "tabName": "Home",
        "sectionTitle": true,
        "tabRequired": true,
        "section": "Certifications",
        "subSection": "",
        "fieldOrder": 1.2,
        "label": "",
        "type": "certifications",
        "tabIcon": "bi bi-house"
     }
  },
  {
     "carbonFootprint": [
        {
           "tabName": "Marketing_tab",
           "tooltipText": "_Carbon footprint total",
           "isMultilingual": false,
           "name": "total",
           "section": "Carbon footprint",
           "readOnly": false,
           "label": "Carbon footprint total",
           "placeholder": "",
           "type": "text",
           "upidsIo": {
              "tabName": "Home",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Carbon Footprint Data",
              "subSection": "",
              "fieldOrder": 1.11,
              "label": "Total",
              "type": "text",
              "tabIcon": "bi bi-house"
           },
           "validation": ""
        },
        {
           "tabName": "Marketing_tab",
           "tooltipText": "_Carbon footprint date of calculation",
           "isMultilingual": false,
           "name": "dateOfCalculation",
           "section": "Carbon footprint",
           "readOnly": false,
           "label": "Carbon footprint date of calculation",
           "placeholder": "",
           "type": "text",
           "upidsIo": {
              "tabName": "Home",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Carbon Footprint Data",
              "subSection": "",
              "fieldOrder": 1.12,
              "label": "Date Of Calculation",
              "type": "text",
              "tabIcon": "bi bi-house"
           },
           "validation": ""
        },
        {
           "tabName": "Marketing_tab",
           "tooltipText": "_Carbon footprint source",
           "isMultilingual": false,
           "name": "source",
           "section": "Carbon footprint",
           "readOnly": false,
           "label": "Carbon footprint source",
           "placeholder": "",
           "type": "text",
           "upidsIo": {
              "tabName": "Home",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Carbon Footprint Data",
              "subSection": "",
              "fieldOrder": 1.13,
              "label": "Source",
              "type": "text",
              "tabIcon": "bi bi-house"
           },
           "validation": ""
        },
        {
           "tabName": "Marketing_tab",
           "tooltipText": "_Carbon footprint external reference",
           "isMultilingual": false,
           "name": "externalReference",
           "section": "Carbon footprint",
           "readOnly": false,
           "label": "Carbon footprint external reference",
           "placeholder": "",
           "type": "text",
           "upidsIo": {
              "tabName": "Home",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Carbon Footprint Data",
              "subSection": "",
              "fieldOrder": 1.14,
              "label": "External Reference",
              "type": "text",
              "tabIcon": "bi bi-house"
           },
           "validation": ""
        }
     ]
  },
  {
     "marketing.custom": [
        {
           "tabName": "Marketing_tab",
           "tooltipText": "Background Color",
           "sectionTooltipText": "Custom Header",
           "isMultilingual": false,
           "name": "bgColor",
           "section": "Custom header",
           "readOnly": false,
           "label": "_Background Color",
           "placeholder": "",
           "type": "color"
        },
        {
           "tabName": "Marketing_tab",
           "tooltipText": "Header Text",
           "isMultilingual": false,
           "name": "headerText",
           "section": "Custom header",
           "readOnly": false,
           "label": "_Header Text",
           "placeholder": "",
           "type": "text"
        }
     ]
  },
  {
     "tabName": "Marketing_tab",
     "tooltipText": "_Email consent",
     "isMultilingual": false,
     "name": "emailConsent",
     "readOnly": false,
     "label": "_Email consent",
     "placeholder": "",
     "type": "emailConsent"
  },
  {
     "tabName": "Manufacturer_tab",
     "componentSchema": [
        {
           "tabName": "Manufacturer_tab",
           "tooltipText": "_Manufacturer Name",
           "isMultilingual": false,
           "name": "name",
           "readOnly": false,
           "label": "_Manufacturer Name",
           "placeholder": "",
           "type": "text"
        },
        {
           "tabName": "Manufacturer_tab",
           "tooltipText": "_Business Id",
           "isMultilingual": false,
           "name": "businessId",
           "readOnly": false,
           "label": "_Business Id",
           "placeholder": "",
           "type": "text"
        },
        {
           "tabName": "Manufacturer_tab",
           "tooltipText": "_Contact",
           "isMultilingual": false,
           "name": "contact",
           "readOnly": false,
           "label": "_Contact",
           "placeholder": "",
           "type": "text"
        },
        {
           "tabName": "Manufacturer_tab",
           "tooltipText": "_Address",
           "isMultilingual": false,
           "name": "address",
           "readOnly": false,
           "label": "_Address",
           "placeholder": "",
           "type": "text"
        }
     ],
     "manufacturesSchema": [
        {
           "tabName": "Manufacturer_tab",
           "tooltipText": "Company Name",
           "isMultilingual": false,
           "name": "name",
           "readOnly": false,
           "label": "_Company Name",
           "placeholder": "",
           "type": "text",
           "parentTab": "General"
        },
        {
           "tabName": "Manufacturer_tab",
           "tooltipText": "Company Id",
           "isMultilingual": false,
           "name": "businessId",
           "readOnly": false,
           "label": "_Company Id",
           "placeholder": "",
           "type": "text",
           "parentTab": "General"
        }
     ],
     "readOnly": false,
     "placeholder": "",
     "type": "manufacturerDetails"
  },
  {
     "tabName": "Manufacturer_tab",
     "tooltipText": "Recipient Emails",
     "isMultilingual": false,
     "name": "private.feedback.emails",
     "readOnly": false,
     "label": "_Feedback Recipient Emails",
     "placeholder": "",
     "type": "emailMultiAdd"
  },
  {
     "tabName": "Manufacturer_tab",
     "name": "ecommerce",
     "type": "ecommerce"
  },
  {
     "directCommerce": [
        {
           "tabName": "Sales_tab",
           "tooltipText": "Status",
           "isMultilingual": false,
           "validationType": "string",
           "name": "status",
           "showTooltip": true,
           "options": [
              {
                 "label": "Sell",
                 "value": "sell"
              },
              {
                 "label": "Presale",
                 "value": "presale"
              },
              {
                 "label": "Nostock",
                 "value": "nostock"
              }
           ],
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "_Status",
           "type": "select"
        },
        {
           "tabName": "Sales_tab",
           "tooltipText": "Price",
           "isMultilingual": false,
           "validationType": "string",
           "name": "price",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "_Price",
           "type": "number"
        },
        {
           "tabName": "Sales_tab",
           "tooltipText": "Tax",
           "isMultilingual": false,
           "validationType": "string",
           "name": "tax",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "_Tax",
           "type": "text"
        },
        {
           "tabName": "Sales_tab",
           "tooltipText": "Shipping",
           "isMultilingual": false,
           "validationType": "string",
           "name": "shipping",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "_Shipping",
           "type": "text"
        },
        {
           "tabName": "Sales_tab",
           "tooltipText": "Delivery Type",
           "isMultilingual": false,
           "validationType": "string",
           "name": "deliveryType",
           "showTooltip": true,
           "options": [
              {
                 "label": "Postal",
                 "value": "postal"
              },
              {
                 "label": "Digital",
                 "value": "digital"
              },
              {
                 "label": "Direct",
                 "value": "direct"
              }
           ],
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "_Delivery Type",
           "type": "select"
        },
        {
           "tabName": "Sales_tab",
           "tooltipText": "Currency Type",
           "isMultilingual": false,
           "validationType": "string",
           "name": "currencyType",
           "showTooltip": true,
           "options": [
              {
                 "label": "EUR",
                 "value": "EUR"
              },
              {
                 "label": "AED",
                 "value": "AED"
              },
              {
                 "label": "AFN",
                 "value": "AFN"
              },
              {
                 "label": "XCD",
                 "value": "XCD"
              },
              {
                 "label": "ALL",
                 "value": "ALL"
              },
              {
                 "label": "AMD",
                 "value": "AMD"
              },
              {
                 "label": "AOA",
                 "value": "AOA"
              },
              {
                 "label": "ARS",
                 "value": "ARS"
              },
              {
                 "label": "USD",
                 "value": "USD"
              },
              {
                 "label": "AUD",
                 "value": "AUD"
              },
              {
                 "label": "AWG",
                 "value": "AWG"
              },
              {
                 "label": "AZN",
                 "value": "AZN"
              },
              {
                 "label": "BAM",
                 "value": "BAM"
              },
              {
                 "label": "BBD",
                 "value": "BBD"
              },
              {
                 "label": "BDT",
                 "value": "BDT"
              },
              {
                 "label": "XOF",
                 "value": "XOF"
              },
              {
                 "label": "BGN",
                 "value": "BGN"
              },
              {
                 "label": "BHD",
                 "value": "BHD"
              },
              {
                 "label": "BIF",
                 "value": "BIF"
              },
              {
                 "label": "BMD",
                 "value": "BMD"
              },
              {
                 "label": "BND",
                 "value": "BND"
              },
              {
                 "label": "BOB",
                 "value": "BOB"
              },
              {
                 "label": "BRL",
                 "value": "BRL"
              },
              {
                 "label": "BSD",
                 "value": "BSD"
              },
              {
                 "label": "BTN",
                 "value": "BTN"
              },
              {
                 "label": "NOK",
                 "value": "NOK"
              },
              {
                 "label": "BWP",
                 "value": "BWP"
              },
              {
                 "label": "BYN",
                 "value": "BYN"
              },
              {
                 "label": "BZD",
                 "value": "BZD"
              },
              {
                 "label": "CAD",
                 "value": "CAD"
              },
              {
                 "label": "CDF",
                 "value": "CDF"
              },
              {
                 "label": "XAF",
                 "value": "XAF"
              },
              {
                 "label": "CHF",
                 "value": "CHF"
              },
              {
                 "label": "NZD",
                 "value": "NZD"
              },
              {
                 "label": "CLP",
                 "value": "CLP"
              },
              {
                 "label": "CNY",
                 "value": "CNY"
              },
              {
                 "label": "COP",
                 "value": "COP"
              },
              {
                 "label": "CRC",
                 "value": "CRC"
              },
              {
                 "label": "CUP",
                 "value": "CUP"
              },
              {
                 "label": "CVE",
                 "value": "CVE"
              },
              {
                 "label": "ANG",
                 "value": "ANG"
              },
              {
                 "label": "CZK",
                 "value": "CZK"
              },
              {
                 "label": "DJF",
                 "value": "DJF"
              },
              {
                 "label": "DKK",
                 "value": "DKK"
              },
              {
                 "label": "DOP",
                 "value": "DOP"
              },
              {
                 "label": "DZD",
                 "value": "DZD"
              },
              {
                 "label": "EGP",
                 "value": "EGP"
              },
              {
                 "label": "MAD",
                 "value": "MAD"
              },
              {
                 "label": "ERN",
                 "value": "ERN"
              },
              {
                 "label": "ETB",
                 "value": "ETB"
              },
              {
                 "label": "FJD",
                 "value": "FJD"
              },
              {
                 "label": "FKP",
                 "value": "FKP"
              },
              {
                 "label": "GBP",
                 "value": "GBP"
              },
              {
                 "label": "GEL",
                 "value": "GEL"
              },
              {
                 "label": "GHS",
                 "value": "GHS"
              },
              {
                 "label": "GIP",
                 "value": "GIP"
              },
              {
                 "label": "GMD",
                 "value": "GMD"
              },
              {
                 "label": "GNF",
                 "value": "GNF"
              },
              {
                 "label": "GTQ",
                 "value": "GTQ"
              },
              {
                 "label": "GYD",
                 "value": "GYD"
              },
              {
                 "label": "HKD",
                 "value": "HKD"
              },
              {
                 "label": "HNL",
                 "value": "HNL"
              },
              {
                 "label": "HRK",
                 "value": "HRK"
              },
              {
                 "label": "HTG",
                 "value": "HTG"
              },
              {
                 "label": "HUF",
                 "value": "HUF"
              },
              {
                 "label": "IDR",
                 "value": "IDR"
              },
              {
                 "label": "ILS",
                 "value": "ILS"
              },
              {
                 "label": "INR",
                 "value": "INR"
              },
              {
                 "label": "IQD",
                 "value": "IQD"
              },
              {
                 "label": "IRR",
                 "value": "IRR"
              },
              {
                 "label": "ISK",
                 "value": "ISK"
              },
              {
                 "label": "JMD",
                 "value": "JMD"
              },
              {
                 "label": "JOD",
                 "value": "JOD"
              },
              {
                 "label": "JPY",
                 "value": "JPY"
              },
              {
                 "label": "KES",
                 "value": "KES"
              },
              {
                 "label": "KGS",
                 "value": "KGS"
              },
              {
                 "label": "KHR",
                 "value": "KHR"
              },
              {
                 "label": "KMF",
                 "value": "KMF"
              },
              {
                 "label": "KPW",
                 "value": "KPW"
              },
              {
                 "label": "KRW",
                 "value": "KRW"
              },
              {
                 "label": "KWD",
                 "value": "KWD"
              },
              {
                 "label": "KYD",
                 "value": "KYD"
              },
              {
                 "label": "KZT",
                 "value": "KZT"
              },
              {
                 "label": "LAK",
                 "value": "LAK"
              },
              {
                 "label": "LBP",
                 "value": "LBP"
              },
              {
                 "label": "LKR",
                 "value": "LKR"
              },
              {
                 "label": "LRD",
                 "value": "LRD"
              },
              {
                 "label": "LSL",
                 "value": "LSL"
              },
              {
                 "label": "LYD",
                 "value": "LYD"
              },
              {
                 "label": "MDL",
                 "value": "MDL"
              },
              {
                 "label": "MGA",
                 "value": "MGA"
              },
              {
                 "label": "MKD",
                 "value": "MKD"
              },
              {
                 "label": "MMK",
                 "value": "MMK"
              },
              {
                 "label": "MNT",
                 "value": "MNT"
              },
              {
                 "label": "MOP",
                 "value": "MOP"
              },
              {
                 "label": "MRO",
                 "value": "MRO"
              },
              {
                 "label": "MUR",
                 "value": "MUR"
              },
              {
                 "label": "MVR",
                 "value": "MVR"
              },
              {
                 "label": "MWK",
                 "value": "MWK"
              },
              {
                 "label": "MXN",
                 "value": "MXN"
              },
              {
                 "label": "MYR",
                 "value": "MYR"
              },
              {
                 "label": "MZN",
                 "value": "MZN"
              },
              {
                 "label": "NAD",
                 "value": "NAD"
              },
              {
                 "label": "XPF",
                 "value": "XPF"
              },
              {
                 "label": "NGN",
                 "value": "NGN"
              },
              {
                 "label": "NIO",
                 "value": "NIO"
              },
              {
                 "label": "NPR",
                 "value": "NPR"
              },
              {
                 "label": "OMR",
                 "value": "OMR"
              },
              {
                 "label": "PAB",
                 "value": "PAB"
              },
              {
                 "label": "PEN",
                 "value": "PEN"
              },
              {
                 "label": "PGK",
                 "value": "PGK"
              },
              {
                 "label": "PHP",
                 "value": "PHP"
              },
              {
                 "label": "PKR",
                 "value": "PKR"
              },
              {
                 "label": "PLN",
                 "value": "PLN"
              },
              {
                 "label": "PYG",
                 "value": "PYG"
              },
              {
                 "label": "QAR",
                 "value": "QAR"
              },
              {
                 "label": "RON",
                 "value": "RON"
              },
              {
                 "label": "RSD",
                 "value": "RSD"
              },
              {
                 "label": "RUB",
                 "value": "RUB"
              },
              {
                 "label": "RWF",
                 "value": "RWF"
              },
              {
                 "label": "SAR",
                 "value": "SAR"
              },
              {
                 "label": "SBD",
                 "value": "SBD"
              },
              {
                 "label": "SCR",
                 "value": "SCR"
              },
              {
                 "label": "SDG",
                 "value": "SDG"
              },
              {
                 "label": "SEK",
                 "value": "SEK"
              },
              {
                 "label": "SGD",
                 "value": "SGD"
              },
              {
                 "label": "SHP",
                 "value": "SHP"
              },
              {
                 "label": "SLL",
                 "value": "SLL"
              },
              {
                 "label": "SOS",
                 "value": "SOS"
              },
              {
                 "label": "SRD",
                 "value": "SRD"
              },
              {
                 "label": "SSP",
                 "value": "SSP"
              },
              {
                 "label": "STD",
                 "value": "STD"
              },
              {
                 "label": "SYP",
                 "value": "SYP"
              },
              {
                 "label": "SZL",
                 "value": "SZL"
              },
              {
                 "label": "THB",
                 "value": "THB"
              },
              {
                 "label": "TJS",
                 "value": "TJS"
              },
              {
                 "label": "TMT",
                 "value": "TMT"
              },
              {
                 "label": "TND",
                 "value": "TND"
              },
              {
                 "label": "TOP",
                 "value": "TOP"
              },
              {
                 "label": "TRY",
                 "value": "TRY"
              },
              {
                 "label": "TTD",
                 "value": "TTD"
              },
              {
                 "label": "TWD",
                 "value": "TWD"
              },
              {
                 "label": "TZS",
                 "value": "TZS"
              },
              {
                 "label": "UAH",
                 "value": "UAH"
              },
              {
                 "label": "UGX",
                 "value": "UGX"
              },
              {
                 "label": "UYU",
                 "value": "UYU"
              },
              {
                 "label": "UZS",
                 "value": "UZS"
              },
              {
                 "label": "VEF",
                 "value": "VEF"
              },
              {
                 "label": "VND",
                 "value": "VND"
              },
              {
                 "label": "VUV",
                 "value": "VUV"
              },
              {
                 "label": "WST",
                 "value": "WST"
              },
              {
                 "label": "YER",
                 "value": "YER"
              },
              {
                 "label": "ZAR",
                 "value": "ZAR"
              },
              {
                 "label": "ZMW",
                 "value": "ZMW"
              },
              {
                 "label": "ZWL",
                 "value": "ZWL"
              },
              {
                 "label": "MRU",
                 "value": "MRU"
              },
              {
                 "label": "STN",
                 "value": "STN"
              }
           ],
           "readOnly": false,
           "validations": [],
           "label": "_Currency Type",
           "placeholder": "",
           "type": "select"
        }
     ]
  },
  {
     "textileSizing": [
        {
           "tabName": "Sizing_tab",
           "tooltipText": "Size chart",
           "isMultilingual": false,
           "validationType": "string",
           "name": "sizeChart",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "_Size Chart",
           "type": "number",
           "upidsIo": {
              "tabName": "Sizing",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Sizing",
              "subSection": "",
              "fieldOrder": 2.2,
              "label": "Size Chart",
              "type": "text",
              "tabIcon": "bi bi-rulers"
           }
        },
        {
           "tabName": "Sizing_tab",
           "tooltipText": "Phisical Dimentions",
           "isMultilingual": false,
           "validationType": "string",
           "name": "physicalDimentions",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "_Phisical Dimentions",
           "type": "number",
           "upidsIo": {
              "tabName": "Sizing",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Sizing",
              "subSection": "",
              "fieldOrder": 2.2,
              "label": "Physical Dimentions",
              "type": "text",
              "tabIcon": "bi bi-rulers"
           }
        },
        {
           "tabName": "Sizing_tab",
           "tooltipText": "Weight",
           "isMultilingual": false,
           "validationType": "string",
           "name": "weight",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "_Weight",
           "type": "number",
           "upidsIo": {
              "tabName": "Sizing",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Sizing",
              "subSection": "",
              "fieldOrder": 2.2,
              "label": "Weight",
              "type": "text",
              "tabIcon": "bi bi-rulers"
           }
        },
        {
           "tabName": "Sizing_tab",
           "tooltipText": "Body Type",
           "isMultilingual": false,
           "validationType": "string",
           "name": "bodyType",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "_Body Type",
           "type": "number",
           "upidsIo": {
              "tabName": "Sizing",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Sizing",
              "subSection": "",
              "fieldOrder": 2.2,
              "label": "Body Type",
              "type": "text",
              "tabIcon": "bi bi-rulers"
           }
        }
     ]
  },
  {
     "material": [
        {
           "tabName": "Material_tab",
           "tooltipText": "Color",
           "isMultilingual": false,
           "validationType": "string",
           "name": "color",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "Color",
           "type": "text",
           "upidsIo": {
              "tabName": "Material",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Material",
              "subSection": "",
              "fieldOrder": 3.2,
              "label": "Color",
              "type": "text",
              "tabIcon": "bi bi-layers"
           }
        },
        {
           "tabName": "Material_tab",
           "tooltipText": "Fiber Content",
           "isMultilingual": false,
           "validationType": "string",
           "name": "fiberContent",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "Fiber Content",
           "type": "text",
           "upidsIo": {
              "tabName": "Material",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Material",
              "subSection": "",
              "fieldOrder": 3.2,
              "label": "Fiber Content",
              "type": "text",
              "tabIcon": "bi bi-layers"
           }
        },
        {
           "tabName": "Material_tab",
           "tooltipText": "Material Info",
           "isMultilingual": false,
           "validationType": "string",
           "name": "materialInfo",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "Material Info",
           "type": "text",
           "upidsIo": {
              "tabName": "Material",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Material",
              "subSection": "",
              "fieldOrder": 3.2,
              "label": "Material Info",
              "type": "text",
              "tabIcon": "bi bi-layers"
           }
        },
        {
           "tabName": "Material_tab",
           "tooltipText": "General Fiber Info",
           "isMultilingual": false,
           "validationType": "string",
           "name": "generalFiberInfo",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "General Fiber Info",
           "type": "text",
           "upidsIo": {
              "tabName": "Material",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Material",
              "subSection": "",
              "fieldOrder": 3.2,
              "label": "General Fiber Info",
              "type": "text",
              "tabIcon": "bi bi-layers"
           }
        }
     ]
  },
  {
     "productLifecycleStage": [
        {
           "tabName": "productLifecycleStage_tab",
           "tooltipText": "Introduction",
           "isMultilingual": false,
           "validationType": "string",
           "name": "introduction",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "Introduction",
           "type": "text",
           "upidsIo": {
              "tabName": "Lifecycle",
              "sectionTitle": true,
              "section": "Product Lifecycle Stage",
              "subSection": "",
              "fieldOrder": 6.11,
              "label": "Introduction",
              "type": "text",
              "tabIcon": "bi bi-layers"
           }
        },
        {
           "tabName": "productLifecycleStage_tab",
           "tooltipText": "Growth",
           "isMultilingual": false,
           "validationType": "string",
           "name": "growth",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "Growth",
           "type": "text",
           "upidsIo": {
              "tabName": "Lifecycle",
              "sectionTitle": true,
              "section": "Product Lifecycle Stage",
              "subSection": "",
              "fieldOrder": 6.11,
              "label": "Growth",
              "type": "text",
              "tabIcon": "bi bi-layers"
           }
        },
        {
           "tabName": "productLifecycleStage_tab",
           "tooltipText": "Maturity",
           "isMultilingual": false,
           "validationType": "string",
           "name": "maturity",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "Maturity",
           "type": "text",
           "upidsIo": {
              "tabName": "Lifecycle",
              "sectionTitle": true,
              "section": "Product Lifecycle Stage",
              "subSection": "",
              "fieldOrder": 6.11,
              "label": "Maturity",
              "type": "text",
              "tabIcon": "bi bi-layers"
           }
        },
        {
           "tabName": "productLifecycleStage_tab",
           "tooltipText": "Decline",
           "isMultilingual": false,
           "validationType": "string",
           "name": "decline",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "Decline",
           "type": "text",
           "upidsIo": {
              "tabName": "Lifecycle",
              "sectionTitle": true,
              "section": "Product Lifecycle Stage",
              "subSection": "",
              "fieldOrder": 6.11,
              "label": "Decline",
              "type": "text",
              "tabIcon": "bi bi-layers"
           }
        }
     ]
  },
  {
     "production": [
        {
           "tabName": "Production_tab",
           "tooltipText": "Pieces Produced",
           "isMultilingual": false,
           "validationType": "string",
           "name": "piecesProduced",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "Pieces Produced",
           "type": "text",
           "upidsIo": {
              "tabName": "Production",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Production",
              "subSection": "",
              "fieldOrder": 4.11,
              "label": "Pieces Produced",
              "type": "text",
              "tabIcon": "bi bi-journal-text"
           }
        },
        {
           "tabName": "Production_tab",
           "tooltipText": "Where Produced",
           "isMultilingual": false,
           "validationType": "string",
           "name": "whereProduced",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "Where Produced",
           "type": "text",
           "upidsIo": {
              "tabName": "Production",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Production",
              "subSection": "",
              "fieldOrder": 4.11,
              "label": "Where Produced",
              "type": "text",
              "tabIcon": "bi bi-journal-text"
           }
        },
        {
           "tabName": "Production_tab",
           "tooltipText": "Production Price",
           "isMultilingual": false,
           "validationType": "string",
           "name": "productionPrice",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "Production Price",
           "type": "text",
           "upidsIo": {
              "tabName": "Production",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Production",
              "subSection": "",
              "fieldOrder": 4.11,
              "label": "Production Price",
              "type": "text",
              "tabIcon": "bi bi-journal-text"
           }
        },
        {
           "tabName": "Production_tab",
           "tooltipText": "Season",
           "isMultilingual": false,
           "validationType": "string",
           "name": "season",
           "showTooltip": true,
           "readOnly": false,
           "validations": [],
           "placeholder": "",
           "label": "Season",
           "type": "text",
           "upidsIo": {
              "tabName": "Production",
              "sectionTitle": true,
              "tabRequired": true,
              "section": "Production",
              "subSection": "",
              "fieldOrder": 4.11,
              "label": "Season",
              "type": "text",
              "tabIcon": "bi bi-journal-text"
           }
        }
     ]
  },
  {
     "tabName": "Category_tab",
     "tooltipText": "manufacturerName_en help text",
     "isMultilingual": false,
     "name": "restrictions",
     "readOnly": false,
     "label": "_Restrictions",
     "placeholder": "",
     "type": "restrictions"
  },
  {
     "category": [
        {
           "tabName": "Category_tab",
           "tooltipText": "Select Segment",
           "isMultilingual": true,
           "name": "segmentCode.id",
           "readOnly": false,
           "label": "_Segment",
           "placeholder": "",
           "type": "select"
        },
        {
           "tabName": "Category_tab",
           "tooltipText": "Select family",
           "isMultilingual": true,
           "name": "familyCode.id",
           "dependsOnName": "segmentCode.id",
           "readOnly": false,
           "label": "_Family",
           "placeholder": "",
           "type": "select"
        },
        {
           "tabName": "Category_tab",
           "tooltipText": "Select Class",
           "isMultilingual": true,
           "name": "classCode.id",
           "dependsOnName": "familyCode.id",
           "readOnly": false,
           "label": "_Class",
           "placeholder": "",
           "type": "select"
        },
        {
           "tabName": "Category_tab",
           "tooltipText": "Select Category",
           "isMultilingual": true,
           "name": "categoryCode.id",
           "dependsOnName": "classCode.id",
           "readOnly": false,
           "label": "_Category",
           "placeholder": "",
           "type": "select"
        }
     ]
  },
  {
     "tabName": "UPIDS Product_tab",
     "tooltipText": "manufacturerName_en help text",
     "isMultilingual": false,
     "name": "UPIDS_Product",
     "readOnly": false,
     "label": "_UPIDS Product",
     "placeholder": "",
     "type": "upidsProduct"
  },
  {
     "tabName": "Feedbacks_tab",
     "tooltipText": "manufacturerName_en help text",
     "isMultilingual": false,
     "name": "feedback",
     "readOnly": false,
     "label": "_Feedbacks",
     "placeholder": "",
     "type": "feedback",
     "upidsIo": {
        "tabName": "Feedback",
        "tabRequired": true,
        "fieldRequired": true,
        "section": "",
        "subSection": "",
        "fieldOrder": 7.99,
        "label": "",
        "type": "feedback",
        "tabIcon": "bi bi-messenger"
     }
  },
  {
     "tabName": "Versioning_tab",
     "tooltipText": "manufacturerName_en help text",
     "isMultilingual": false,
     "name": "Versioning",
     "readOnly": false,
     "label": "_Versioning",
     "placeholder": "",
     "type": "versioning"
  },
  {
     "tabName": "",
     "tooltipText": "",
     "isMultilingual": false,
     "name": "linkedUpids",
     "readOnly": false,
     "label": "",
     "placeholder": "",
     "type": "",
     "upidsIo": {
        "tabName": "Linked",
        "section": "",
        "subSection": "",
        "fieldOrder": 9.99,
        "label": "",
        "type": "linked",
        "tabIcon": "bi bi-link-45deg",
        "valueFrom": "upidsProduct"
     }
  },
  {
     "tabName": "",
     "tooltipText": "",
     "isMultilingual": false,
     "name": "audio",
     "readOnly": false,
     "label": "",
     "placeholder": "",
     "type": "",
     "upidsIo": {
        "tabName": "Home",
        "fieldRequired": true,
        "section": "Company",
        "subSection": "",
        "fieldOrder": 1.11,
        "label": "",
        "type": "audio",
        "tabIcon": "bi bi-house"
     }
  },
  {
     "tabName": "",
     "tooltipText": "",
     "isMultilingual": false,
     "name": "QrCodeViewer",
     "readOnly": false,
     "label": "",
     "placeholder": "",
     "type": "",
     "upidsIo": {
        "sectionRequired": true,
        "tabName": "Home",
        "fieldRequired": true,
        "section": "multimedia",
        "subSection": "",
        "fieldOrder": 1.11,
        "label": "",
        "type": "qrCodeViewer",
        "tabIcon": "bi bi-house"
     }
  },
  {
     "tabName": "",
     "tooltipText": "",
     "isMultilingual": false,
     "name": "directCommerce",
     "readOnly": false,
     "label": "",
     "placeholder": "",
     "type": "",
     "upidsIo": {
        "tabName": "Home",
        "sectionTitle": true,
        "section": "Company",
        "subSection": "",
        "fieldOrder": 5.99,
        "label": "",
        "type": "directCommerce",
        "tabIcon": "bi bi-three-dots"
     }
  },
  {
     "tabName": "",
     "tooltipText": "",
     "isMultilingual": false,
     "name": "uniqueIdentifier",
     "readOnly": false,
     "label": "",
     "placeholder": "",
     "type": "",
     "upidsIo": {
        "tabName": "Home",
        "fieldRequired": true,
        "section": "Company",
        "subSection": "",
        "fieldOrder": 1.1,
        "label": "Unique Identifier",
        "type": "uniqueIdentifier",
        "tabIcon": "bi bi-house"
     }
  },
  {
     "tooltipText": "",
     "name": "gs1DigitalLinkStructure",
     "readOnly": true,
     "label": "",
     "placeholder": "",
     "type": "gs1DigitalLinkStructure",
     "value": {
        "urlStructureList": [
           {
              "label": "",
              "value": "01/"
           },
           {
              "name": "gtin",
              "label": "gtin"
           },
           {
              "label": "",
              "value": "/21/"
           },
           {
              "name": "upidsCodeSegment2",
              "label": "upidsCodeSegment2"
           },
           {
              "label": "",
              "value": "A"
           },
           {
              "name": "upidsCodeSegment3",
              "label": "upidsCodeSegment3"
           }
        ]
     }
  }
]
