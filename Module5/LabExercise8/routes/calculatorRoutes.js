const express = require("express");
const calculatorController = require("../controllers/calculatorController");
const router = express.Router();

//add numers
router.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});

//subtract numers
router.get("/subtract", (req, res) => {
  calculatorController.subtractNumbers(req, res);
});

//multiply numers
router.get("/multiply", (req, res) => {
  calculatorController.multiplyNumbers(req, res);
});

//Divide numers
router.get("/divide", (req, res) => {
  calculatorController.divideNumbers(req, res);
});

module.exports = router;
