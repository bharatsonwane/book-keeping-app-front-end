import { combineReducers } from "@reduxjs/toolkit";
import HomeSlice from "src/slice/home";
import bookKeepingSlice from "src/slice/bookKeeping";
import authSlice from "src/slice/auth";

export const rootReducer = combineReducers({
  home: HomeSlice.reducer,
  bookKeeping: bookKeepingSlice.reducer,
  auth: authSlice.reducer,
});
