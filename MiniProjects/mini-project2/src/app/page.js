"use client";

import { useState, useEffect } from "react";
import HeroImage from "../components/HeroImage";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CustomCard from "../components/CustomCard";
import CustomLoading from "../components/CustomLoading";

export default function Home() {
  const [hero, setHero] = useState(null);
  const [about, setAbout] = useState(null);
  const [courses, setCourses] = useState([]);
  const [trainers, setTrainers] = useState([]);

  // ===============================
  // Fetch Hero Section Data
  // ===============================
  useEffect(() => {
    fetch("/api/hero")
      .then((res) => {
        if (!res.ok) throw new Error("Could not connect");
        return res.json();
      })
      .then((data) => {
        setHero(data.hero[0]); // Assuming hero is an array
      })
      .catch((err) => {
        console.error("Failed to fetch hero data:", err);
      });
  }, []);

  // ===============================
  // Fetch About Section Data
  // ===============================
  useEffect(() => {
    fetch("/api/about")
      .then((res) => {
        if (!res.ok) throw new Error("Could not connect");
        return res.json();
      })
      .then((data) => {
        setAbout(data.about[0]); // Assuming about is an array
      })
      .catch((err) => {
        console.error("Failed to fetch about data:", err);
      });
  }, []);

  // ===============================
  // Fetch Popular Courses Section Data
  // ===============================
  useEffect(() => {
    fetch("/api/courses")
      .then((res) => {
        if (!res.ok) throw new Error("Could not connect");
        return res.json();
      })
      .then((data) => {
        setCourses(data.slice(0, 3));
      })
      .catch((err) => {
        console.error("Failed to fetch courses data:", err);
      });
  }, []);

  // ===============================
  // Fetch Course Trainers Section Data
  // ===============================
  useEffect(() => {
    fetch("/api/trainers")
      .then((res) => {
        if (!res.ok) throw new Error("Could not connect");
        return res.json();
      })
      .then((data) => {
        setTrainers(data.slice(0, 3));
      })
      .catch((err) => {
        console.error("Failed to fetch trainers data:", err);
      });
  }, []);

  // Safely extract option values
  const optionValues = about?.options ? Object.values(about.options) : [];

  return (
    <>
      {/* =========================
          Hero Section
      ========================== */}
      {!hero ? (
        <CustomLoading text="Loading..." />
      ) : (
        <HeroImage
          img_url={hero.image}
          title={hero.title}
          tagline={hero.tagline}
          description={hero.description}
        />
      )}

      <Box sx={{ mx: { xs: 2, sm: 4, md: 10 }, my: { xs: 4, md: 10 } }}>
        {/* =========================
          About Section
          ========================== */}
        {about && (
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
            gap={4}
            marginTop={10}
            padding={4}
          >
            <Box>
              <Typography component="h3" variant="h3" marginBottom={2}>
                {about.title}
              </Typography>
              <Typography variant="body1">
                <em>{about.body}</em>
              </Typography>

              <ul>
                {optionValues.map((option, index) => (
                  <li key={index}>
                    <em>{option}</em>
                  </li>
                ))}
              </ul>
            </Box>

            {/* About Image */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 400,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Image
                src={about.image || "/images/courses/elearning.jpg"}
                alt="E-learning"
                fill
                sizes="(max-width: 800px) 100vw, 800px"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        )}

        {/* =========================
              Courses Section
          ========================== */}
        {courses && (
          <Box sx={{ mt: 6, mb: 4 }}>
            <Typography component="h4" variant="h5" gutterBottom>
              Courses
            </Typography>
            <Typography variant="h3" gutterBottom>
              Popular Courses
            </Typography>

            <Grid container spacing={3}>
              {courses.slice(0, 3).map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course.id || course.name}>
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
        )}

        {/* =========================
              Trainers Section
          ========================== */}
        {courses && (
          <Box sx={{ mt: 6, mb: 4 }}>
            <Typography component="h4" variant="h5" gutterBottom>
              Course Trainers
            </Typography>
            <Typography variant="h3" gutterBottom>
              Full Time Trainers
            </Typography>

            <Grid container spacing={3}>
              {trainers.slice(0, 3).map((trainer) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={trainer.id || trainer.name}
                >
                  <Link
                    href={`/trainers/${trainer.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CustomCard image={trainer.image}>
                      <Typography sx={{ fontWeight: "bold", py: 1 }}>
                        {trainer.name}
                      </Typography>
                      <Typography variant="h6" sx={{ py: 1 }}>
                        {trainer.course}
                      </Typography>
                      <Typography variant="body">
                        {trainer.description}
                      </Typography>
                    </CustomCard>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
}
