import React from "react";
import BillingDetails from "./BillingDetails";
import CartList from "./CartList";

const Cart = () => {
  return (
    <div className='py-16'>
      <div className='container 2xl:px-8 px-2 mx-auto'>
        <h2 className='mb-8 text-xl font-bold'>Shopping Cart</h2>
        <div className='cartListContainer'>
          <CartList />
          <BillingDetails />
        </div>
      </div>
    </div>
  );
};

export default Cart;
