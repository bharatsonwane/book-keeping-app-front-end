import toast from "react-hot-toast";
import apiSlice from "src/redux/api/index";
import { transferErrorResponse } from "src/lib/transferResponse";
import { loginUser } from "src/slice/auth";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;

        localStorage.setItem("token", data.data.token);

        dispatch(loginUser(data.data));

        toast.success("Logged In!!");
      },
      transformErrorResponse: transferErrorResponse,
    }),

    registerTenant: builder.mutation({
      query: (data) => ({
        url: "/tenant/signup",
        method: "POST",
        body: data,
      }),

      // async onQueryStarted(_, { dispatch, queryFulfilled }) {
      //   const { data } = await queryFulfilled;

      //   localStorage.setItem("token", data.data.token);

      //   dispatch(loginUser(data.data.userData));

      //   toast.success("Signup and logged in!");
      // },
      transformErrorResponse: transferErrorResponse,
    }),
  }),
});

export const { useLoginMutation, useRegisterTenantMutation } = authApi;
