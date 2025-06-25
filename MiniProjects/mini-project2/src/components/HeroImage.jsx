"use client";

import Image from "next/image";
import styles from "./HeroImage.module.css";
import { Box, Typography } from "@mui/material";

export default function HeroImage({ img_url, title, tagline, description }) {
  return (
    <Box className={styles.heroContainer}>
      <Image
        src={img_url}
        alt="Hero Image"
        fill
        className={styles.heroImage}
        priority
        sizes="(max-width: 800px) 100vw, 800px"
      />

      <div className={styles.overlay}></div>

      <div className={styles.centeredText}>
        <Typography variant="h4" sx={{ py: 1 }}>
          {title}
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          sx={{ py: 1, fontWeight: "bold" }}
        >
          {tagline}
        </Typography>
        <Typography variant="h5" component="h3">
          {description}
        </Typography>
      </div>
    </Box>
  );
}
