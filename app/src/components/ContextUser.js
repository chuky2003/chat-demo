// UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false)

  const login = (username) => {
    setUser(username);
    setLogged(true)
  };

  const logout = () => {
    setUser(null);
    setLogged(false)
  };

  return (
    <UserContext.Provider value={{ user, login, logout, logged, room: 0 }}>
      {children}
    </UserContext.Provider>
  );
};
