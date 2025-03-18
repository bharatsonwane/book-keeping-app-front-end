const test = {
    productTabStructuredSchema: [
      {
        tabName: 'General',
        childTabList: [
          {
            tabName: 'Identifier_tab',
            fieldList: [
              {
                tabName: 'Identifier_tab',
                tooltipText: '_2AN',
                isMultilingual: false,
                validationType: 'string',
                name: '_2an',
                readOnly: true,
                label: '__2AN',
                placeholder: '',
                validations: [
                  {
                    type: 'required',
                    params: [
                      'This field is required'
                    ]
                  }
                ],
                type: 'text',
                parentTab: 'General',
                upidsIo: {
                  tabName: 'Home',
                  tabRequired: true,
                  section: 'Company',
                  subSection: '',
                  fieldOrder: 1.11,
                  label: 'Article Number',
                  type: 'identifier',
                  tabIcon: 'bi bi-house'
                },
                nameUpdated: '_2an',
                updateData: {}
              },
              {
                tabName: 'Identifier_tab',
                tooltipText: 'GTIN',
                isMultilingual: false,
                validationType: 'string',
                name: 'gtin',
                readOnly: true,
                label: '_GTIN',
                placeholder: '',
                validations: [
                  {
                    type: 'matches',
                    params: [
                      '^[0-9]{0}$|^[0-9]{8}$|^[0-9]{12}$|^[0-9]{14}$',
                      'gtin should be 8 or 12 or 14 character & should be number.'
                    ]
                  }
                ],
                type: 'text',
                parentTab: 'General',
                upidsIo: {
                  tabName: 'Home',
                  tabRequired: true,
                  section: 'Company',
                  subSection: '',
                  fieldOrder: 1.11,
                  label: 'GTIN code',
                  type: 'identifier',
                  tabIcon: 'bi bi-house'
                },
                nameUpdated: 'gtin',
                updateData: {}
              },
              {
                tabName: 'Identifier_tab',
                tooltipText: '_Business Id',
                validationType: '',
                readOnly: true,
                label: '_Company',
                type: 'businessIdentifiers',
                parentTab: 'General',
                upidsIo: {
                  tabName: 'Home',
                  tabRequired: true,
                  section: 'Company',
                  subSection: '',
                  fieldOrder: 1.11,
                  label: 'Batch Id',
                  type: 'batchIds',
                  tabIcon: 'bi bi-house'
                },
                isMultilingual: false,
                options: [],
                name: 'businessIdentifiers',
                validations: [],
                placeholder: '',
                nameUpdated: 'businessIdentifiers'
              },
              {
                tabName: 'Identifier_tab',
                tooltipText: 'Brand Name',
                isMultilingual: false,
                validationType: 'string',
                name: 'brandName',
                readOnly: false,
                label: '_Brand Name',
                placeholder: '',
                validations: [
                  {
                    type: 'required',
                    params: [
                      'This field is required'
                    ]
                  }
                ],
                type: 'text',
                parentTab: 'General',
                upidsIo: {
                  tabName: 'Home',
                  tabRequired: true,
                  section: 'Company',
                  subSection: '',
                  fieldOrder: 1.06,
                  label: 'Company',
                  type: 'text',
                  tabIcon: 'bi bi-house'
                },
                nameUpdated: 'brandName'
              },
              {
                tabName: 'Identifier_tab',
                tooltipText: 'Created Date',
                isMultilingual: false,
                name: 'createdDate',
                readOnly: true,
                label: '_Created Date',
                placeholder: '',
                type: 'text',
                parentTab: 'General',
                upidsIo: {
                  tabName: 'Home',
                  tabRequired: true,
                  section: 'Company',
                  subSection: '',
                  fieldOrder: 1.09,
                  label: '',
                  type: 'dates',
                  tabIcon: 'bi bi-house'
                },
                nameUpdated: 'createdDate'
              },
              {
                tabName: 'Identifier_tab',
                tooltipText: 'Modified Date',
                isMultilingual: false,
                name: 'modifiedDate',
                readOnly: true,
                label: '_Modified Date',
                placeholder: '',
                type: 'text',
                parentTab: 'General',
                nameUpdated: 'modifiedDate'
              },
              {
                tabName: 'Identifier_tab',
                tooltipText: 'Profile Active',
                isMultilingual: false,
                name: 'profileActive',
                readOnly: false,
                label: 'Profile Active',
                placeholder: '',
                type: 'switch',
                parentTab: 'General',
                nameUpdated: 'profileActive'
              },
              {
                tabName: 'Identifier_tab',
                tooltipText: 'Product Name',
                isMultilingual: true,
                name: 'productName',
                readOnly: false,
                label: '_Product Name',
                placeholder: '',
                type: 'text',
                parentTab: 'General',
                upidsIo: {
                  tabName: 'Home',
                  tabRequired: true,
                  section: 'Company',
                  subSection: '',
                  fieldOrder: 1.05,
                  label: '',
                  type: 'header',
                  tabIcon: 'bi bi-house'
                },
                nameUpdated: 'productName'
              },
              {
                tabName: 'Identifier_tab',
                tooltipText: 'Regulated Product Name',
                isMultilingual: true,
                name: 'regulatedProductName',
                readOnly: false,
                label: '_Regulated Product Name',
                placeholder: '',
                type: 'text',
                parentTab: 'General',
                nameUpdated: 'regulatedProductName'
              },
              {
                aiEnable: true,
                tabName: 'Identifier_tab',
                tooltipText: 'Description Short',
                isMultilingual: true,
                name: 'descriptionShort',
                readOnly: false,
                label: '_Description Short',
                placeholder: '',
                type: 'text',
                parentTab: 'General',
                upidsIo: {
                  tabName: 'Home',
                  tabRequired: true,
                  section: 'Company',
                  subSection: '',
                  fieldOrder: 1.07,
                  label: 'Description Short',
                  type: 'text',
                  tabIcon: 'bi bi-house'
                },
                nameUpdated: 'descriptionShort'
              },
              {
                aiEnable: true,
                tabName: 'Identifier_tab',
                tooltipText: 'Description',
                isMultilingual: true,
                name: 'description',
                readOnly: false,
                label: '_Description',
                placeholder: '',
                type: 'textarea',
                parentTab: 'General',
                upidsIo: {
                  tabName: 'Home',
                  tabRequired: true,
                  section: 'Company',
                  subSection: '',
                  fieldOrder: 1.08,
                  label: 'Description',
                  type: 'text',
                  tabIcon: 'bi bi-house'
                },
                nameUpdated: 'description'
              },
              {
                aiEnable: false,
                tabName: 'Identifier_tab',
                tooltipText: 'External sources',
                isMultilingual: false,
                name: 'externalSources',
                readOnly: false,
                label: 'External sources',
                placeholder: '',
                type: 'externalSources',
                parentTab: 'General',
                upidsIo: {
                  tabName: 'Home',
                  tabRequired: true,
                  section: 'certificationsLogo',
                  subSection: '',
                  fieldOrder: 1.032,
                  label: '',
                  type: 'externalSources',
                  tabIcon: 'bi bi-house'
                },
                nameUpdated: 'externalSources'
              }
            ]
          },
          {
            tabName: 'Manufacturer_tab',
            fieldList: [
              {
                tabName: 'Manufacturer_tab',
                componentSchema: [
                  {
                    tabName: 'Manufacturer_tab',
                    tooltipText: 'Manufacturer Name',
                    isMultilingual: false,
                    name: 'name',
                    readOnly: false,
                    label: '_Manufacturer Name',
                    placeholder: '',
                    type: 'text',
                    parentTab: 'General'
                  },
                  {
                    tabName: 'Manufacturer_tab',
                    tooltipText: 'Business Id',
                    isMultilingual: false,
                    name: 'businessId',
                    readOnly: false,
                    label: '_Business Id',
                    placeholder: '',
                    type: 'text',
                    parentTab: 'General'
                  },
                  {
                    tabName: 'Manufacturer_tab',
                    tooltipText: 'Contact',
                    isMultilingual: false,
                    name: 'contact',
                    readOnly: false,
                    label: '_Contact',
                    placeholder: '',
                    type: 'text',
                    parentTab: 'General'
                  },
                  {
                    tabName: 'Manufacturer_tab',
                    tooltipText: 'Address',
                    isMultilingual: false,
                    name: 'address',
                    readOnly: false,
                    label: '_Address',
                    placeholder: '',
                    type: 'text',
                    parentTab: 'General'
                  }
                ],
                manufacturesSchema: [
                  {
                    tabName: 'Manufacturer_tab',
                    tooltipText: 'Company Name',
                    isMultilingual: false,
                    name: 'name',
                    readOnly: false,
                    label: '_Company Name',
                    placeholder: '',
                    type: 'text',
                    parentTab: 'General'
                  },
                  {
                    tabName: 'Manufacturer_tab',
                    tooltipText: 'Company Id',
                    isMultilingual: false,
                    name: 'id',
                    readOnly: false,
                    label: '_Company Id',
                    placeholder: '',
                    type: 'text',
                    parentTab: 'General'
                  }
                ],
                readOnly: false,
                type: 'manufacturerDetails',
                parentTab: 'General',
                nameUpdated: 'undefined'
              },
              {
                tabName: 'Manufacturer_tab',
                tooltipText: 'Additional Business Identifiers',
                isMultilingual: false,
                name: 'businessIdentifiers',
                readOnly: true,
                label: '_Additional Business Identifiers',
                placeholder: '',
                type: 'showAdditionalBusinessIdentifiers',
                parentTab: 'General',
                nameUpdated: 'businessIdentifiers'
              },
              {
                tabName: 'Manufacturer_tab',
                tooltipText: 'Feedback Recipient Emails',
                isMultilingual: false,
                name: 'private.feedback.emails',
                readOnly: false,
                label: '_Feedback Recipient Emails',
                placeholder: '',
                type: 'emailMultiAdd',
                parentTab: 'General',
                nameUpdated: 'private.feedback.emails'
              },
              {
                tabName: 'Manufacturer_tab',
                name: 'ecommerce',
                type: 'ecommerce',
                parentTab: 'General',
                nameUpdated: 'ecommerce'
              }
            ]
          },
          {
            tabName: 'Category_tab',
            fieldList: [
              {
                tabName: 'Category_tab',
                tooltipText: '_Restrictions',
                isMultilingual: false,
                name: 'restrictions',
                readOnly: false,
                label: '_Restrictions',
                placeholder: '',
                type: 'restrictions',
                parentTab: 'General',
                nameUpdated: 'restrictions'
              },
              {
                tabName: 'Category_tab',
                tooltipText: '_Doormat Modal',
                isMultilingual: false,
                name: 'doormatModal',
                readOnly: false,
                label: '_Doormat Modal',
                placeholder: '',
                type: 'doormat_modal',
                parentTab: 'General',
                nameUpdated: 'doormatModal'
              },
              {
                tabName: 'Category_tab',
                tooltipText: 'Select Segment',
                isMultilingual: true,
                name: 'segmentCode.id',
                readOnly: false,
                label: '_Segment',
                placeholder: '',
                type: 'select',
                parentTab: 'General',
                nameUpdated: 'category.segmentCode.id',
                updateData: {}
              },
              {
                tabName: 'Category_tab',
                tooltipText: '_Family',
                isMultilingual: true,
                name: 'familyCode.id',
                dependsOnName: 'segmentCode.id',
                readOnly: false,
                label: '_Family',
                placeholder: '',
                type: 'select',
                parentTab: 'General',
                nameUpdated: 'category.familyCode.id',
                updateData: {},
                dependsOnNameUpdated: 'category.segmentCode.id'
              },
              {
                tabName: 'Category_tab',
                tooltipText: '_Class',
                isMultilingual: true,
                name: 'classCode.id',
                dependsOnName: 'familyCode.id',
                readOnly: false,
                label: '_Class',
                placeholder: '',
                type: 'select',
                parentTab: 'General',
                nameUpdated: 'category.classCode.id',
                updateData: {},
                dependsOnNameUpdated: 'category.familyCode.id'
              },
              {
                tabName: 'Category_tab',
                tooltipText: '_Category',
                isMultilingual: true,
                name: 'categoryCode.id',
                dependsOnName: 'classCode.id',
                readOnly: false,
                label: '_Category',
                placeholder: '',
                type: 'select',
                parentTab: 'General',
                nameUpdated: 'category.categoryCode.id',
                updateData: {},
                dependsOnNameUpdated: 'category.classCode.id'
              }
            ]
          }
        ]
      },
      {
        tabName: 'Contents',
        childTabList: [
          {
            tabName: 'Ingredients_tab',
            fieldList: [
              {
                tabName: 'Ingredients_tab',
                tooltipText: 'Ingredients',
                isMultilingual: true,
                name: 'ingredients',
                readOnly: false,
                label: '_Ingredients',
                placeholder: '',
                type: 'textarea',
                parentTab: 'Contents',
                upidsIo: {
                  tabName: 'Ingredients',
                  sectionTitle: true,
                  section: 'Product Ingredients',
                  subSection: '',
                  fieldOrder: 2.99,
                  label: '',
                  type: 'ingredients',
                  tabIcon: 'bi bi-info-circle'
                },
                nameUpdated: 'ingredients'
              }
            ]
          },
          {
            tabName: 'Allergens_tab',
            fieldList: [
              {
                tabName: 'Allergens_tab',
                modalTitle: 'Select Allergens Here',
                tooltipText: 'Allergens Contains',
                isMultilingual: true,
                validationType: 'array',
                name: 'list.contains',
                readOnly: false,
                label: '_Allergens Contains',
                placeholder: '',
                type: 'multiSelectWithModal',
                parentTab: 'Contents',
                upidsIo: {
                  tabName: 'Allergens',
                  subSectionTitle: true,
                  sectionTitle: true,
                  tabRequired: true,
                  fallbackLanguage: 'en',
                  section: 'Allergens & Additives',
                  subSection: 'Allergens',
                  fieldOrder: 3.01,
                  label: 'Contains',
                  type: 'allergens',
                  tabIcon: 'bi bi-exclamation-square'
                },
                nameUpdated: 'allergens.list.contains',
                updateData: {}
              },
              {
                tabName: 'Allergens_tab',
                modalTitle: 'Select Allergens Here',
                tooltipText: 'Allergens Free From',
                isMultilingual: true,
                validationType: 'array',
                name: 'list.free_from',
                readOnly: false,
                label: '_Allergens Free From',
                placeholder: '',
                type: 'multiSelectWithModal',
                parentTab: 'Contents',
                upidsIo: {
                  tabName: 'Allergens',
                  subSectionTitle: true,
                  sectionTitle: true,
                  tabRequired: true,
                  fallbackLanguage: 'en',
                  section: 'Allergens & Additives',
                  subSection: 'Allergens',
                  fieldOrder: 3.03,
                  label: 'Free From',
                  type: 'allergens',
                  tabIcon: 'bi bi-exclamation-square'
                },
                nameUpdated: 'allergens.list.free_from'
              },
              {
                tabName: 'Allergens_tab',
                modalTitle: 'Select Allergens Here',
                tooltipText: 'Allergens May Contains',
                isMultilingual: true,
                validationType: 'array',
                name: 'list.may_contain',
                readOnly: false,
                label: '_Allergens May Contains',
                placeholder: '',
                type: 'multiSelectWithModal',
                parentTab: 'Contents',
                upidsIo: {
                  tabName: 'Allergens',
                  subSectionTitle: true,
                  sectionTitle: true,
                  tabRequired: true,
                  fallbackLanguage: 'en',
                  section: 'Allergens & Additives',
                  subSection: 'Allergens',
                  fieldOrder: 3.02,
                  label: 'May Contains',
                  type: 'allergens',
                  tabIcon: 'bi bi-exclamation-square'
                },
                nameUpdated: 'allergens.list.may_contain'
              }
            ]
          },
          {
            tabName: 'Additives_tab',
            fieldList: [
              {
                tabName: 'Additives_tab',
                tooltipText: 'Additives Contains',
                isMultilingual: false,
                validationType: 'array',
                name: 'contains',
                readOnly: false,
                label: '_Additives Contains',
                placeholder: '',
                type: 'textMultiAdd',
                parentTab: 'Contents',
                upidsIo: {
                  tabName: 'Allergens',
                  subSectionTitle: true,
                  sectionTitle: true,
                  tabRequired: true,
                  section: 'Allergens & Additives',
                  subSection: 'Additives',
                  fieldOrder: 3.04,
                  label: 'Contains',
                  type: 'additive',
                  tabIcon: 'bi bi-exclamation-square'
                },
                nameUpdated: 'additives.contains'
              },
              {
                tabName: 'Additives_tab',
                tooltipText: 'Additives Free From',
                isMultilingual: false,
                validationType: 'array',
                name: 'free_from',
                readOnly: false,
                label: '_Additives Free From',
                placeholder: '',
                type: 'textMultiAdd',
                parentTab: 'Contents',
                upidsIo: {
                  tabName: 'Allergens',
                  subSectionTitle: true,
                  sectionTitle: true,
                  tabRequired: true,
                  section: 'Allergens & Additives',
                  subSection: 'Additives',
                  fieldOrder: 3.06,
                  label: 'Free From',
                  type: 'additive',
                  tabIcon: 'bi bi-exclamation-square'
                },
                nameUpdated: 'additives.free_from'
              },
              {
                tabName: 'Additives_tab',
                tooltipText: 'Additives May Contains',
                isMultilingual: false,
                validationType: 'array',
                name: 'may_contain',
                readOnly: false,
                label: '_Additives May Contains',
                placeholder: '',
                type: 'textMultiAdd',
                parentTab: 'Contents',
                upidsIo: {
                  tabName: 'Allergens',
                  subSectionTitle: true,
                  sectionTitle: true,
                  tabRequired: true,
                  section: 'Allergens & Additives',
                  subSection: 'Additives',
                  fieldOrder: 3.05,
                  label: 'May Contains',
                  type: 'additive',
                  tabIcon: 'bi bi-exclamation-square'
                },
                nameUpdated: 'additives.may_contain'
              }
            ]
          }
        ]
      },
      {
        tabName: 'Media_tab',
        fieldList: [
          {
            tabName: 'Media_tab',
            tooltipText: '',
            sectionTooltipText: 'Product Profile Images',
            bottomLabel: 'primary Image',
            name: 'primary[0]',
            section: 'Product profile Images',
            readOnly: false,
            placeholder: '',
            type: 'mediaImage',
            upidsIo: {
              sectionRequired: true,
              tabName: 'Home',
              tabRequired: true,
              section: 'multimedia',
              subSection: '',
              fieldOrder: 1.02,
              label: '',
              type: 'mediaImage',
              tabIcon: 'bi bi-three-dots',
              swiperSlide: true
            },
            nameUpdated: 'multimedia.primary[0]'
          },
          {
            tabName: 'Media_tab',
            tooltipText: '',
            bottomLabel: 'frontal Image',
            name: 'frontal[0]',
            section: 'Product profile Images',
            readOnly: false,
            placeholder: '',
            type: 'mediaImage',
            upidsIo: {
              sectionRequired: true,
              tabName: 'Home',
              sectionTitle: true,
              tabRequired: true,
              section: 'multimedia',
              subSection: '',
              fieldOrder: 1.99,
              label: '',
              type: 'mediaImage',
              tabIcon: 'bi bi-three-dots',
              swiperSlide: true
            },
            nameUpdated: 'multimedia.frontal[0]'
          },
          {
            tabName: 'Media_tab',
            tooltipText: '',
            bottomLabel: 'backside Image',
            name: 'backside[0]',
            section: 'Product profile Images',
            readOnly: false,
            placeholder: '',
            type: 'mediaImage',
            upidsIo: {
              sectionRequired: true,
              tabName: 'Home',
              sectionTitle: true,
              tabRequired: true,
              section: 'multimedia',
              subSection: '',
              fieldOrder: 1.99,
              label: '',
              type: 'mediaImage',
              tabIcon: 'bi bi-three-dots',
              swiperSlide: true
            },
            nameUpdated: 'multimedia.backside[0]'
          },
          {
            tabName: 'Media_tab',
            tooltipText: '',
            bottomLabel: 'square Image',
            name: 'square[0]',
            section: 'Product profile Images',
            readOnly: false,
            placeholder: '',
            type: 'mediaImage',
            nameUpdated: 'multimedia.square[0]'
          },
          {
            tabName: 'Media_tab',
            tooltipText: '',
            bottomLabel: 'logo Image',
            name: 'logo[0]',
            section: 'Product profile Images',
            readOnly: false,
            placeholder: '',
            type: 'mediaImage',
            nameUpdated: 'multimedia.logo[0]'
          },
          {
            tabName: 'Media_tab',
            tooltipText: '',
            sectionTooltipText: 'Other Images',
            name: 'other',
            section: 'Other Images',
            readOnly: false,
            label: '',
            placeholder: '',
            type: 'mediaImageOther',
            upidsIo: {
              sectionRequired: true,
              tabName: 'Home',
              sectionTitle: true,
              tabRequired: true,
              section: 'multimedia',
              subSection: '',
              fieldOrder: 1.99,
              label: '',
              type: 'mediaImageOther',
              tabIcon: 'bi bi-three-dots',
              swiperSlide: true
            },
            nameUpdated: 'multimedia.other'
          },
          {
            tabName: 'Media_tab',
            sectionTooltipText: '3d Models',
            tooltipText: '',
            name: 'other',
            section: '3D Models',
            readOnly: false,
            label: '',
            placeholder: '',
            type: 'media3dmodel',
            upidsIo: {
              sectionRequired: true,
              tabName: 'Home',
              sectionTitle: true,
              tabRequired: true,
              section: 'multimedia',
              subSection: '',
              fieldOrder: 1.99,
              label: '',
              type: 'media3dmodel',
              tabIcon: 'bi bi-three-dots',
              swiperSlide: true
            },
            nameUpdated: 'multimedia.other'
          },
          {
            tabName: 'Media_tab',
            sectionTooltipText: 'Videos',
            tooltipText: '',
            name: 'other',
            section: 'Video',
            readOnly: false,
            label: '',
            placeholder: '',
            type: 'video',
            upidsIo: {
              sectionRequired: true,
              tabName: 'Home',
              sectionTitle: true,
              tabRequired: true,
              section: 'multimedia',
              subSection: '',
              fieldOrder: 1.99,
              label: '',
              type: 'video',
              tabIcon: 'bi bi-three-dots',
              swiperSlide: true
            },
            nameUpdated: 'multimedia.other'
          },
          {
            tabName: 'Media_tab',
            tooltipText: '',
            name: 'pdf',
            section: 'PDF file',
            readOnly: false,
            label: '',
            placeholder: '',
            type: 'pdf',
            upidsIo: {
              tabName: 'General',
              sectionTitle: true,
              section: 'More Information',
              subSection: '',
              fieldOrder: 6.1,
              label: 'Other Files',
              type: 'pdfDownloader',
              tabIcon: 'bi bi-three-dots'
            },
            nameUpdated: 'multimedia.pdf'
          },
          {
            tabName: 'Media_tab',
            sectionTooltipText: 'Other Files',
            tooltipText: '',
            name: 'other',
            section: 'Other file',
            readOnly: false,
            label: '',
            placeholder: '',
            type: 'mediaOtherFile',
            nameUpdated: 'multimedia.other'
          },
          {
            tabName: 'Media_tab',
            sectionTooltipText: 'Video Urls',
            tooltipText: '',
            name: 'videos',
            section: 'Video URL',
            readOnly: false,
            label: '',
            placeholder: '',
            type: 'videoUrl',
            upidsIo: {
              sectionRequired: true,
              tabName: 'Home',
              sectionTitle: true,
              tabRequired: true,
              section: 'multimedia',
              subSection: '',
              fieldOrder: 1.99,
              label: '',
              type: 'videoUrl',
              tabIcon: 'bi bi-three-dots',
              swiperSlide: true
            },
            nameUpdated: 'videos'
          }
        ]
      },
      {
        tabName: 'Marketing_tab',
        fieldList: [
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Website Url',
            isMultilingual: false,
            validationType: 'string',
            name: 'websiteUrl',
            readOnly: false,
            label: '_Website Url',
            placeholder: '',
            validations: [
              {
                type: 'url',
                params: [
                  'Should be valid url'
                ]
              }
            ],
            type: 'text',
            upidsIo: {
              tabName: 'General',
              sectionTitle: true,
              section: 'More Information',
              subSection: '',
              fieldOrder: 6.06,
              label: 'Visite Website',
              type: 'links',
              tabIcon: 'bi bi-three-dots'
            },
            nameUpdated: 'marketing.websiteUrl'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Overlay Url',
            isMultilingual: false,
            validationType: 'string',
            name: 'overlayUrl',
            readOnly: false,
            label: '_Overlay Url',
            placeholder: '',
            type: 'text',
            nameUpdated: 'marketing.overlayUrl'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Public Email',
            isMultilingual: false,
            name: 'publicEmail',
            readOnly: false,
            label: '_Public Email',
            placeholder: '',
            type: 'text',
            upidsIo: {
              tabName: 'General',
              sectionTitle: true,
              section: 'More Information',
              subSection: '',
              fieldOrder: 6.02,
              label: 'Email',
              type: 'text',
              tabIcon: 'bi bi-three-dots'
            },
            nameUpdated: 'marketing.publicEmail'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Public Telephone',
            isMultilingual: false,
            name: 'publicTelephone',
            readOnly: false,
            label: '_Public Telephone',
            placeholder: '',
            type: 'text',
            upidsIo: {
              tabName: 'General',
              sectionTitle: true,
              section: 'More Information',
              subSection: '',
              fieldOrder: 6.03,
              label: 'Telephone',
              type: 'text',
              tabIcon: 'bi bi-three-dots'
            },
            nameUpdated: 'marketing.publicTelephone'
          },
          {
            subsection: 'Postal Address',
            tabName: 'Marketing_tab',
            subSectionTooltipText: 'Postal Address',
            isMultilingual: false,
            name: 'postalAddress[0]',
            readOnly: false,
            placeholder: 'Line 1',
            type: 'text',
            upidsIo: {
              tabName: 'General',
              sectionTitle: true,
              section: 'More Information',
              subSection: '',
              fieldOrder: 6.09,
              label: 'Postal address',
              type: 'postalAddress',
              tabIcon: 'bi bi-three-dots'
            },
            nameUpdated: 'marketing.postalAddress[0]'
          },
          {
            subsection: 'Postal Address',
            tabName: 'Marketing_tab',
            isMultilingual: false,
            name: 'postalAddress[1]',
            readOnly: false,
            placeholder: 'Line 2',
            type: 'text',
            nameUpdated: 'marketing.postalAddress[1]'
          },
          {
            subsection: 'Postal Address',
            tabName: 'Marketing_tab',
            isMultilingual: false,
            name: 'postalAddress[2]',
            readOnly: false,
            placeholder: 'Line 3',
            type: 'text',
            nameUpdated: 'marketing.postalAddress[2]'
          },
          {
            subsection: 'Postal Address',
            tabName: 'Marketing_tab',
            isMultilingual: false,
            name: 'postalAddress[3]',
            readOnly: false,
            placeholder: 'Line 4',
            type: 'text',
            nameUpdated: 'marketing.postalAddress[3]'
          },
          {
            aiEnable: true,
            tabName: 'Marketing_tab',
            tooltipText: 'Marketing Text',
            isMultilingual: true,
            name: 'marketingTexts',
            readOnly: false,
            label: '_Marketing Texts',
            placeholder: '',
            type: 'textarea',
            upidsIo: {
              tabName: 'General',
              sectionTitle: true,
              section: 'More Information',
              subSection: '',
              fieldOrder: 6.01,
              label: '',
              type: 'text',
              tabIcon: 'bi bi-three-dots'
            },
            nameUpdated: 'marketing.marketingTexts'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Top Banner',
            isMultilingual: true,
            name: 'banner1',
            readOnly: false,
            label: '_Top Banner',
            placeholder: '',
            type: 'text',
            upidsIo: {
              tabName: 'Home',
              sectionTitle: true,
              tabRequired: true,
              section: '',
              subSection: '',
              fieldOrder: 1.01,
              label: '',
              type: 'banner',
              tabIcon: 'bi bi-house'
            },
            nameUpdated: 'marketing.banner1'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Lower Banner',
            isMultilingual: true,
            name: 'banner2',
            readOnly: false,
            label: '_Lower Banner',
            placeholder: '',
            type: 'text',
            upidsIo: {
              tabName: 'Home',
              sectionTitle: true,
              tabRequired: true,
              section: '',
              subSection: '',
              fieldOrder: 1.04,
              label: '',
              type: 'banner',
              tabIcon: 'bi bi-house'
            },
            nameUpdated: 'marketing.banner2'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Usage Instructions',
            isMultilingual: true,
            name: 'usageInstructions',
            readOnly: false,
            label: '_Usage Instructions',
            placeholder: '',
            type: 'textarea',
            upidsIo: {
              tabName: 'General',
              sectionTitle: true,
              section: 'More Information',
              subSection: '',
              fieldOrder: 6.05,
              label: 'Usage instructions',
              type: 'text',
              tabIcon: 'bi bi-three-dots'
            },
            nameUpdated: 'marketing.usageInstructions'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Buy Now Urls',
            isMultilingual: false,
            name: 'buyNowUrls',
            readOnly: false,
            label: '_Buy Now Urls',
            placeholder: '',
            type: 'urlMultiAdd',
            upidsIo: {
              tabName: 'General',
              sectionTitle: true,
              section: 'More Information',
              subSection: '',
              fieldOrder: 6.06,
              label: 'Buy now',
              type: 'externalLinks',
              tabIcon: 'bi bi-three-dots'
            },
            nameUpdated: 'marketing.buyNowUrls'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Social Media Urls',
            isMultilingual: false,
            name: 'socialMediaUrls',
            readOnly: false,
            label: '_Social Media Urls',
            placeholder: '',
            type: 'urlMultiAdd',
            upidsIo: {
              tabName: 'General',
              sectionTitle: true,
              section: 'More Information',
              subSection: '',
              fieldOrder: 6.07,
              label: 'Social media',
              type: 'externalLinks',
              tabIcon: 'bi bi-three-dots'
            },
            nameUpdated: 'marketing.socialMediaUrls'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'External Links',
            isMultilingual: false,
            name: 'externalLinks',
            readOnly: false,
            label: '_External Links',
            type: 'urlMultiAdd',
            upidsIo: {
              tabName: 'General',
              sectionTitle: true,
              section: 'More Information',
              subSection: '',
              fieldOrder: 6.08,
              label: 'External Links',
              type: 'externalLinks',
              tabIcon: 'bi bi-three-dots'
            },
            nameUpdated: 'marketing.externalLinks'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Certifications',
            name: 'certifications',
            readOnly: false,
            label: '_Certifications',
            type: 'null',
            upidsIo: {
              tabName: 'Home',
              tabRequired: true,
              section: 'certificationsLogo',
              subSection: '',
              fieldOrder: 1.031,
              label: '',
              type: 'certificationsLogo',
              tabIcon: 'bi bi-house'
            },
            nameUpdated: 'certifications'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Certifications',
            isMultilingual: false,
            name: 'certifications',
            readOnly: false,
            label: '_Certifications',
            type: 'certificationMultiSelectWithModal',
            upidsIo: {
              tabName: 'Home',
              sectionTitle: true,
              tabRequired: true,
              section: 'Certifications',
              subSection: '',
              fieldOrder: 1.2,
              label: '',
              type: 'certifications',
              tabIcon: 'bi bi-house'
            },
            nameUpdated: 'certifications'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Carbon footprint total',
            sectionTooltipText: 'Carbon Footprint Data',
            isMultilingual: false,
            name: 'total',
            section: 'Carbon footprint',
            readOnly: false,
            label: '_Carbon footprint total',
            placeholder: '',
            type: 'text',
            upidsIo: {
              tabName: 'Home',
              sectionTitle: true,
              tabRequired: true,
              section: 'Carbon Footprint Data',
              subSection: '',
              fieldOrder: 1.11,
              label: 'Total',
              type: 'text',
              tabIcon: 'bi bi-house'
            },
            validation: '',
            nameUpdated: 'carbonFootprint.total'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Carbon footprint date of calculation',
            isMultilingual: false,
            name: 'dateOfCalculation',
            section: 'Carbon footprint',
            readOnly: false,
            label: '_Carbon footprint date of calculation',
            placeholder: '',
            type: 'text',
            upidsIo: {
              tabName: 'Home',
              sectionTitle: true,
              tabRequired: true,
              section: 'Carbon Footprint Data',
              subSection: '',
              fieldOrder: 1.12,
              label: 'Date Of Calculation',
              type: 'text',
              tabIcon: 'bi bi-house'
            },
            validation: '',
            nameUpdated: 'carbonFootprint.dateOfCalculation'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Carbon footprint source',
            isMultilingual: false,
            name: 'source',
            section: 'Carbon footprint',
            readOnly: false,
            label: '_Carbon footprint source',
            placeholder: '',
            type: 'text',
            upidsIo: {
              tabName: 'Home',
              sectionTitle: true,
              tabRequired: true,
              section: 'Carbon Footprint Data',
              subSection: '',
              fieldOrder: 1.13,
              label: 'Source',
              type: 'text',
              tabIcon: 'bi bi-house'
            },
            validation: '',
            nameUpdated: 'carbonFootprint.source'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Carbon footprint external reference',
            isMultilingual: false,
            name: 'externalReference',
            section: 'Carbon footprint',
            readOnly: false,
            label: '_Carbon footprint external reference',
            placeholder: '',
            type: 'text',
            upidsIo: {
              tabName: 'Home',
              sectionTitle: true,
              tabRequired: true,
              section: 'Carbon Footprint Data',
              subSection: '',
              fieldOrder: 1.14,
              label: 'External Reference',
              type: 'text',
              tabIcon: 'bi bi-house'
            },
            validation: '',
            nameUpdated: 'carbonFootprint.externalReference'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Background Color',
            sectionTooltipText: 'Custom Header',
            isMultilingual: false,
            name: 'bgColor',
            section: 'Custom header',
            readOnly: false,
            label: '_Background Color',
            placeholder: '',
            type: 'color',
            nameUpdated: 'marketing.custom.bgColor'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Header Text',
            isMultilingual: false,
            name: 'headerText',
            section: 'Custom header',
            readOnly: false,
            label: '_Header Text',
            placeholder: '',
            type: 'text',
            nameUpdated: 'marketing.custom.headerText'
          },
          {
            tabName: 'Marketing_tab',
            tooltipText: 'Marketing email subscriptions',
            isMultilingual: false,
            name: 'emailConsent',
            readOnly: false,
            label: '_Email consent',
            placeholder: '',
            type: 'emailConsent',
            nameUpdated: 'emailConsent'
          }
        ]
      },
      {
        tabName: 'Sales_tab',
        fieldList: [
          {
            tabName: 'Sales_tab',
            tooltipText: 'Status',
            validationType: 'string',
            showTooltip: true,
            readOnly: false,
            label: '_Status',
            type: 'select',
            upidsIo: {
              tabName: 'Home',
              section: 'Company',
              subSection: '',
              fieldOrder: 5.99,
              label: '',
              type: 'directCommerce',
              tabIcon: 'bi bi-house'
            },
            isMultilingual: false,
            name: 'status',
            options: [
              {
                label: 'Sell',
                value: 'sell'
              },
              {
                label: 'Presale',
                value: 'presale'
              },
              {
                label: 'Nostock',
                value: 'nostock'
              },
              {
                label: 'Eol',
                value: 'eol'
              },
              {
                label: 'Na',
                value: 'na'
              },
              {
                label: 'Disabled',
                value: 'disabled'
              }
            ],
            validations: [],
            placeholder: '',
            nameUpdated: 'directCommerce.status'
          },
          {
            tabName: 'Sales_tab',
            tooltipText: 'Price',
            isMultilingual: false,
            validationType: 'string',
            name: 'price',
            showTooltip: true,
            readOnly: false,
            validations: [],
            label: '_Price',
            placeholder: '',
            type: 'number',
            nameUpdated: 'directCommerce.price'
          },
          {
            tabName: 'Sales_tab',
            tooltipText: 'Tax',
            isMultilingual: false,
            validationType: 'string',
            name: 'tax',
            showTooltip: true,
            readOnly: false,
            validations: [],
            label: '_Tax',
            placeholder: '',
            type: 'text',
            nameUpdated: 'directCommerce.tax'
          },
          {
            tabName: 'Sales_tab',
            tooltipText: 'Shipping',
            isMultilingual: false,
            validationType: 'string',
            name: 'shipping',
            showTooltip: true,
            readOnly: false,
            validations: [],
            label: '_Shipping',
            placeholder: '',
            type: 'text',
            nameUpdated: 'directCommerce.shipping'
          },
          {
            tabName: 'Sales_tab',
            tooltipText: 'Delivery Type',
            isMultilingual: false,
            validationType: 'string',
            name: 'deliveryType',
            showTooltip: true,
            options: [
              {
                label: 'Postal',
                value: 'postal'
              },
              {
                label: 'Digital',
                value: 'digital'
              },
              {
                label: 'Direct',
                value: 'direct'
              }
            ],
            readOnly: false,
            validations: [],
            label: '_Delivery Type',
            placeholder: '',
            type: 'select',
            nameUpdated: 'directCommerce.deliveryType'
          },
          {
            tabName: 'Sales_tab',
            tooltipText: 'Currency Type',
            isMultilingual: false,
            validationType: 'string',
            name: 'currencyType',
            showTooltip: true,
            options: [
              {
                label: 'EUR',
                value: 'EUR'
              },
              {
                label: 'AED',
                value: 'AED'
              },
              {
                label: 'AFN',
                value: 'AFN'
              },
              {
                label: 'XCD',
                value: 'XCD'
              },
              {
                label: 'ALL',
                value: 'ALL'
              },
              {
                label: 'AMD',
                value: 'AMD'
              },
              {
                label: 'AOA',
                value: 'AOA'
              },
              {
                label: 'ARS',
                value: 'ARS'
              },
              {
                label: 'USD',
                value: 'USD'
              },
              {
                label: 'AUD',
                value: 'AUD'
              },
              {
                label: 'AWG',
                value: 'AWG'
              },
              {
                label: 'AZN',
                value: 'AZN'
              },
              {
                label: 'BAM',
                value: 'BAM'
              },
              {
                label: 'BBD',
                value: 'BBD'
              },
              {
                label: 'BDT',
                value: 'BDT'
              },
              {
                label: 'XOF',
                value: 'XOF'
              },
              {
                label: 'BGN',
                value: 'BGN'
              },
              {
                label: 'BHD',
                value: 'BHD'
              },
              {
                label: 'BIF',
                value: 'BIF'
              },
              {
                label: 'BMD',
                value: 'BMD'
              },
              {
                label: 'BND',
                value: 'BND'
              },
              {
                label: 'BOB',
                value: 'BOB'
              },
              {
                label: 'BRL',
                value: 'BRL'
              },
              {
                label: 'BSD',
                value: 'BSD'
              },
              {
                label: 'BTN',
                value: 'BTN'
              },
              {
                label: 'NOK',
                value: 'NOK'
              },
              {
                label: 'BWP',
                value: 'BWP'
              },
              {
                label: 'BYN',
                value: 'BYN'
              },
              {
                label: 'BZD',
                value: 'BZD'
              },
              {
                label: 'CAD',
                value: 'CAD'
              },
              {
                label: 'CDF',
                value: 'CDF'
              },
              {
                label: 'XAF',
                value: 'XAF'
              },
              {
                label: 'CHF',
                value: 'CHF'
              },
              {
                label: 'NZD',
                value: 'NZD'
              },
              {
                label: 'CLP',
                value: 'CLP'
              },
              {
                label: 'CNY',
                value: 'CNY'
              },
              {
                label: 'COP',
                value: 'COP'
              },
              {
                label: 'CRC',
                value: 'CRC'
              },
              {
                label: 'CUP',
                value: 'CUP'
              },
              {
                label: 'CVE',
                value: 'CVE'
              },
              {
                label: 'ANG',
                value: 'ANG'
              },
              {
                label: 'CZK',
                value: 'CZK'
              },
              {
                label: 'DJF',
                value: 'DJF'
              },
              {
                label: 'DKK',
                value: 'DKK'
              },
              {
                label: 'DOP',
                value: 'DOP'
              },
              {
                label: 'DZD',
                value: 'DZD'
              },
              {
                label: 'EGP',
                value: 'EGP'
              },
              {
                label: 'MAD',
                value: 'MAD'
              },
              {
                label: 'ERN',
                value: 'ERN'
              },
              {
                label: 'ETB',
                value: 'ETB'
              },
              {
                label: 'FJD',
                value: 'FJD'
              },
              {
                label: 'FKP',
                value: 'FKP'
              },
              {
                label: 'GBP',
                value: 'GBP'
              },
              {
                label: 'GEL',
                value: 'GEL'
              },
              {
                label: 'GHS',
                value: 'GHS'
              },
              {
                label: 'GIP',
                value: 'GIP'
              },
              {
                label: 'GMD',
                value: 'GMD'
              },
              {
                label: 'GNF',
                value: 'GNF'
              },
              {
                label: 'GTQ',
                value: 'GTQ'
              },
              {
                label: 'GYD',
                value: 'GYD'
              },
              {
                label: 'HKD',
                value: 'HKD'
              },
              {
                label: 'HNL',
                value: 'HNL'
              },
              {
                label: 'HRK',
                value: 'HRK'
              },
              {
                label: 'HTG',
                value: 'HTG'
              },
              {
                label: 'HUF',
                value: 'HUF'
              },
              {
                label: 'IDR',
                value: 'IDR'
              },
              {
                label: 'ILS',
                value: 'ILS'
              },
              {
                label: 'INR',
                value: 'INR'
              },
              {
                label: 'IQD',
                value: 'IQD'
              },
              {
                label: 'IRR',
                value: 'IRR'
              },
              {
                label: 'ISK',
                value: 'ISK'
              },
              {
                label: 'JMD',
                value: 'JMD'
              },
              {
                label: 'JOD',
                value: 'JOD'
              },
              {
                label: 'JPY',
                value: 'JPY'
              },
              {
                label: 'KES',
                value: 'KES'
              },
              {
                label: 'KGS',
                value: 'KGS'
              },
              {
                label: 'KHR',
                value: 'KHR'
              },
              {
                label: 'KMF',
                value: 'KMF'
              },
              {
                label: 'KPW',
                value: 'KPW'
              },
              {
                label: 'KRW',
                value: 'KRW'
              },
              {
                label: 'KWD',
                value: 'KWD'
              },
              {
                label: 'KYD',
                value: 'KYD'
              },
              {
                label: 'KZT',
                value: 'KZT'
              },
              {
                label: 'LAK',
                value: 'LAK'
              },
              {
                label: 'LBP',
                value: 'LBP'
              },
              {
                label: 'LKR',
                value: 'LKR'
              },
              {
                label: 'LRD',
                value: 'LRD'
              },
              {
                label: 'LSL',
                value: 'LSL'
              },
              {
                label: 'LYD',
                value: 'LYD'
              },
              {
                label: 'MDL',
                value: 'MDL'
              },
              {
                label: 'MGA',
                value: 'MGA'
              },
              {
                label: 'MKD',
                value: 'MKD'
              },
              {
                label: 'MMK',
                value: 'MMK'
              },
              {
                label: 'MNT',
                value: 'MNT'
              },
              {
                label: 'MOP',
                value: 'MOP'
              },
              {
                label: 'MRO',
                value: 'MRO'
              },
              {
                label: 'MUR',
                value: 'MUR'
              },
              {
                label: 'MVR',
                value: 'MVR'
              },
              {
                label: 'MWK',
                value: 'MWK'
              },
              {
                label: 'MXN',
                value: 'MXN'
              },
              {
                label: 'MYR',
                value: 'MYR'
              },
              {
                label: 'MZN',
                value: 'MZN'
              },
              {
                label: 'NAD',
                value: 'NAD'
              },
              {
                label: 'XPF',
                value: 'XPF'
              },
              {
                label: 'NGN',
                value: 'NGN'
              },
              {
                label: 'NIO',
                value: 'NIO'
              },
              {
                label: 'NPR',
                value: 'NPR'
              },
              {
                label: 'OMR',
                value: 'OMR'
              },
              {
                label: 'PAB',
                value: 'PAB'
              },
              {
                label: 'PEN',
                value: 'PEN'
              },
              {
                label: 'PGK',
                value: 'PGK'
              },
              {
                label: 'PHP',
                value: 'PHP'
              },
              {
                label: 'PKR',
                value: 'PKR'
              },
              {
                label: 'PLN',
                value: 'PLN'
              },
              {
                label: 'PYG',
                value: 'PYG'
              },
              {
                label: 'QAR',
                value: 'QAR'
              },
              {
                label: 'RON',
                value: 'RON'
              },
              {
                label: 'RSD',
                value: 'RSD'
              },
              {
                label: 'RUB',
                value: 'RUB'
              },
              {
                label: 'RWF',
                value: 'RWF'
              },
              {
                label: 'SAR',
                value: 'SAR'
              },
              {
                label: 'SBD',
                value: 'SBD'
              },
              {
                label: 'SCR',
                value: 'SCR'
              },
              {
                label: 'SDG',
                value: 'SDG'
              },
              {
                label: 'SEK',
                value: 'SEK'
              },
              {
                label: 'SGD',
                value: 'SGD'
              },
              {
                label: 'SHP',
                value: 'SHP'
              },
              {
                label: 'SLL',
                value: 'SLL'
              },
              {
                label: 'SOS',
                value: 'SOS'
              },
              {
                label: 'SRD',
                value: 'SRD'
              },
              {
                label: 'SSP',
                value: 'SSP'
              },
              {
                label: 'STD',
                value: 'STD'
              },
              {
                label: 'SYP',
                value: 'SYP'
              },
              {
                label: 'SZL',
                value: 'SZL'
              },
              {
                label: 'THB',
                value: 'THB'
              },
              {
                label: 'TJS',
                value: 'TJS'
              },
              {
                label: 'TMT',
                value: 'TMT'
              },
              {
                label: 'TND',
                value: 'TND'
              },
              {
                label: 'TOP',
                value: 'TOP'
              },
              {
                label: 'TRY',
                value: 'TRY'
              },
              {
                label: 'TTD',
                value: 'TTD'
              },
              {
                label: 'TWD',
                value: 'TWD'
              },
              {
                label: 'TZS',
                value: 'TZS'
              },
              {
                label: 'UAH',
                value: 'UAH'
              },
              {
                label: 'UGX',
                value: 'UGX'
              },
              {
                label: 'UYU',
                value: 'UYU'
              },
              {
                label: 'UZS',
                value: 'UZS'
              },
              {
                label: 'VEF',
                value: 'VEF'
              },
              {
                label: 'VND',
                value: 'VND'
              },
              {
                label: 'VUV',
                value: 'VUV'
              },
              {
                label: 'WST',
                value: 'WST'
              },
              {
                label: 'YER',
                value: 'YER'
              },
              {
                label: 'ZAR',
                value: 'ZAR'
              },
              {
                label: 'ZMW',
                value: 'ZMW'
              },
              {
                label: 'ZWL',
                value: 'ZWL'
              },
              {
                label: 'MRU',
                value: 'MRU'
              },
              {
                label: 'STN',
                value: 'STN'
              }
            ],
            readOnly: false,
            validations: [],
            label: '_Currency Type',
            placeholder: '',
            type: 'select',
            nameUpdated: 'directCommerce.currencyType'
          }
        ]
      },
      {
        tabName: 'Nutritional_tab',
        fieldList: [
          {
            tabName: 'Nutritional_tab',
            tooltipText: 'Claims',
            isMultilingual: true,
            name: 'claim',
            readOnly: false,
            label: '_Claims',
            placeholder: '',
            type: 'multiSelectWithModal',
            upidsIo: {
              tabName: 'Nutrition',
              section: 'nutritional',
              subSection: '',
              fieldOrder: 4.99,
              label: 'Claims',
              type: 'textMultiBadges',
              tabIcon: 'bi bi-stack'
            },
            nameUpdated: 'nutritional.claim',
            updateData: {}
          },
          {
            tabName: 'Nutritional_tab',
            tooltipText: 'Per Quantity',
            isMultilingual: false,
            name: 'perQuantity',
            readOnly: false,
            label: '_Per Quantity',
            placeholder: '',
            type: 'text',
            nameUpdated: 'nutritional.perQuantity'
          },
          {
            tabName: 'Nutritional_tab',
            tooltipText: 'Calculated for',
            isMultilingual: false,
            name: 'calculatedFor',
            options: [
              {
                label: '',
                value: ''
              },
              {
                label: 'PREPARED',
                value: 'PREPARED'
              },
              {
                label: 'UNPREPARED',
                value: 'UNPREPARED'
              }
            ],
            readOnly: false,
            label: '_Calculated for',
            placeholder: '',
            type: 'select',
            nameUpdated: 'nutritional.calculatedFor'
          },
          {
            tabName: 'Nutritional_tab',
            tooltipText: 'Details',
            isMultilingual: false,
            name: 'details',
            readOnly: false,
            label: '',
            placeholder: '',
            type: 'nutritionalDetails',
            upidsIo: {
              tabName: 'Nutrition',
              section: 'nutritional',
              subSection: '',
              fieldOrder: 4.99,
              label: 'Claims',
              type: 'nutritional',
              tabIcon: 'bi bi-stack'
            },
            nameUpdated: 'nutritional.details'
          }
        ]
      },
      {
        tabName: 'UPIDS Product_tab',
        fieldList: [
          {
            tabName: 'UPIDS Product_tab',
            tooltipText: 'manufacturerName_en help text',
            isMultilingual: false,
            name: 'UPIDS_Product',
            readOnly: false,
            label: '_UPIDS Product',
            placeholder: '',
            type: 'upidsProduct',
            nameUpdated: 'UPIDS_Product'
          }
        ]
      },
      {
        tabName: 'Feedbacks_tab',
        fieldList: [
          {
            tabName: 'Feedbacks_tab',
            tooltipText: 'manufacturerName_en help text',
            isMultilingual: false,
            name: 'feedback',
            readOnly: false,
            label: '_Feedbacks',
            placeholder: '',
            type: 'feedback',
            upidsIo: {
              tabName: 'Feedback',
              tabRequired: true,
              fieldRequired: true,
              section: '',
              subSection: '',
              fieldOrder: 5.99,
              label: '',
              type: 'feedback',
              tabIcon: 'bi bi-messenger'
            },
            nameUpdated: 'feedback'
          }
        ]
      },
      {
        tabName: 'Versioning_tab',
        fieldList: [
          {
            tabName: 'Versioning_tab',
            tooltipText: 'manufacturerName_en help text',
            isMultilingual: false,
            name: 'Versioning',
            readOnly: false,
            label: '_Versioning',
            placeholder: '',
            type: 'versioning',
            nameUpdated: 'Versioning'
          }
        ]
      }
    ]
  }