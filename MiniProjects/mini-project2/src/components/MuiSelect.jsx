"use client";
import React, { useState } from "react";
import { Box, TextField, MenuItem, Stack } from "@mui/material";

function MuiSelect() {
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  return (
    <Stack spacing={4}>
      <Box width="250px">
        <TextField
          label="Select country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
}

export default MuiSelect;
