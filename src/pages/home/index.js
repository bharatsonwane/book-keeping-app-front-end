import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomeList from "./view/Home";
import UiEntitesLayout from "src/layouts/entity";
import SchemaMainRenderer from "../../components/schemaRender/SchemaMainRenderer";

const Home = () => {
  const Location = useLocation();
  return (
    <UiEntitesLayout>
      <Routes>
        <Route
          path={`/`}
          element={<Navigate replace="/" to={`${Location.pathname}/list/:schemaName`} />}
        ></Route>
        <Route path={"list/:schemaName"} element={<HomeList />}></Route>
        <Route path={"create/:schemaName"} element={<SchemaMainRenderer />}></Route>
        <Route path={"update/:schemaName/:id"} element={<SchemaMainRenderer />}></Route>
        <Route path={"view/:schemaName/:id"} element={<SchemaMainRenderer />}></Route>
      </Routes>
    </UiEntitesLayout>
  );
};

export default Home;
