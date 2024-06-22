import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const OrdersCart = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center border border-black p-4 rounded-lg mb-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01.02.23</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-balck-500 cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCart;
