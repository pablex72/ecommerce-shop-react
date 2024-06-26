import { XMarkIcon } from "@heroicons/react/24/solid";

import React from "react";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  //   console.log("PRODUCT TO SHOW:", context.productToShow);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex flex-col fixed right-0 border border-black rounded-lg  bg-green-50`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-balck-500 cursor-pointer"
            onClick={() => context.closeProductDetail()}
          />
        </div>
      </div>
      <div className="flex flex-col mx-3 overflow-y-auto">
        <figure className="px-6">
          <img
            className="w-full h-full rounded-lg"
            src={context.productToShow.images}
            alt={context.productToShow.title}
          />
        </figure>
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2">
            ${context.productToShow.price}
          </span>
          <span className="font-medium text-md">
            {context.productToShow.title}
          </span>
          <span className="font-light text-sm">
            {context.productToShow.description}
          </span>
        </p>
      </div>
    </aside>
  );
};

export default ProductDetail;
