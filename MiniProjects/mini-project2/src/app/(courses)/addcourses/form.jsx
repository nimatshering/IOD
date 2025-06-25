"use client";

import { useState } from "react";
import { TextField, Button, Box, MenuItem } from "@mui/material";

const categories = [
  "AI and Data Science",
  "Web Development",
  "Cloud Computing",
  "Business Management",
];

export default function AddCourseForm() {
  const [form, setForm] = useState({
    name: "",
    tutor: "",
    duration: "",
    skills: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const data = await res.json();
      alert("Course added: " + data.name);
      setForm({
        name: "",
        tutor: "",
        duration: "",
        skills: "",
        image: "",
        category: "",
      });
    } else {
      const error = await res.json();
      alert("Error: " + error.error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 2 }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Course Name"
        name="name"
        fullWidth
        margin="normal"
        value={form.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Tutor"
        name="tutor"
        fullWidth
        margin="normal"
        value={form.tutor}
        onChange={handleChange}
        required
      />
      <TextField
        label="Duration"
        name="duration"
        fullWidth
        margin="normal"
        value={form.duration}
        onChange={handleChange}
        required
      />
      <TextField
        label="Skills (comma separated)"
        name="skills"
        fullWidth
        margin="normal"
        value={form.skills}
        onChange={handleChange}
        required
      />
      <TextField
        label="Image Path"
        name="image"
        fullWidth
        margin="normal"
        value={form.image}
        onChange={handleChange}
        required
        helperText="e.g., images/courses/ai.jpg"
      />
      <TextField
        select
        label="Category"
        name="category"
        fullWidth
        margin="normal"
        value={form.category}
        onChange={handleChange}
        required
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Course
      </Button>
    </Box>
  );
}
