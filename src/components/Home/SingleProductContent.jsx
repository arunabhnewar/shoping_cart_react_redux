import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../redux/AddToCart/cartActions";

const SingleProductContent = ({ product }) => {
  // Use Selector
  const products = useSelector(state => state.products);
  const carts = useSelector(state => state.carts);
  console.log(carts);
  // console.log(products);

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
  } = product;

  // Add to cart handle function
  const addToCartHandler = productId => {
    const selectedProduct = products.find(product => product.id === productId);
    dispatch(addToCartAction(selectedProduct));
  };

  // Quantity update on product card
  const quantityUpdated =
    productQuantity - (carts?.find(cart => cart?.id === id)?.addQuantity || 0);

  return (
    <>
      {/*  product item  */}
      <div className='lws-productCard'>
        <img className='lws-productImage' src={productImage} alt='product' />
        <div className='p-4 space-y-2'>
          <h4 className='lws-productName'>{productName}</h4>
          <p className='lws-productCategory'>{productCategory}</p>
          <div className='flex items-center justify-between pb-2'>
            <p className='productPrice'>
              BDT <span className='lws-price'>{productPrice}</span>
            </p>
            <p className='productQuantity'>
              QTY <span className='lws-quantity'>{quantityUpdated}</span>
            </p>
          </div>
          <button
            onClick={() => addToCartHandler(id)}
            disabled={quantityUpdated ? false : true}
            className='lws-btnAddToCart'>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProductContent;
