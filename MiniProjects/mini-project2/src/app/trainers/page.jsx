"use client";
import Link from "next/link";
import { Grid, Box, Typography } from "@mui/material";
import PostCard from "@/components/CustomCard";
import MuiBreadcrumbs from "@/components/MuiBreadcrumbs";
import { useState, useEffect } from "react";

export default function Trainers() {
  const [trainers, setTrainers] = useState(null);

  // ===============================
  // Fetch Popular trainer Section Data
  // ===============================
  useEffect(() => {
    fetch("/api/trainers")
      .then((res) => {
        if (!res.ok) throw new Error("Could not connect");
        return res.json();
      })
      .then((data) => {
        setTrainers(data);
      })
      .catch((err) => {
        console.error("Failed to fetch trainers data:", err);
      });
  }, []);

  return (
    <>
      <MuiBreadcrumbs text="Trainer" />
      <Box sx={{ mx: { xs: 2, sm: 4, md: 10 }, my: { xs: 4, md: 10 } }}>
        {trainers && (
          <Box sx={{ mt: 6, mb: 4 }}>
            <Typography variant="h3" gutterBottom>
              Our trainer
            </Typography>
            <Grid container spacing={3}>
              {trainers.map((trainer) => (
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
                    <PostCard image={trainer.image}>
                      <Typography sx={{ fontWeight: "bold", py: 1 }}>
                        {trainer.name}
                      </Typography>
                      <Typography>{trainer.course}</Typography>
                      <Typography sx={{ fontWeight: "bold", py: 2 }}>
                        {trainer.description}
                      </Typography>
                    </PostCard>
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
