const express = require("express");
const app = express();
const approuter = require("./routes/web");
const calculatorRoutes = require("./routes/calculatorRoutes");
const extraRoutes = require("./routes/extraRoutes");
// const cors = require("cors");
const port = 3000;
// Enable CORS for all routes
// app.use(cors());
app.use("/", approuter);
app.use("/calculator", calculatorRoutes);
app.use("/extra", extraRoutes);
//http://localhost:3000/extra/maxNum?max=20
//http://localhost:3000/extra/minNum?min=10&max=20

app.listen(port, () => {
  console.log(`Web server running at
http://localhost:${port}`);
});
