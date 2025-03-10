import { combineReducers } from "@reduxjs/toolkit";
import HomeSlice from "src/slice/home";
import { SchemaSlice } from "src/slice/schema";
import bookKeepingSlice from "src/slice/bookKeeping";

export const rootReducer = combineReducers({
  home: HomeSlice.reducer,
  schema: SchemaSlice.reducer,
  bookKeeping: bookKeepingSlice.reducer,
});
