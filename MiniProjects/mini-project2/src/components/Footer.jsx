"use client";

import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        py: 6,
        mt: "auto", // Pushes footer to the bottom when content is short
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2025 e-Learning Portal
      </Typography>
    </Box>
  );
};

export default Footer;
