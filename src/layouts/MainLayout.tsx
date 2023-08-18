import React from "react";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";


import AppbarHomePage from "../components/Appbar/AppbarHomePage";
const MainLayout = () => {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <AppbarHomePage/>
      <Stack marginBottom={25}/>
      <Outlet />
      <Box flexGrow={1} />
    </Stack>
  );
};

export default MainLayout;
