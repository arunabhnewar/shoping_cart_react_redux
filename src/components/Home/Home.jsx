import React from "react";
import InputsForm from "./inputsForm";
import ProductsContent from "./ProductsContent";

const Home = () => {
  return (
    <div className='py-16'>
      <div className='productWrapper'>
        <ProductsContent />
        <InputsForm />
      </div>
    </div>
  );
};

export default Home;
