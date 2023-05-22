import React, { useState, useCallback } from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Box,
  Typography,
  ListItemButton,
} from "@mui/material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

// Material icons used
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { PieChartOutline } from "@mui/icons-material";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { ChevronLeft } from "@mui/icons-material";

const options = [
  {
    title: "Data",
    subOptions: [
      {
        subTitle: "Manage Team",
        icon: <PeopleOutlinedIcon />,
      },
      {
        subTitle: "Contacts Information",
        icon: <ContactsOutlinedIcon />,
      },
      {
        subTitle: "Invoices Balances",
        icon: <ReceiptOutlinedIcon />,
      },
    ],
  },
  {
    title: "Pages",
    subOptions: [
      {
        subTitle: "Profile Form",
        icon: <PersonOutlinedIcon />,
      },
      {
        subTitle: "Calendar",
        icon: <CalendarTodayOutlinedIcon />,
      },
      {
        subTitle: "FAQ Page",
        icon: <HelpOutlineOutlinedIcon />,
      },
    ],
  },
  {
    title: "Charts",
    subOptions: [
      {
        subTitle: "Bar Chart",
        icon: <BarChartOutlinedIcon />,
      },
      {
        subTitle: "Pie Chart",
        icon: <PieChartOutline />,
      },
      {
        subTitle: "Line Chart",
        icon: <TimelineOutlinedIcon />,
      },
      {
        subTitle: "Geography Chart",
        icon: <MapOutlinedIcon />,
      },
    ],
  },
];

const Sidebar = (props) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);

  // open state is for collapsing and uncollapsing sidebar. It is present in RootLayout
  // handleOpen changes open state
  const { open, handleOpen } = props;

  // selected option is for collapsing and uncollapsing nested options in sidebar
  const [selectedOption, setSelectedOption] = useState("");
  // toggleOption to change selectedOption
  const toggleOption = useCallback((opt) => {
    setSelectedOption(opt);
  }, []);

  return (
    <div>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: color.primary[400],
            width: "240px",
            color: color.grey[100],
          },
        }}
      >
        <Box display="flex" justifyContent={"flex-end"} padding={"5px"}>
          <IconButton onClick={handleOpen}>
            <ChevronLeft />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {options.map((option) => {
            return (
              <>
                <ListItemButton onClick={toggleOption.bind(null, option.title)}>
                  <Typography
                    variant="h6"
                    color={color.grey[300]}
                    sx={{ m: "5px 0 5px 5px" }}
                  >
                    {option.title}
                  </Typography>
                </ListItemButton>
                <Collapse
                  in={selectedOption === option.title}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    {option.subOptions.map((subOpt) => (
                      <ListItemButton
                        sx={{ marginLeft: "10px" }}
                        component={Link}
                        to="/bar"
                      >
                        <ListItemIcon>{subOpt.icon}</ListItemIcon>
                        <ListItemText primary={subOpt.subTitle} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default React.memo(Sidebar);
