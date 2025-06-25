import React from "react";
import { Box, Typography } from "@mui/material";

const CustomLoading = ({ text }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h5">{text}</Typography>
    </Box>
  );
};

export default CustomLoading;
