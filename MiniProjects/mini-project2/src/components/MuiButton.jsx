import React from "react";
import { Stack, Button, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function MuiButton() {
  return (
    <Stack spacing={4}>
      <Stack spacing={4} direction={"row"}>
        <Button variant="contained" color="info" size="small">
          Text
        </Button>
        <Button variant="contained" color="success" size="medium">
          Contained
        </Button>
        <Button variant="outlined" color="success" size="large">
          Outlined
        </Button>
      </Stack>

      <Stack spacing={4} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>

      <Stack direction={"row"}>
        <ButtonGroup
          variant="contained"
          orientation="horizontal"
          color="success"
        >
          <Button>Menu1</Button>
          <Button>Menu2</Button>
          <Button>Menu3</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
