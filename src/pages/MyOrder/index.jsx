import React from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCart from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const context = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname

  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
  // console.log(index)
  if(index==='last'){
    index = context.order?.length-1
  }
  const lastOrder = context.order?.[index];

  // console.log(lastOrder?.products[0]?.images[0]);

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-7">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>MyOrder</h1>
      </div>
      <div className="flex flex-col w-80">
        {lastOrder && lastOrder.products ? (
          lastOrder.products.map((product) => (
            <OrderCart
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
            />
          ))
        ) : (
          <p>No hay productos en la última orden.</p>
        )}
      </div>
    </Layout>
  );
};

export default MyOrder;
