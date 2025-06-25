"use client";

import { Container, Box, Typography } from "@mui/material";
import MuiBreadcrumbs from "../../../components/MuiBreadcrumbs";

export default function Profile() {
  return (
    <>
      <MuiBreadcrumbs text="Profile" />
      <Container maxWidth="md">
        <Box sx={{ py: 8 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Profile
          </Typography>
          <Typography variant="body1">This is the profile page.</Typography>
        </Box>
      </Container>
    </>
  );
}
