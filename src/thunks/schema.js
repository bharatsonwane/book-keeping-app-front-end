import { createAsyncThunk } from "@reduxjs/toolkit";
import { ADD, EDIT, FOOD_BEWERAGE } from "src/helper/constants/constants";
import { getProductSchemaBaseOnProductType, getProduct_flatten_TabStructured_Schema } from "src/helper/helpers";


/** get product template */
export const getProductTemplateSchemaAction = createAsyncThunk(
    "product/getProductTemplateSchemaAction",
    async (arg, thunkApi) => {
        try {
            const { productType = FOOD_BEWERAGE, formType = EDIT } = arg
            const productSchema = getProductSchemaBaseOnProductType(productType);
            const { productFlattenSchema, productTabStructuredSchema } = getProduct_flatten_TabStructured_Schema(productSchema)
            const responseData = { productSchema, productFlattenSchema, productTabStructuredSchema, formType, productType }
            return responseData;
        } catch (err) {
            return thunkApi.rejectWithValue(err);
        }
    }
);