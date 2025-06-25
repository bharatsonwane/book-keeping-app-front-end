import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomeList from "./view/Home";
import EntityDetails from "./view/entity-details";
import UiEntitesLayout from "src/layouts/entity";

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
        <Route path={"list/entity-details"} element={<EntityDetails />}></Route>
      </Routes>
    </UiEntitesLayout>
  );
};

export default Home;
