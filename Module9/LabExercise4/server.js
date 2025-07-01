require("dotenv").config();

let dbConnect = require("./dbConnect");
const express = require("express");

// Create Express app
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

//home
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

//users
let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

//accounts
let accountRoutes = require("./routes/accountRoutes");
app.use("/api/accounts", accountRoutes);

// Set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
