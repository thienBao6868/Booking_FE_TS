import React from "react";
import AuthHeader from "./AuthHeader";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <AuthHeader />
      <Outlet />
      <Box flexGrow={1} />
    </Stack>
  );
};

export default AuthLayout;
