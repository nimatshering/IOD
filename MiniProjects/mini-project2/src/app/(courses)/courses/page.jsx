"use client";
import Link from "next/link";
import CustomCard from "../../../components/CustomCard";
import MuiBreadcrumbs from "../../../components/MuiBreadcrumbs";

import { useState, useEffect } from "react";
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Fetch courses on mount
  useEffect(() => {
    fetch("/api/courses")
      .then((res) => {
        if (!res.ok) throw new Error("Could not connect");
        return res.json();
      })
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => {
        console.error("Failed to fetch courses data:", err);
      });
  }, []);

  // Handle course filter change
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  // Handle sort order change
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Filter by selected course name
  const filteredCourses = selectedCourse
    ? courses.filter((course) => course.name === selectedCourse)
    : courses;

  // Sort filtered courses by name
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return sortOrder === "asc"
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });

  return (
    <>
      <MuiBreadcrumbs text="Courses" />
      <Box sx={{ mx: { xs: 2, sm: 4, md: 10 }, my: { xs: 4, md: 10 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Filter by Course Name */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Filter by Course Name
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="course-select-label">Course</InputLabel>
              <Select
                labelId="course-select-label"
                id="course-select"
                value={selectedCourse}
                label="Course"
                onChange={handleCourseChange}
              >
                <MenuItem value="">
                  <em>All Courses</em>
                </MenuItem>
                {courses.map((course) => (
                  <MenuItem key={course.id} value={course.name}>
                    {course.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Sort by Course Name - Ascending or Descending Order */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Sort by Course Name
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="sort-select-label">Sort</InputLabel>
              <Select
                labelId="sort-select-label"
                id="sort-select"
                value={sortOrder}
                label="Sort"
                onChange={handleSortChange}
              >
                <MenuItem value="asc">A–Z</MenuItem>
                <MenuItem value="desc">Z–A</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Course List */}
        {sortedCourses.length > 0 ? (
          <Box sx={{ mt: 6, mb: 4 }}>
            <Typography component="h4" variant="h5" gutterBottom>
              Courses
            </Typography>
            <Typography variant="h3" gutterBottom>
              Our Courses
            </Typography>
            <Grid container spacing={3}>
              {sortedCourses.map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course.id}>
                  <Link
                    href={`/courses/${course.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CustomCard image={course.image}>
                      <Typography sx={{ fontWeight: "bold", py: 1 }}>
                        {course.name}
                      </Typography>
                      <Typography variant="h5" sx={{ py: 1 }}>
                        {course.duration}
                      </Typography>
                      <Typography sx={{ fontWeight: "bold", py: 1 }}>
                        Skills you will gain:
                      </Typography>
                      <Typography>{course.skills}</Typography>
                      <Typography sx={{ fontWeight: "bold", py: 2 }}>
                        {course.category}
                      </Typography>
                      <Typography variant="h5">{course.tutor}</Typography>
                    </CustomCard>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          <Typography variant="h6">No courses found.</Typography>
        )}
      </Box>
    </>
  );
}
