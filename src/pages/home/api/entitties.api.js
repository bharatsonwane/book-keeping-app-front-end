import toast from "react-hot-toast";
import apiSlice from "src/redux/api/index";
import { transferErrorResponse } from "src/lib/transferResponse";
import { setUiEntities } from "src/slice/entities";

export const entitiesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSchemaById: builder.query({
      query: (data) => ({
        url: "/ui/get-schema-by-id",
        method: "POST",
        body: data,
      }),
      transformErrorResponse: transferErrorResponse,
    }),
    getDataById: builder.query({
      query: (data) => ({
        url: "/ui/get-data-by-query",
        method: "POST",
        body: data,
      }),
      transformErrorResponse: transferErrorResponse,
    }),
  }),
});

export const {
  useGetSchemaByIdQuery,
  useLazyGetSchemaByIdQuery,
  useGetDataByIdQuery,
  useLazyGetDataByIdQuery,
} = entitiesAPI;
