import React from "react";
import Header from "../../Components/Header";
import { Box } from "@mui/material";
import Choropleth from "../../Components/Choropleth";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Choropleth chart" subtitle="Simple choropleth chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <Choropleth />
      </Box>
    </Box>
  );
};

export default Line;
