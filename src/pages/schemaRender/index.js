import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SchemaRenderList from "./components/list";
import ProductContextProvider from "./components/ProductContext";

const SchemaRender = () => {
  const Location = useLocation();
  return (
    <>
      <div className="main-page-container">
        <ProductContextProvider>
          <Routes>
            <Route
              path={`/`}
              element={<Navigate replace="/" to={`${Location.pathname}/list`} />}
            ></Route>
            <Route path={"list"} element={<SchemaRenderList />}></Route>
          </Routes>
        </ProductContextProvider>
      </div>
    </>
  );
};

export default SchemaRender;
