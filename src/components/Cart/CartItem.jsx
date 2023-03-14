import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  decrementAction,
  removeAction,
} from "../../redux/AddToCart/cartActions";

const CartItem = ({ cart }) => {
  // Use Selector
  const products = useSelector(state => state.products);

  // Dispatch
  const dispatch = useDispatch();

  // Extract data from props
  const {
    productName,
    productCategory,
    productImage,
    productPrice,
    productQuantity,
    id,
    addCartQuantity,
  } = cart;

  // Increment cart quantity
  const incrementQuantity = productId => {
    const selectedProduct = products.find(product => product.id === productId);
    dispatch(addToCartAction(selectedProduct));
  };

  // Decrement cart quantity
  const decrementQuantity = id => {
    dispatch(decrementAction(id));
  };

  // Total price in cart
  const totalPrice = productPrice * addCartQuantity;

  // Remove cart item
  const removeCartItem = id => {
    dispatch(removeAction(id));
  };

  return (
    <div className='cartCard'>
      <div className='flex items-center col-span-6 space-x-6'>
        {/* <!-- cart image --> */}
        <img className='lws-cartImage' src={productImage} alt='product' />
        {/* <!-- cart item info --> */}
        <div className='space-y-2'>
          <h4 className='lws-cartName'>{productName}</h4>
          <p className='lws-cartCategory'>{productCategory}</p>
          <p>
            BDT <span className='lws-cartPrice'>{productPrice}</span>
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0'>
        {/* <!-- amount buttons --> */}
        <div className='flex items-center space-x-4'>
          <button
            onClick={() => incrementQuantity(id)}
            disabled={productQuantity <= addCartQuantity ? true : false}
            className='lws-incrementQuantity'>
            <i className='text-lg fa-solid fa-plus'></i>
          </button>
          <span className='lws-cartQuantity'>{addCartQuantity}</span>
          <button
            onClick={() => decrementQuantity(id)}
            disabled={0 >= addCartQuantity ? true : false}
            className='lws-decrementQuantity'>
            <i className='text-lg fa-solid fa-minus'></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className='text-lg font-bold'>
          BDT <span className='lws-calculatedPrice'>{totalPrice}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className='flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0'>
        <button
          className='lws-removeFromCart'
          onClick={() => removeCartItem(id)}>
          <i className='text-lg text-red-400 fa-solid fa-trash'></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
