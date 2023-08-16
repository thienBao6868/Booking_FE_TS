import { Box, Typography } from "@mui/material";
import React from "react";

function NoMatchPage() {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h4" color={"red"}>Not Found Page</Typography>
    </Box>
  );
}

export default NoMatchPage;
