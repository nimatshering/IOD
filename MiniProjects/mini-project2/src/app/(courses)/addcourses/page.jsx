// app/add-course/page.tsx
import React from "react";
import AddCourseForm from "./form";
import { Container, Typography } from "@mui/material";

export default function AddCoursePage() {
  return (
    <Container maxWidth="sm" sx={{ m: 10 }}>
      <Typography variant="h4" gutterBottom>
        Add New Course
      </Typography>
      <AddCourseForm />
    </Container>
  );
}
