import BitcoinRates from "../components/BitcoinRates";

export default function BitcoinRatesPage() {
  return (
    <>
      <h3>BitcoinRates Component - using Custom Hook</h3>
      <div className="componentBox">
        <div className="my-10">
          <BitcoinRates />
        </div>
      </div>
    </>
  );
}
