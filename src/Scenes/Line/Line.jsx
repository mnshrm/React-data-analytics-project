import React from "react";
import Header from "../../Components/Header";
import { Box } from "@mui/material";
import LineChart from "../../Components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line chart" subtitle="Simple line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
