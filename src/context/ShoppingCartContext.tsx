import type React from "react";
import { createContext, useContext} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface CartItem {
  id: number;
  qty: number;
}
interface ShoppingCartContext {
  cartItem: CartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty: number;
}
interface ShoppingCartProvider {
  children: React.ReactNode;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  const [cartItem, setCartItem] = useLocalStorage<CartItem[]>('cartItem', []);
  
  function handleIncreaseProductQty(id: number) {
     setCartItem((currentItem) => {
      let selectedItem = currentItem.find((item) => item.id === id);
      if (selectedItem == null) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function handleDecreaseProductQty(id: number) {
    return setCartItem((currentItem) => {
      let selectedItem = currentItem.find((item) => item.id === id);
      if (selectedItem?.qty === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function getProductQty(id: number) {
    return cartItem.find((item) => item.id === id)?.qty || 0;
  }

  function handleRemoveProduct(id: number) {
    setCartItem((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  const cartQty = cartItem.reduce((totalQty, item) => totalQty + item.qty, 0);


  return (
    <ShoppingCartContext.Provider
      value={{
        cartItem,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
