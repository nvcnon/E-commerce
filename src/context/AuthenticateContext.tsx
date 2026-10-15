import React, { createContext, useContext, useEffect, useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

interface AuthenticateProvider {
  children: React.ReactNode;
}

interface AuthenticateContext {
  isLogin: boolean;
  handleLogin: (username: string, password: string) => void;
  handleLogOut: () => void;
}

const AuthenticateContext = createContext({} as AuthenticateContext);

export function useAuthenticateContext() {
  return useContext(AuthenticateContext);
}

export function AuthenticateProvider({ children }: AuthenticateProvider) {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(username: string, password: string) {
    try {
      const data = await login(username);

      if (data.length === 0) {
        console.log("نام کاربری اشتباه است");
        return;
      }

      if (data[0].password !== password) {
        console.log("رمز عبور اشتباه است");
        return;
      }

      // Demo authentication: persist a local token after successful login.
      localStorage.setItem("token", "demo-token");
      setIsLogin(true);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
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
    <AuthenticateContext.Provider
      value={{ isLogin, handleLogin, handleLogOut }}
    >
      {children}
    </AuthenticateContext.Provider>
  );
}
