const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const result = number1 + number2;
  res.status(200);
  res.json({ result: result });
});

// new route for subtract two numbers
router.get("/subtract", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = number1 - number2;
  // console.log(result);
  res.status(200);
  res.json({ result: result });
});

// new route for multiplying two numbers
router.get("/multiply", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = number1 * number2;
  console.log(result);
  res.status(200);
  res.json({ result: result });
});

// new route for adding two numbers
router.get("/divide", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = parseFloat(number1 / number2.toFixed(2));
  console.log(result);
  res.status(200);
  res.json({ result: result });
});

module.exports = router;
