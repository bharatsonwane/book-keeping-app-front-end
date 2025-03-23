import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ThemeContextProvider } from "../contexts/theme";
import Cookies from "js-cookie";
import I18n from "../locales";
import Store from "../store";
import MainApp from "./mainapp";
import Login from "../pages/login";

const RootComponent = (props) => {
  return (
    <Provider store={Store}>
      <ThemeContextProvider Theme={"light"}>
        <Router>
          <RootConatainer />
        </Router>
      </ThemeContextProvider>
    </Provider>
  );
};
// eslint-disable-next-line no-unused-vars
const I = I18n;
const RootConatainer = (props) => {
  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    if (
      location.pathname !== "/" &&
      location.pathname !== "/app" &&
      location.pathname !== "/login"
    ) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    getToken();
  }, [location]);

  const getToken = () => {
    let userToken = Cookies.get("authJwtToken");
    // console.log("userToken", userToken)

    // let token = userToken ? true : false;
    // setUserToken(token)
    if (userToken) {
      return true;
    } else {
      return false;
    }
  };


  return (
    <Routes>
      <Route
        path="/"
        element={
          getToken() ? (
            <Navigate replace to="/app" />
          ) : (
            <Navigate replace to="/login" />
          )
        }
      ></Route>
      <Route
        path="/app/*"
        element={getToken() ? <MainApp /> : <Navigate replace to="/login" />}
      ></Route>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<Navigate replace to="/app" />} /> */}
    </Routes>
  );
};

export default RootComponent;
