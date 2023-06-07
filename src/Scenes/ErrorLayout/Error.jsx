import React from "react";
import Header from "../../Components/Header";
import { Box } from "@mui/material";
import { useState, useCallback } from "react";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";

const Error = () => {
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
        <Box m="20px">
          <Header title="Error" subtitle={"Page not found"} />
        </Box>
      </main>
    </div>
  );
};

export default Error;
