require("dotenv").config();

let dbConnect = require("./dbConnect");
const express = require("express");

// Create Express app
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

//Home
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

//users
let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

//posts
let postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

//comments
let commentRoutes = require("./routes/commentRoutes");
app.use("/api/comments", commentRoutes);

//likes
let likeRoutes = require("./routes/likeRoutes");
app.use("/api/likes", likeRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
