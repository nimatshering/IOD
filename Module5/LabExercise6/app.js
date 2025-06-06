const express = require("express");
const app = express();
const port = 3000;
// map all routes to the express app
const calculatorRoutes = require("./routes/calculatorRoutes");
app.use("/calculator", calculatorRoutes);
app.use("/", express.static("public"));
// export the app
module.exports = app;
