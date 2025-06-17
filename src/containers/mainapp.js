import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { WithNavBar, WithSideBar, WithBottomTab } from "../layouts/index,";
import Home from "../pages/home";
import Services from "../pages/services/index";
import Team from "../pages/team";
import Work from "../pages/work";
import BookKeeping from "src/pages/bookKeeping";
import AuthLoading from "src/pages/loading/index";

const MainApp = (props) => {
  const Location = useLocation();

  return (
    // <WithBottomTab>
    //   <div className="container-fluid main-app-container">
    //     <Routes>
    //       <Route
    //         path={"/"}
    //         element={<Navigate replace to={`${Location.pathname}/home`} />}
    //       />
    //       <Route path={`home/*`} element={<Home />} />
    //       <Route path={`services/*`} element={<Services />}></Route>
    //       <Route path={`team/*`} element={<Team />} />
    //       <Route path={`work/*`} element={<Work />} />
    //     </Routes>
    //   </div>
    // </WithBottomTab>
    // <WithSideBar>
    <div className="container-fluid main-app-container">
      <Routes>
        <Route
          path={"/"}
          element={<Navigate replace to={`${Location.pathname}/home`} />}
        />
        <Route path={`home/*`} element={<Home />} />
        <Route path={`auth-loading/*`} element={<AuthLoading />} />
        <Route path={`services/*`} element={<Services />}></Route>
        <Route path={`team/*`} element={<Team />} />
        <Route path={`work/*`} element={<Work />} />
        <Route path={`bookkeeping/*`} element={<BookKeeping />} />
      </Routes>
    </div>
    // </WithSideBar>
    // <WithNavBar>
    //   <div className="container-fluid main-app-container mx-0">
    //     <Routes>
    //       <Route
    //         path={"/"}
    //         element={<Navigate replace to={`${Location.pathname}/home`} />}
    //       />
    //       <Route path={`home/*`} element={<Home />} />
    //       <Route path={`services/*`} element={<Services />}></Route>
    //       <Route path={`team/*`} element={<Team />} />
    //       <Route path={`work/*`} element={<Work />} />
    //     </Routes>
    //   </div>
    // </WithNavBar>
  );
};

export default MainApp;
