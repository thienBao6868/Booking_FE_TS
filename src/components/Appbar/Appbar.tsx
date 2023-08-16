import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link as RouterLink } from "react-router-dom";

import "./appbar.css";
import { IconButton } from "@mui/material";
import Logo from "./Logo";
function Appbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: "#4178a5" }}>
          <Toolbar
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <RouterLink to={"/"}>
              <Logo />
            </RouterLink>
            <RouterLink to={"/helpcenter"}>
            <IconButton color="inherit">
                <HelpOutlineIcon />
              </IconButton>
            </RouterLink>
          </Toolbar>
          <Toolbar
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            <RouterLink to={"/"}>
              <Logo />
            </RouterLink>
            <RouterLink to={"/helpcenter"}>
              <IconButton color="inherit">
                <HelpOutlineIcon />
              </IconButton>
            </RouterLink>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Appbar;
