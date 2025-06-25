import React from "react";
import { Box, colors, Stack } from "@mui/material";

const MuiBox = () => {
  return (
    <Stack spacing={4} my={4}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "200px",
          width: "200px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Mui Box
      </Box>
    </Stack>
  );
};

export default MuiBox;
