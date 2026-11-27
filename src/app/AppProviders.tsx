import type { ReactNode } from "react";
import { AuthProvider } from "../features/auth/context/AuthContext";
import { CartProvider } from "../features/cart/context/CartContext";
import { ThemeProvider } from "../features/theme/context/ThemeContext";

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default AppProviders;
