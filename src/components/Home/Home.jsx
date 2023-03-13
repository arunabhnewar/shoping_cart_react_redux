import React from "react";
import ProductInputsForm from "./ProductInputsForm";
import ProductsContent from "./ProductsContent";

const Home = () => {
  return (
    <div className='py-16'>
      <div className='productWrapper'>
        <ProductsContent />
        <ProductInputsForm />
      </div>
    </div>
  );
};

export default Home;
