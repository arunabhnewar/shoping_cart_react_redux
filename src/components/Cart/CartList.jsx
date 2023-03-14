import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  //Extract State from root reducer
  const carts = useSelector(state => state.carts);

  return (
    <>
      {carts.length > 0 ? (
        <div className='space-y-6'>
          {carts.map(cart => (
            <CartItem cart={cart} key={cart.id} />
          ))}
        </div>
      ) : (
        <h1>There is no item added till now.</h1>
      )}
    </>
  );
};

export default CartList;
