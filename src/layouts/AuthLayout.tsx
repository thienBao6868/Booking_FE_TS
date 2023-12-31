import React from "react";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import Appbar from "../components/Appbar/Appbar";
const AuthLayout = () => {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Appbar />
      <Outlet />
      <Box flexGrow={1} />
    </Stack>
  );
};

export default AuthLayout;
