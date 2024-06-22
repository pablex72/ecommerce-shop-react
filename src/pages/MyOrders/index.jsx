import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrdersCart from "../../Components/OrdersCard";

const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
  // console.log(context.order);
  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-4">
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      {context.order.map((order,index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCart
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
};

export default MyOrders;
