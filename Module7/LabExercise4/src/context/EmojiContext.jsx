import React, { useState, useContext } from "react";

const EmojiContext = React.createContext();

// Custom provider component for this context.
// Use it in App.jsx like <EmojiProvider>...</EmojiProvider>
export const EmojiProvider = (props) => {
  // store the current user in state at the top level
  const [currentEmoji, setCurrentEmoji] = useState("😁 Happy");
  // sets emoji object in state, shared via context
  const handleUpdateEmoji = (newEmoji) => {
    setCurrentEmoji(newEmoji);
  };

  // 2. Provide the context.
  // The Provider component of any context (EmojiContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current emoji and an update function
  return (
    <EmojiContext.Provider value={{ currentEmoji, handleUpdateEmoji }}>
      {props.children}
    </EmojiContext.Provider>
  );
};
// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useEmojiContext = () => useContext(EmojiContext);
