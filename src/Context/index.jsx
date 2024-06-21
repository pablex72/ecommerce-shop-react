import React, { useState } from "react";
import { createContext } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //Shopping cart - increment quantity
  const [count, setCount] = useState(0);

  // Product detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };


  // product detail * show product
  const [productToShow, setProductToShow] = useState({});


  console.log("count  ", count);
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
