import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");

  const login = (user) => {
    setUsername(user);
  };

  const logout = () => {
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{ username, setUsername, isLogged, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
