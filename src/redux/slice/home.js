import { createSlice } from "@reduxjs/toolkit";
import { FetchData } from "../../redux/thunks/home";

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
    },
    [FetchData.fulfilled]: (state, action) => {
      state = { ...state, loading: false, data: action.payload };
    },
    [FetchData.rejected]: (state, action) => {
      console.error("action Error", action);
    },
  },
});

export default HomeSlice;
