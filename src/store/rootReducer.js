import { combineReducers } from "@reduxjs/toolkit";
import HomeSlice from "src/slice/home";
import { SchemaSlice } from "src/slice/schema";
import bookKeepingSlice from "src/slice/bookKeeping";
import authSlice from "src/slice/auth";

export const rootReducer = combineReducers({
  home: HomeSlice.reducer,
  schema: SchemaSlice.reducer,
  bookKeeping: bookKeepingSlice.reducer,
  auth: authSlice.reducer,
});
