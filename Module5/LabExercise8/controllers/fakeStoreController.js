const axios = require("axios");

//get all the categories
const getCategories = async (req, res) => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching categories:", err.message);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

//get all the products
const getProducts = async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

module.exports = {
  getProducts,
  getCategories,
};
