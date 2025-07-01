const Calculator = require("../models/calculatorModel");
const calculator = new Calculator();

// Helper to parse input safely
const parseNumbers = (req) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid input: num1 and num2 must be numbers");
  }
  return [num1, num2];
};

// Add
const addNumbers = (req, res) => {
  try {
    const [num1, num2] = parseNumbers(req);
    const result = calculator.add(num1, num2);
    res.status(200).json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Subtract
const subtractNumbers = (req, res) => {
  try {
    const [num1, num2] = parseNumbers(req);
    const result = calculator.subtract(num1, num2);
    res.status(200).json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Multiply
const multiplyNumbers = (req, res) => {
  try {
    const [num1, num2] = parseNumbers(req);
    const result = calculator.multiply(num1, num2);
    res.status(200).json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Divide
const divideNumbers = (req, res) => {
  try {
    const [num1, num2] = parseNumbers(req);
    const result = calculator.divide(num1, num2);
    res.status(200).json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};
