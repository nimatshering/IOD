const express = require("express");
const axios = require("axios");
const fakeStoreController = require("../controllers/fakeStoreController");
const router = express.Router();

router.use(express.static("public"));
// API proxy endpoint for categories
router.get("/api/categories", (req, res) => {
  fakeStoreController.getCategories(req, res);
});

// API proxy endpoint for products
router.get("/api/products", (req, res) => {
  fakeStoreController.getProducts(req, res);
});

module.exports = router;
