"use client";

import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useUserContext } from "../../context/UserContext"; // use custom hook

export default function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const [age, setAge] = useState(10);

  const { currentUser, handleUpdateUser } = useUserContext(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail });
    }
  };

  if (currentUser?.email) {
    return (
      <>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>
    );
  }

  return (
    <div
      className="LoginForm componentBox"
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      <h2 style={{ marginTop: "4rem", marginBottom: "4rem" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <TextField
            required
            id="outlined-required"
            label="Enter Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            fullWidth
            margin="dense"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <TextField
            type="password"
            label="Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
            fullWidth
            margin="dense"
          />
        </div>

        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>

      {submitResult && <p style={{ marginTop: "1rem" }}>{submitResult}</p>}
    </div>
  );
}
