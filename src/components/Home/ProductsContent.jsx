import React from "react";
import { useSelector } from "react-redux";
import SingleProductContent from "./SingleProductContent";

const ProductsContent = () => {
  //Extract State from root reducer
  const products = useSelector(state => state.products);
  // console.log(products);

  return (
    <>
      {products.length > 0 ? (
        <div className='productContainer' id='lws-productContainer'>
          {products.map(product => (
            <SingleProductContent product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <h1>There is no product.</h1>
      )}
    </>
  );
};

export default ProductsContent;
