import useCartState from "@/hooks/useCartState";
import type { CartStateType, CartType } from "@/types/index";
import React, { createContext, useContext } from "react";

const CartContext = createContext<CartStateType | null>(null);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { state, dispatch } = useCartState();
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("Cart Context avaible only inside provider");
  }

  return ctx;
};
