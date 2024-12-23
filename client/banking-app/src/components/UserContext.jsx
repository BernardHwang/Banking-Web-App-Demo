import React, { createContext, useContext, useState } from 'react';

// Define the structure of user details
// Using PropTypes or a similar solution can be used to handle types in JSX/React
const UserContext = createContext(undefined);

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Handle login and set the user details
  const login = (userDetails) => {
    setUser(userDetails);
  };

  // Handle logout and clear user details
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
