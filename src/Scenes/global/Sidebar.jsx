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
import { Dashboard, PieChartOutline } from "@mui/icons-material";
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
        to: "/team",
      },
      {
        subTitle: "Contacts Information",
        icon: <ContactsOutlinedIcon />,
        to: "/contacts",
      },
      {
        subTitle: "Invoices Balances",
        icon: <ReceiptOutlinedIcon />,
        to: "/invoices",
      },
    ],
  },
  {
    title: "Charts",
    subOptions: [
      {
        subTitle: "Bar Chart",
        icon: <BarChartOutlinedIcon />,
        to: "/bar",
      },
      {
        subTitle: "Pie Chart",
        icon: <PieChartOutline />,
        to: "/pie",
      },
      {
        subTitle: "Line Chart",
        icon: <TimelineOutlinedIcon />,
        to: "/line",
      },
      {
        subTitle: "Geography Chart",
        icon: <MapOutlinedIcon />,
        to: "/geography",
      },
    ],
  },
  {
    title: "Pages",
    subOptions: [
      {
        subTitle: "Profile Form",
        icon: <PersonOutlinedIcon />,
        to: "/profile",
      },
      {
        subTitle: "Calendar",
        icon: <CalendarTodayOutlinedIcon />,
        to: "/calendar",
      },
      {
        subTitle: "FAQ Page",
        icon: <HelpOutlineOutlinedIcon />,
        to: "/faq",
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
    setSelectedOption((pv) => (pv === opt ? "" : opt));
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
          <ListItemButton component={Link} to={"/dashboard"}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </List>
        <List>
          {options.map((option) => {
            return (
              <>
                <ListItemButton onClick={toggleOption.bind(null, option.title)}>
                  <Typography
                    variant="h6"
                    color={color.grey[300]}
                    sx={{ m: "5px 0 5px 0px" }}
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
                        key={subOpt.to}
                        component={Link}
                        to={subOpt.to}
                        sx={{ marginLeft: "10px" }}
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
