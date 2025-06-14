import { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  // Utility to parse inputs and calculate
  const calculate = (operator) => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Invalid input - Enter only numbers");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res =
          num2 !== 0
            ? Math.round((num1 / num2) * 100) / 100
            : "Cannot divide by zero";
        break;
      default:
        res = "Unknown operation";
    }
    setResult(res);
  };

  // Clear input fields and result
  const handleClear = () => {
    setNumber1("");
    setNumber2("");
    setResult("");
  };

  return (
    <>
      <div className="card">Result: {result}</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="py-10">
          <label>Number 1</label>
          <input
            name="number1"
            type="text"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
        </div>
        <div className="my-10">
          <label>Number 2</label>
          <input
            name="number2"
            type="text"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </div>

        <div className="m-10 card">
          <div className="my-10 container">
            <button
              type="button"
              className="btn-green"
              onClick={() => calculate("+")}
            >
              +
            </button>
            <button
              type="button"
              className="btn-green"
              onClick={() => calculate("-")}
            >
              -
            </button>
            <button
              type="button"
              className="btn-green"
              onClick={() => calculate("/")}
            >
              /
            </button>
            <button
              type="button"
              className="btn-green"
              onClick={() => calculate("*")}
            >
              *
            </button>
          </div>
          <button type="button" className="btn-green" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </>
  );
}

export default Calculator;
