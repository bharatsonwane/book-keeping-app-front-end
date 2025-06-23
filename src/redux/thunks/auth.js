import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import getAxios from "src/helper/axiosInterceptor";

export const userLoginAction = createAsyncThunk(
  "login/userLoginAction",
  async (model, thunkApi) => {
    try {
      const { email, password } = model;
      let res = await getAxios().post(`/user/login`, {
        email: email,
        password: password,
      });

      const responseData = res.data;

      Cookies.set("authJwtToken", JSON.stringify(responseData.token), {
        expires: 1,
      });

      return responseData;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);
