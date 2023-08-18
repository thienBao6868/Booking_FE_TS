import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link as RouterLink } from "react-router-dom";
import "./appbar.css";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import Logo from "./Logo";
import BannerWapper from "./BannerWapper";
import SearchBox from "./SearchBox";


function AppbarHomePage() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: "#4178a5" }} position="relative">
          {/* reponsive small screen */}
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
          {/* reponsive large screen */}
          <Toolbar
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            <RouterLink to={"/"}>
              <Logo />
            </RouterLink>
            <Box>
              <RouterLink to={"/helpcenter"}>
                <IconButton color="inherit" sx={{ marginRight: 2 }}>
                  <HelpOutlineIcon />
                </IconButton>
              </RouterLink>
              <RouterLink to={"/register"}>
                <Button
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "2",
                    marginRight: 2,
                  }}
                >
                  <Typography variant="body2">Resgister</Typography>
                </Button>
              </RouterLink>
              <RouterLink to={"/signin"}>
                <Button sx={{ backgroundColor: "#fff", borderRadius: "2" }}>
                  <Typography variant="body2">Sign In</Typography>
                </Button>
              </RouterLink>
            </Box>
          </Toolbar>
          <BannerWapper/>
          <Stack padding={3}/>
          <SearchBox/>
        </AppBar>
      </Box>
    </>
  );
}

export default AppbarHomePage;
