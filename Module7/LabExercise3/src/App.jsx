import "./App.css";
import BitcoinRates from "./components/BitcoinRates";
import MoodChanger from "./components/MoodChanger";
import { EmojiProvider } from "./context/EmojiContext";

function App() {
  return (
    <>
      <EmojiProvider>
        <h1>useContext Hook</h1>
        <h2>Mood Changer Component - using Custom Hook</h2>
        <MoodChanger />
        <h2>BitcoinRates Component - using Custom Hook</h2>
        <BitcoinRates />
      </EmojiProvider>
    </>
  );
}

export default App;
