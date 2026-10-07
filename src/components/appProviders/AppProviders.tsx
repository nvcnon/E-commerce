import type React from "react";
import { AuthenticateProvider } from "../../context/authenticateContext";
import { ShoppingCartProvider } from "../../context/ShoppingCartContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthenticateProvider>
      <ShoppingCartProvider>
        {children}
      </ShoppingCartProvider>
    </AuthenticateProvider>
  );
}