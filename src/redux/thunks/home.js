import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAxios } from "../../helper";
export const FetchData = createAsyncThunk(
  "fetchData",
  async (model, thunkApi) => {
    try {
      let res = await getAxios().get("/todos/1");

      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue("error");
    }
  }
);
