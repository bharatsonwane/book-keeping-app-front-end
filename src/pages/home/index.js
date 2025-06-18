import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomeList from "./view/Home";

const Home = () => {
  const Location = useLocation();
  return (
    <Routes>
      <Route
        path={`/`}
        element={<Navigate replace="/" to={`${Location.pathname}/list/id`} />}
      ></Route>
      <Route path={"list/:id"} element={<HomeList />}></Route>
    </Routes>
  );
};

export default Home;
