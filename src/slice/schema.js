import { createSlice,current } from "@reduxjs/toolkit";
import { FetchData } from "../thunks/home";
import { getProductTemplateSchemaAction } from "src/thunks/schema";
import _ from "lodash";
import { getSpecificFlattenSchemaPath_ObjectForItemName } from "src/helper/helpers";

const initState = {
  loading: false,
  data: [],
  formObject: {},
  productFormValidation: {
    isAllTouched: false,
    touched: {},
    errorMessage: {},
    errorFieldList: [],
  },
  selectedProductSchema: {
    formType: '', // add/update
    productSchemaType: "",
    productSchema: [],
    productFlattenSchema: [],
    productTabStructuredSchema: [],
    selectedTabInfo: {
      tabName: "",
      fieldList: [],
      sectionLoading: [
        // { name: "primary[0]", section: "Product profile Images" },
      ],
    }
  },
};

export const SchemaSlice = createSlice({
  name: "Schema",
  initialState: initState,
  reducers: {
    updatedFlattenSchemaFormItemAction: (state, action) => {
      const { formField } = action.payload
      const currentProductFlattenSchema = current(state.selectedProductSchema.productFlattenSchema);
      const { fieldPath } = getSpecificFlattenSchemaPath_ObjectForItemName(currentProductFlattenSchema, formField.dataMappingName)
      _.set(state.selectedProductSchema.productFlattenSchema, fieldPath, formField);
    },

    selectProductTabInfoAction: (state, action) => {
      const { tabName, fieldList } = action.payload
      state.selectedProductSchema.selectedTabInfo = {
        tabName: tabName,
        fieldList: fieldList,
        sectionLoading: [],
      }
    },

    changeFormObject: (state, action) => {
      state.formObject = action.payload;
    },

    formFieldValidationAction: (state, action) => {
      const { dataMappingName, errorMessage, touched } = action.payload;

      _.set(state.productFormValidation.touched, `${dataMappingName}`, touched ? touched : false);

      if (errorMessage) {
        _.set(state.productFormValidation.errorMessage, `${dataMappingName}`, errorMessage);
      }
      else {
        _.set(state.productFormValidation.errorMessage, `${dataMappingName}`, "");
      }
    },

    /** form field */
    productFormFieldUpdateAction: (state, action) => {
      const { name, value } = action.payload
      _.set(state.formObject, `${name}`, value);
    },

  },
  extraReducers:
  (builder) => {
    builder

    .addCase(getProductTemplateSchemaAction.pending, (state) => {
        state.actionsLoading = true;
      })
      .addCase(getProductTemplateSchemaAction.fulfilled, (state, action) => {
        const { formType, productSchemaType, productSchema, productFlattenSchema, productTabStructuredSchema, } = action.payload
        state.actionsLoading = false;
        const stateProductSchema = current(state.selectedProductSchema.productSchema)

        if (!_.isEqual(stateProductSchema, productSchema)) {
          state.selectedProductSchema.formType = formType;
          state.selectedProductSchema.productSchemaType = productSchemaType;
          state.selectedProductSchema.productSchema = productSchema;
          state.selectedProductSchema.productFlattenSchema = productFlattenSchema;
          state.selectedProductSchema.productTabStructuredSchema = productTabStructuredSchema
        }
      })
      .addCase(getProductTemplateSchemaAction.rejected, (state, action) => {
        state.actionsLoading = false;
      })

   
  },
});

export const {updatedFlattenSchemaFormItemAction,selectProductTabInfoAction, changeFormObject,productFormFieldUpdateAction,formFieldValidationAction} = SchemaSlice.actions;
