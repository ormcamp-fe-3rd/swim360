import { createContext, useState } from "react";

interface CartContextValue {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  cartFetchTrigger: number;
  setCartFetchTrigger: React.Dispatch<React.SetStateAction<number>>;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined,
);

function CartContextProvider({ children }: CartProviderProps) {
  const [cartCount, setCartCount] = useState(0);
  const [cartFetchTrigger, setCartFetchTrigger] = useState(0);

  const CartContextValue = {
    cartCount,
    setCartCount,
    cartFetchTrigger,
    setCartFetchTrigger,
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
