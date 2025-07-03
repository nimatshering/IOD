require("dotenv").config();

let dbConnect = require("./dbConnect");
const express = require("express");
// Create Express app
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

//Swagger
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//home
app.use("/", express.static("public"));
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to my MongoDB application." });
// });

//accounts
let accountRoutes = require("./routes/accountRoutes");
app.use("/api/accounts", accountRoutes);

// Set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server runnung at http://localhost:${PORT}`);
});
