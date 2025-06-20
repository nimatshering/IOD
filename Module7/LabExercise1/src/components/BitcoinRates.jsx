import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    let ignore = false; // flag to allow ignoring of the fetch result
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((response) => response.json())
      .then((data) => {
        // only update state if the effect is still valid
        // ie. the dependency hasn't changed since the request
        if (!ignore) setPrice(data.bitcoin[currency.toLowerCase()]);
      });

    // cleanup function - runs when unmounted or dependencies change
    return () => {
      ignore = true;
      console.log("cleanup effect");
    };
  }, [currency]);

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
