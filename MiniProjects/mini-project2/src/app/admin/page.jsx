import { Container, Typography, Box } from "@mui/material";
import AddCourseForm from "./Form"; // Adjust path as needed

export default function AddCoursePage() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Add New Course
        </Typography>
        <AddCourseForm />
      </Box>
    </Container>
  );
}
