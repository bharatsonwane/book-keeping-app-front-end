import React from "react";
import { Route, Routes } from "react-router-dom";
import Crossplatform from "./crossplatform";
import Migrations from "./migrations";
import Pwa from "./pwa";

const Services = (props) => {
  return (
    <>
      <Routes>
        <Route path="technologymigrations/*" element={<Migrations />} />
        <Route path="crossplatform/*" element={<Crossplatform />} />
        <Route path="pwa/*" element={<Pwa />} />
      </Routes>
    </>
  );
};
export default Services;
