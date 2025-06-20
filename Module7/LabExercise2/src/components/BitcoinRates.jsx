import { useState } from "react";
import { useData } from "../hooks/useData";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);

  // uses custom hook to load external data;
  const data = useData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );
  const price = data ? data.bitcoin[currency.toLowerCase()] : "not found";

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label className="my-20">
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      <div className="display my-20">
        1 BTC = {price} {currency}
      </div>
    </div>
  );
}

export default BitcoinRates;
