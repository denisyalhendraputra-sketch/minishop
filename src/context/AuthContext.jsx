import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  function login(email, password) {
    const data = JSON.parse(localStorage.getItem("account"));

    if (data && data.email === email && data.password === password) {
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      return true;
    }

    return false;
  }

  function register( email, password) {
    const data = {
      email,
      password,
    };

    localStorage.setItem("account", JSON.stringify(data));
    return true;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}