import { combineReducers } from "@reduxjs/toolkit";
import HomeSlice from "src/redux/slice/home";
import bookKeepingSlice from "src/redux/slice/bookKeeping";
import authSlice from "src/redux/slice/auth";
import apiSlice from "src/redux/api/index";
import entitySlice from "src/redux/slice/entities";

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  home: HomeSlice.reducer,
  bookKeeping: bookKeepingSlice.reducer,
  entities: entitySlice,
  auth: authSlice.reducer,
});
