import toast from "react-hot-toast";
import apiSlice from "src/redux/api/index";
import { transferErrorResponse } from "src/lib/transferResponse";
import { setUiEntities } from "src/slice/entities";

export const sidebarApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUiConfig: builder.query({
      query: () => ({
        url: "/ui/get-sidebar-schema",
        method: "GET",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;

        dispatch(setUiEntities(data.data));

        toast.success("UI Entities Loaded!");
      },
      transformErrorResponse: transferErrorResponse,
    }),
  }),
});

export const { useLazyGetUiConfigQuery, useGetUiConfigQuery } = sidebarApi;
