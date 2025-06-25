"use client";

import { Container, Box, Typography } from "@mui/material";
import MuiBreadcrumbs from "@/components/MuiBreadcrumbs";

export default function About() {
  return (
    <>
      <MuiBreadcrumbs text="About" />
      <Container maxWidth="md">
        <Box sx={{ py: 8 }}>
          <Typography variant="body1">
            Our company offers a diverse range of Computer Science courses
            designed to meet the needs of beginners and advanced learners alike.
            From foundational programming and data structures to cutting-edge
            topics like artificial intelligence, cybersecurity, and cloud
            computing, our curriculum is developed by industry experts. Each
            course includes hands-on projects, real-world case studies, and
            access to mentoring. Whether you're looking to start a new career or
            upskill, our flexible learning paths and online accessibility make
            it easy to achieve your goals in the fast-paced world of technology.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
