import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
