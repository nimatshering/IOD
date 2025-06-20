import "../App.css";
import { useEmojiContext } from "../context/EmojiContext";
//Function to change Mood
function MoodChanger() {
  const { currentEmoji, handleUpdateEmoji } = useEmojiContext();

  function handleChangeMood() {
    currentEmoji === "😁 Happy"
      ? handleUpdateEmoji("🙁 Sad")
      : handleUpdateEmoji("😁 Happy");
  }

  return (
    <>
      <div className="componentBox">
        <h2>{currentEmoji}</h2>
        <button className="btn-blue" onClick={handleChangeMood}>
          Change Mood
        </button>
      </div>
    </>
  );
}

export default MoodChanger;
