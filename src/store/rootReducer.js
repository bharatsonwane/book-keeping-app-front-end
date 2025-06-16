import { combineReducers } from "@reduxjs/toolkit";
import HomeSlice from "src/slice/home";
import bookKeepingSlice from "src/slice/bookKeeping";
import authSlice from "src/slice/auth";
import apiSlice from "src/redux/api/index";

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  home: HomeSlice.reducer,
  bookKeeping: bookKeepingSlice.reducer,
  auth: authSlice.reducer,
});
