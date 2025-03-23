import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import { userLoginAction } from "src/thunks/auth";

const initState = {
  loading: false,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export const { formFieldDataUpdateAction, formFieldValidationAction } =
  authSlice.actions;
export default authSlice;
