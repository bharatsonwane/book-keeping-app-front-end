import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import { validateAllFormFieldAction } from "src/thunks/bookKeeping";

const initState = {
  loading: false,
  formDataObject: {},
  formValidation: {
    isAllTouched: false,
    touched: {},
    errorMessage: {},
    errorFieldList: [],
  },
};

export const bookKeepingSlice = createSlice({
  name: "bookKeeping",
  initialState: initState,
  reducers: {
    updateFormObject: (state, action) => {
      state.formDataObject = action.payload;
    },

    formFieldDataUpdateAction: (state, action) => {
      const { name, value } = action.payload;
      _.set(state.formDataObject, `${name}`, value);
    },

    formFieldValidationAction: (state, action) => {
      const { dataMappingName, errorMessage, touched } = action.payload;

      _.set(
        state.formValidation.touched,
        `${dataMappingName}`,
        touched ? touched : false
      );

      if (errorMessage) {
        _.set(
          state.formValidation.errorMessage,
          `${dataMappingName}`,
          errorMessage
        );
      } else {
        _.set(state.formValidation.errorMessage, `${dataMappingName}`, "");
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(validateAllFormFieldAction.fulfilled, (state, action) => {
      state.formValidation.isAllTouched = true;
      state.formValidation.errorMessage = action.payload;
    });
  },
});

export const {
  updateFormObject,
  formFieldDataUpdateAction,
  formFieldValidationAction,
} = bookKeepingSlice.actions;
export default bookKeepingSlice;
