import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import { userLoginAction } from "src/redux/thunks/auth";

const initState = {
  loading: false,
  userData: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logOutUser: (state) => {
      state.isLoggedIn = false;
      state.userData = false;
      localStorage.removeItem("token");
      localStorage.removeItem("x-tenant-schema");
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(userLoginAction.fulfilled, (state, action) => {
  //     state.userData = action.payload;
  //   });
  // },
});

export const { logOutUser, loginUser } = authSlice.actions;
export default authSlice;
