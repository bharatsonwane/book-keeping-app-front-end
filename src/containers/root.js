import React from "react";
import { Provider } from "react-redux";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeContextProvider } from "../contexts/theme";
import I18n from "../locales";
import Store from "../store";
import MainApp from "./mainapp";
// eslint-disable-next-line no-unused-vars
const I = I18n;
const RootConatainer = (props) => {
  return (
    <Provider store={Store}>
      <ThemeContextProvider Theme={"light"}>
        <Router>
          <Routes>
            <Route path="/app/*" element={<MainApp />}></Route>
            <Route path="/" element={<Navigate replace to="/app" />} />
          </Routes>
        </Router>
      </ThemeContextProvider>
    </Provider>
  );
};

export default RootConatainer;
