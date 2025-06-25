"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Typography, Button, Box, Stack } from "@mui/material";
import MuiBreadcrumbs from "../../../../components/MuiBreadcrumbs";

export default function CoursePage() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/courses/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setCourse(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <Box sx={{ p: 4 }}>Loading...</Box>;
  if (!course) return <Box sx={{ p: 4 }}>Course not found</Box>;
  // console.log(course);
  return (
    <>
      <MuiBreadcrumbs text="Course Details" />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Box
            component="img"
            src={`/${course.image}`}
            alt={course.name}
            sx={{
              width: "100%",
              height: { xs: 200, md: 300 },
              objectFit: "cover",
              borderRadius: 2,
            }}
          />

          <Box>
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
          </Box>

          <Box>
            <Link href="/courses" passHref>
              <Button variant="outlined">Show All Posts</Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
