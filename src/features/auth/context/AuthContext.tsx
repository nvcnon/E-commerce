import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/api";

interface AuthContext {
  isLogin: boolean;
  handleLogin: (username: string, password: string) => Promise<string | null>;
  handleLogOut: () => void;
}
interface AuthProvider {
  children: React.ReactNode;
}

const authContext = createContext({} as AuthContext);

export function useAuthContext() {
  return useContext(authContext);
}

export function AuthProvider({ children }: AuthProvider) {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(
    username: string,
    password: string,
  ): Promise<string | null> {
    try {
      const data = await login(username);

      if (data.length === 0) {
        return "نام کاربری اشتباه است";
      }

      if (data[0].password !== password) {
        return "رمز عبور اشتباه است";
      }

      localStorage.setItem("token", "demo-token");
      setIsLogin(true);
      navigate("/");

      return null;
    } catch (error) {
      console.error("Login failed:", error);
      return "خطایی رخ داد. لطفاً دوباره تلاش کنید.";
    }
  }

  function handleLogOut() {
    setIsLogin(false);
    navigate("/login");
    localStorage.removeItem("token");
  }

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <authContext.Provider value={{ isLogin, handleLogin, handleLogOut }}>
      {children}
    </authContext.Provider>
  );
}
