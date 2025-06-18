import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";

export const RTK_TAGS = {
  //   GET_COURSES: "GET_COURSES",
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseUrl = process.env.REACT_APP_API_URL;

  const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token") || "";
      const tenant_schema = localStorage.getItem("x-tenant-schema") || "";
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("Accept", "*");
      }

      if (tenant_schema) {
        headers.set("x-tenant-schema", `${tenant_schema}`);
      }
      return headers;
    },
  });
  const result = await baseQuery(args, api, extraOptions);

  const isTokenExpired = result?.error?.data?.msg === "jwt expired";

  if (isTokenExpired) {
    localStorage.clear();
    toast.error("Your session has expired");
    return;
  }

  return result;
};

const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: Object.values(RTK_TAGS),
  keepUnusedDataFor: 0,
});

export default apiSlice;
