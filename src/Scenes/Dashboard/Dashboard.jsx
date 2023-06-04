import React from "react";
import { Box, useTheme, Button, Typography, IconButton } from "@mui/material";
import Header from "../../Components/Header.jsx";
import { tokens } from "../../theme";
import {
  Download,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import LineChart from "../../Components/LineChart.jsx";
import BarChart from "../../Components/BarChart.jsx";
import PieChart from "../../Components/PieChart.jsx";
import Choropleth from "../../Components/Choropleth.jsx";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              marginBottom: "30px",
            }}
          >
            <Download sx={{ mr: "10px" }} />
            Download Report
          </Button>
        </Box>
      </Box>

      {/* Dashboard Grid */}

      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Ṛow 1 */}
      </Box>
    </Box>
  );
};

export default Dashboard;
