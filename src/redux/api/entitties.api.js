import toast from "react-hot-toast";
import apiSlice from "src/redux/api/index";
import { transferErrorResponse } from "src/lib/transferResponse";
import { setUiEntities } from "src/redux/slice/entities";

export const entitiesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSchemaByName: builder.query({
      query: (data) => ({
        url: "/ui/get-schema-by-name",
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
  useGetSchemaByNameQuery,
  useLazyGetSchemaByNameQuery,
  useGetDataByIdQuery,
  useLazyGetDataByIdQuery,
} = entitiesAPI;
