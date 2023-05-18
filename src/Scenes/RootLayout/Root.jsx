import React from "react";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="app">
      <main className="content">
        <Topbar />
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
