import { combineReducers } from "@reduxjs/toolkit";
import HomeSlice from "src/slice/home";
import { SchemaSlice } from "src/slice/schema";

export const rootReducer = combineReducers({
    home:HomeSlice.reducer,
    schema:SchemaSlice.reducer
})