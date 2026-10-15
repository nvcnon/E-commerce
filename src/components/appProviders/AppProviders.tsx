import type React from "react";
import { AuthenticateProvider } from "../../context/AuthenticateContext";
import { ShoppingCartProvider } from "../../context/ShoppingCartContext";
import { ThemeProvider } from "../../context/ThemeContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthenticateProvider>
      <ThemeProvider>
        <ShoppingCartProvider>{children}</ShoppingCartProvider>
      </ThemeProvider>
    </AuthenticateProvider>
  );
}
