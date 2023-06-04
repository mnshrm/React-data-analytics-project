import React from "react";
import Header from "../../Components/Header";
import { Box } from "@mui/material";
import Choropleth from "../../Components/Choropleth";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Choropleth chart" subtitle="Simple choropleth chart" />
      <Box height="75vh">
        <Choropleth />
      </Box>
    </Box>
  );
};

export default Line;
