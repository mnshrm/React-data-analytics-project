import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutline,
  SettingsOutlined,
  Menu,
} from "@mui/icons-material";

const Topbar = (props) => {
  // handleOpen changes open state present in Root.jsx
  // open state collapses and uncollapses sidebar
  const { handleOpen } = props;
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent={"space-between"} p={2}>
      {/* Search bar with Icon */}
      <Box
        display={"flex"}
        backgroundColor={color.primary[400]}
        borderRadius={"3px"}
      >
        <IconButton>
          <Menu onClick={handleOpen} />
        </IconButton>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icon buttons */}
      <Box display={"flex"}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "light" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
};

export default React.memo(Topbar);
