"use client";
import { createContext, useContext, useState } from "react";
// Create the context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleUpdateUser = (userData) => {
    setCurrentUser(userData);
  };

  return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export default UserContext;
