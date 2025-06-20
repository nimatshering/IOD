import { useState } from "react";
import { useDataReducer } from "../hooks/useDataReducer";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRatesReducer() {
  const [currency, setCurrency] = useState(currencies[0]);

  // uses custom hook usig useReducer to load external data;
  const { loading, data, error } = useDataReducer(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );

  const price = data?.bitcoin?.[currency.toLowerCase()];

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>

      <label className="my-20">
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {currencies.map((curr) => (
            <option value={curr} key={curr}>
              {curr}
            </option>
          ))}
        </select>
      </label>

      <div className="display my-20">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <p>
            1 BTC = {price} {currency}
          </p>
        )}
      </div>
    </div>
  );
}

export default BitcoinRatesReducer;
