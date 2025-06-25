import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";

const initState = {};

export const bookKeepingSlice = createSlice({
  name: "bookKeeping",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = bookKeepingSlice.actions;
export default bookKeepingSlice;
