import { useState } from "react";

//Function to change Mood
function MoodChanger() {
  const [mood, setMood] = useState("😁 Happy");

  function handleChangeMood() {
    mood == "😁 Happy" ? setMood("🙁 Sad") : setMood("😁 Happy");
  }

  return (
    <>
      <h1>{mood}</h1>
      <button onClick={handleChangeMood}>Change Mood</button>
    </>
  );
}

export default MoodChanger;
