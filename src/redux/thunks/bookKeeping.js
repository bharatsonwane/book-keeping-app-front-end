import { createAsyncThunk } from "@reduxjs/toolkit";
import { getValidationErrorForSchemaWithZod } from "src/helper/zodValidationHelper";
import getAxios from "src/helper/axiosInterceptor";

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

// schema/create-by-ai

export const createBookkeepingSchemaByAIAction = createAsyncThunk(
  "bookkeeping/createBookkeepingSchemaByAIAction",
  async (model, thunkApi) => {
    try {
      let res = await getAxios().post(`/schema/create-by-ai`, {
        domainName: model.domainName,
        description: model.description,
      });

      const responseData = res.data;

      return responseData;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);

export const getBookkeepingSchemaAction = createAsyncThunk(
  "bookkeeping/getBookkeepingSchemaAction",
  async (model, thunkApi) => {
    try {
      let res = await getAxios().get(`/schema/list`);

      const responseData = res.data;

      return responseData;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);

export const getBookkeepingSchemaDetailsAction = createAsyncThunk(
  "bookkeeping/getBookkeepingSchemaDetailsAction",
  async (model, thunkApi) => {
    try {
      let res = await getAxios().get(`/schema/${model}`);

      const responseData = res.data;

      return responseData;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);

export const updateBookkeepingSchemaAction = createAsyncThunk(
  "bookkeeping/updateBookkeepingSchemaAction",
  async (model, thunkApi) => {
    try {
      let res = await getAxios().put(`/schema/${model._id}`, {
        ...model,
      });

      const responseData = res.data;

      return responseData;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);

export const addBookkeepingEntryAction = createAsyncThunk(
  "bookkeeping/updateBookkeepingSchemaAction",
  async (model, thunkApi) => {
    try {
      let res = await getAxios().post(`/entries`, {
        ...model,
      });

      const responseData = res.data;

      return responseData;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);

export const getBookkeepingColumnsForSchemaAction = createAsyncThunk(
  "bookkeeping/getBookkeepingColumnsForSchemaAction",
  async (model, thunkApi) => {
    try {
      let res = await getAxios().get(`schema/${model}/columns`);

      const responseData = res.data;

      return responseData;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);

export const getBookkeepingEntryForSchemaAction = createAsyncThunk(
  "bookkeeping/getBookkeepingEntryForSchemaAction",
  async (model, thunkApi) => {
    try {
      let res = await getAxios().get(`/schema/${model}/entries`);

      const responseData = res.data;

      return responseData;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);
