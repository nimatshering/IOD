import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Calculator</h1>
      <Calculator></Calculator>
    </>
  );
}

export default App;
