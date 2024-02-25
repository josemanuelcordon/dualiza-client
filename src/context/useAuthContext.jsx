import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState('');

  const login = (user) => {
    // Lógica de autenticación y configuración del usuario
    setUsername(user);
  };

  const logout = () => {
    // Lógica para cerrar sesión
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{ username, isLogged, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};
