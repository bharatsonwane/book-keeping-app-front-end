import { createAsyncThunk } from "@reduxjs/toolkit";
import getAxios from "src/helper/axiosInterceptor";

export const getSchemaByNameAction = createAsyncThunk(
  "bookkeeping/getSchemaByNameAction",
  async (model, thunkApi) => {
    try {
      let res = await getAxios().post(`/ui/get-schema-by-name`, {
        name: model.schemaName,
      });

      const responseData = res.data;

      return responseData;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);
