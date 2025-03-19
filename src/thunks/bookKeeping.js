import { createAsyncThunk } from "@reduxjs/toolkit";
import { getValidationErrorForSchemaWithZod } from "src/helper/zodValidationHelper";

export const validateAllFormFieldAction = createAsyncThunk(
  "bookKeeping/validateAllFormFieldAction",
  async (arg, thunkApi) => {
    try {
      const { formDataObject, schema } = arg;

      const response = await getValidationErrorForSchemaWithZod(
        schema,
        formDataObject
      );

      return response;
    } catch (error) {
      thunkApi.rejectWithValue("error");
    }
  }
);
