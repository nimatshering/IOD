function calculate(op) {
  const number1 = Number(document.getElementById("num1").value);
  const number2 = Number(document.getElementById("num2").value);

  switch (op) {
    case "plus":
      add(number1, number2);
      break;
    case "minus":
      minus(number1, number2);
      break;
    case "multiply":
      multiply(number1, number2);
      break;
    case "divide":
      divide(number1, number2);
      break;
    default:
      document.getElementById("result").textContent = "Invalid operation";
  }
}

// Function to add 2 numbers
function add(num1, num2) {
  axios
    .get(`/calculator/add`, {
      params: {
        num1: num1,
        num2: num2,
      },
    })
    .then((response) => {
      document.getElementById("result").innerHTML = response.data.result;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Function to substract 2 numbers
function minus(num1, num2) {
  axios
    .get(`/calculator/subtract`, {
      params: {
        num1: num1,
        num2: num2,
      },
    })
    .then((response) => {
      document.getElementById("result").innerHTML = response.data.result;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Function to multiply 2 numbers
function multiply(num1, num2) {
  axios
    .get(`/calculator/multiply`, {
      params: {
        num1: num1,
        num2: num2,
      },
    })
    .then((response) => {
      document.getElementById("result").innerHTML = response.data.result;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Function to divide 2 numbers
function divide(num1, num2) {
  axios
    .get(`/calculator/divide`, {
      params: {
        num1: num1,
        num2: num2,
      },
    })
    .then((response) => {
      document.getElementById("result").innerHTML = response.data.result;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
// Function reset all the fileds
function reset() {
  document.getElementById("num1").value = 0;
  document.getElementById("num2").value = 0;
  document.getElementById("result").textContent = 0;
}
