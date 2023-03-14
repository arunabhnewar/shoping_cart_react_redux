import React from "react";
import AddProductForm from "./AddProductForm";
import ProductsContent from "./ProductsContent";

const Home = () => {
  return (
    <div className='py-16'>
      <div className='productWrapper'>
        <ProductsContent />
        {/* <ProductInputsForm /> */}
        <AddProductForm />
      </div>
    </div>
  );
};

export default Home;
