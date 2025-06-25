"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Typography, Button, Box, Stack } from "@mui/material";
import MuiBreadcrumbs from "../../../components/MuiBreadcrumbs";

export default function TrainerPage() {
  const { id } = useParams();

  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/trainers/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch trainer");
          return res.json();
        })
        .then((data) => {
          setTrainer(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <Box sx={{ p: 4 }}>Loading...</Box>;
  if (!trainer) return <Box sx={{ p: 4 }}>Trainer not found</Box>;

  return (
    <>
      <MuiBreadcrumbs text="Trainer Details" />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Box
            component="img"
            src={`/${trainer.image}`}
            alt={trainer.name}
            sx={{
              width: "100%",
              height: { xs: 200, md: 300 },
              objectFit: "cover",
              borderRadius: 2,
            }}
          />

          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold", py: 1 }}>
              {trainer.name}
            </Typography>

            <Typography variant="h6" sx={{ py: 1 }}>
              Course: {trainer.course}
            </Typography>

            <Typography sx={{ py: 1 }}>{trainer.description}</Typography>
          </Box>

          <Box>
            <Link href="/trainers" passHref>
              <Button variant="outlined">Show All Trainers</Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
