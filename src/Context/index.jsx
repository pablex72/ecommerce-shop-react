import React, { Children } from "react";
import { createContext } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  return <ShoppingCartContext>{children}</ShoppingCartContext>;
};
