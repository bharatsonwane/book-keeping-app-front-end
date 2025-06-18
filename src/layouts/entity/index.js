import SideNavbar from "./side-navbar";
import TopNavbar from "./top-navbar";
import React from "react";

const UiEntitesLayout = ({ children }) => {
  return (
    <div className="h-[100vh] w-full">
      <TopNavbar />
      <div className="flex h-[92vh] w-full ">
        <SideNavbar />
        <div className="w-full h-[92vh] px-6 py-4">{children}</div>
      </div>
    </div>
  );
};

export default UiEntitesLayout;
