import "./App.css";
import Greetings from "./components/Greetings";

function App() {
  return (
    <>
      <Greetings></Greetings>
      <Greetings name="John"> My Children</Greetings>
    </>
  );
}

export default App;
