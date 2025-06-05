const express = require("express");
const app = express();
const approuter = require("./routes/web");
const calculatorRoutes = require("./routes/calculatorRoutes");
const cors = require("cors");
const port = 3000;

// Enable CORS for all routes
app.use(cors());
app.use("/", approuter);
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Web server app listening at
http://localhost:${port}`);
});
