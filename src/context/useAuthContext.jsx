import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (username, isAdmin) => {
    setUsername(username);
    setIsAdmin(isAdmin);
  };

  const logout = () => {
    setUsername("");
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider
      value={{ username, setUsername, isAdmin, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
