import { useState } from "react";
import { useData } from "../hooks/useData";
import { useEmojiContext } from "../context/EmojiContext";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { currentEmoji, handleUpdateEmoji } = useEmojiContext();

  function handleChangeMood() {
    currentEmoji === "😁 Happy"
      ? handleUpdateEmoji("🙁 Sad")
      : handleUpdateEmoji("😁 Happy");
  }

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
      <h2>{currentEmoji}</h2>
      <button className="btn-blue" onClick={handleChangeMood}>
        Change Mood
      </button>
    </div>
  );
}

export default BitcoinRates;
