import React from "react";
import Header from "../../Components/Header";
import { Box } from "@mui/material";
import BarChart from "../../Components/BarChart";
const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
