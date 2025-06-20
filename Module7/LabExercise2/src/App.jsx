import "./App.css";
import BitcoinRates from "./components/BitcoinRates";
import BitcoinRatesReducer from "./components/BitcoinRatesReducer";

function App() {
  return (
    <>
      <div>
        <h1>Using useData - Custom Hook</h1>
        <BitcoinRates />
      </div>
      <div>
        <h1>Using useReducer - Custom Hook</h1>
        <BitcoinRatesReducer />
      </div>
    </>
  );
}

export default App;
