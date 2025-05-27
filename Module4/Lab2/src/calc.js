function calculate(op) {
  const number1 = Number(document.getElementById("num1").value);
  const number2 = Number(document.getElementById("num2").value);
  let result = 0;
  if (op === "plus") {
    result = plus(number1, number2);
  } else if (op === "minus") {
    result = minus(number1, number2);
  } else if (op === "multiply") {
    result = multiply(number1, number2);
  } else if (op === "divide") {
    result = divide(number1, number2);
  }

  document.getElementById("numberDisplay").textContent = result;
}

// Function to add 2 numbers
function plus(a, b) {
  return a + b;
}

// Function to substract 2 numbers
function minus(a, b) {
  return a - b;
}

// Function to multiply 2 numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide 2 numbers
function divide(a, b) {
  result = a / b;
  return Math.round(result * 100) / 100;
}

// Function reset all the fileds
function reset() {
  document.getElementById("num1").value = 0;
  document.getElementById("num2").value = 0;
  document.getElementById("numberDisplay").textContent = 0;
}
