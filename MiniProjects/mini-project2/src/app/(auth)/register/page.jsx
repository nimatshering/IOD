"use client";
import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Avatar,
  Container,
  Paper,
} from "@mui/material";
import { useUserContext } from "../../../context/UserContext"; // use custom hook
import MuiBreadcrumbs from "../../../components/MuiBreadcrumbs";

export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlLstName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  const { currentUser, handleUpdateUser } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      handleUpdateUser({ email: userEmail });
    }
  };

  if (currentUser?.email) {
    return (
      <>
        <MuiBreadcrumbs />
        <Container maxWidth="md">
          <Typography variant="h5" sx={{ mt: 4 }}>
            Welcome to admin panel {currentUser.email}!
          </Typography>
          <Button
            variant="outlined"
            onClick={() => handleUpdateUser({})}
            sx={{ mt: 2 }}
          >
            Log Out
          </Button>
        </Container>
      </>
    );
  }

  return (
    <>
      <MuiBreadcrumbs text="Register" />
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          py: 10,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "40vw",
            padding: 4,
            mx: "auto",
            background: "#F5F5F5",
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
            <Avatar
              sx={{ bgcolor: "success.main", mb: 1, width: 80, height: 80 }}
            ></Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              margin="dense"
            />

            <TextField
              required
              fullWidth
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              margin="dense"
            />

            <TextField
              required
              fullWidth
              label="Enter Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              margin="dense"
            />
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              margin="dense"
              sx={{ mt: 2 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "green",
                "&:hover": { backgroundColor: "darkgreen" },
              }}
            >
              Register
            </Button>
          </form>

          {submitResult && (
            <Typography color="error" sx={{ mt: 2 }}>
              {submitResult}
            </Typography>
          )}
        </Paper>
      </Container>
    </>
  );
}
