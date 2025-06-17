import toast from "react-hot-toast";
import apiSlice from ".";
import { transferErrorResponse } from "@/lib/transferResponse";
import { setUiEntities } from "../slice/uiEntities";

export const sidebarApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUiConfig: builder.query({
      query: () => ({
        url: "/ui-config/get-entities",
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

export const {} = sidebarApi;
