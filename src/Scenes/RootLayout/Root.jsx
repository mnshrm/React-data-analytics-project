import React, { useCallback, useState } from "react";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [open, setOpen] = useState(false);
  // selected option is for collapsing and uncollapsing nested options in sidebar
  const handleToggle = useCallback(() => {
    setOpen((pv) => !pv);
  }, []);
  return (
    <div className="app">
      <main className="content">
        <Topbar handleOpen={handleToggle} />
        <Sidebar open={open} handleOpen={handleToggle} />
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
