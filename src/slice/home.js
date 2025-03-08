import { createSlice } from "@reduxjs/toolkit";
import { FetchData } from "../thunks/home";

const initState = {
  loading: false,
  data: [],
};

export const HomeSlice = createSlice({
  name: "Home",
  initialState: initState,
  reducers: {},
  extraReducers: {
    [FetchData.pending]: (state, action) => {
      state.loading = true;
      console.log("loading");
    },
    [FetchData.fulfilled]: (state, action) => {
      console.log("action", action);
      state = { ...state, loading: false, data: action.payload };
    },
    [FetchData.rejected]: (state, action) => {
      console.log("action Error", action);
    },
  },
});

export default HomeSlice;
