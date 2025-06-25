import { InputAdornment, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const MuiTextField = () => {
  return (
    <Stack spacing={4} my={4}>
      <Stack spacing={4}>
        <Stack spacing={4} direction={"row"}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField
            label="Name Read Only"
            variant="standard"
            inputProps={{ readOnly: true }}
          />
        </Stack>

        <Stack spacing={4} direction={"row"}>
          <TextField label="Small Secondary" size="small" color="secondary" />
          <TextField label="Medium Secondary" size="small" color="secondary" />
          <TextField label="Large Secondary" size="small" color="secondary" />
        </Stack>
        <Stack spacing={4} direction={"row"}>
          <TextField
            label="Small Secondary"
            size="small"
            color="secondary"
            helperText="The password should be more than 8 digits"
            required
            disabled
          />

          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack></Stack>
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
