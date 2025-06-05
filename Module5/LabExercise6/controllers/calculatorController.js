//add numbers
const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

//subtract numbers
const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = number1 - number2;
  console.log(result);
  res.status(200);
  res.json({ result: result });
};

//multiply numbers
const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = number1 * number2;
  console.log(result);
  res.status(200);
  res.json({ result: result });
};

//divide numbers
const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = number1 / number2;
  console.log(result);
  res.status(200);
  res.json({ result: result });
};
module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};
