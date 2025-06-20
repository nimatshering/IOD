import { useState } from "react";
import { useUserContext } from "../context/UserContext";

export default function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  // destructure the context values passed via UserProvider
  const { currentUser, handleUpdateUser } = useUserContext();

  // alternative using the useContext hook directly, either works
  //const {currentUser, handleUpdateUser} = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail }); // context function
    }
  };
  {
    /* if the user is already logged in, show msg instead of form */
  }
  if (currentUser.email)
    return (
      <>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>
    );

  return (
    <>
      <div
        className="LoginForm componentBox"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label>Email:</label>
            <br />
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Password:</label>
            <br />
            <input
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>

          <button type="submit" style={{ padding: "0.5rem 1rem" }}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}
