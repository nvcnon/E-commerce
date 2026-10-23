import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

interface CartContext {
  cartItem: CartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
}
interface CartProvider {
  children: React.ReactNode;
}
interface CartItem {
  id: number;
  qty: number;
}

const CartContext = createContext({} as CartContext);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProvider) {
  const [cartItem, setCartItem] = useLocalStorage<CartItem[]>("cartItem", []);

  function handleIncreaseProductQty(id: number) {
    return setCartItem((currentItem) => {
      let selectedItem = currentItem.find((item) => item.id === id);
      if (selectedItem == null) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          return item.id === id ? { ...item, qty: item.qty + 1 } : item;
        });
      }
    });
  }

  function handleDecreaseProductQty(id: number) {
    return setCartItem((currentItem) => {
      let selectedItem = currentItem.find((item) => item.id === id);
      if (selectedItem?.qty == 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          return item.id === id ? { ...item, qty: item.qty - 1 } : item;
        });
      }
    });
  }

  function getProductQty(id: number) {
    return cartItem.find((item) => item.id === id)?.qty || 0;
  }

  function handleRemoveProduct(id: number) {
    return setCartItem((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartItem,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
