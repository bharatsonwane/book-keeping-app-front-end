import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";

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
    formFieldDataUpdateAction: (state, action) => {
      const { name, value } = action.payload;
      _.set(state.formDataObject, `${name}`, value);
    },

    formFieldValidationAction: (state, action) => {
      debugger;
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
  extraReducers: {},
});

export const { formFieldDataUpdateAction, formFieldValidationAction } = bookKeepingSlice.actions;
export default bookKeepingSlice;
