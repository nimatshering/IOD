const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("../swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// map all routes to the express app
const fakeStoreRoutes = require("./fakeStoreRoutes");
app.use("/", fakeStoreRoutes);

module.exports = app;
