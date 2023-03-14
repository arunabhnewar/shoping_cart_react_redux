import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addToDBAction } from "../../redux/AddToDB/dbActions";

const AddProductForm = () => {
  // Dispatch
  const dispatch = useDispatch();

  // use state
  const [productInfo, setProductInfo] = useState({
    productName: "",
    productCategory: "",
    productImage: "",
    productPrice: 0,
    productQuantity: 0,
    addCartQuantity: 0,
  });

  // Input data handle function
  const inputsDataHandle = e => {
    let value = e.target.value;
    // console.log(value);
    if (e.target.name === "productName") {
      setProductInfo({ ...productInfo, productName: value });
    } else if (e.target.name === "productCategory") {
      setProductInfo({ ...productInfo, productCategory: value });
    } else if (e.target.name === "productImage") {
      setProductInfo({ ...productInfo, productImage: value });
    } else if (e.target.name === "productPrice") {
      setProductInfo({ ...productInfo, productPrice: Number(value) });
    } else if (e.target.name === "productQuantity") {
      setProductInfo({ ...productInfo, productQuantity: Number(value) });
    }
  };

  // OnSubmit Function
  const dataSubmitHandle = e => {
    e.preventDefault();
    dispatch(addToDBAction({ ...productInfo, id: v4() }));
    resetData();
  };

  // Reset Form after added product
  function resetData() {
    setProductInfo({
      ...productInfo,
      productName: "",
      productCategory: "",
      productImage: "",
      productPrice: 0,
      productQuantity: 0,
      addCartQuantity: 0,
    });
  }

  // Extract data from ticket info state
  const {
    productName,
    productCategory,
    productImage,
    productPrice,
    productQuantity,
  } = productInfo;

  return (
    <div>
      <div className='formContainer'>
        <h4 className='formTitle'>Add New Product</h4>
        <form
          className='space-y-4 text-[#534F4F]'
          id='lws-addProductForm'
          onSubmit={dataSubmitHandle}>
          {/*  product name  */}
          <div className='space-y-2'>
            <label htmlFor='lws-inputName'>Product Name</label>
            <input
              className='addProductInput'
              id='lws-inputName'
              type='text'
              name='productName'
              value={productName}
              onChange={inputsDataHandle}
              required
            />
          </div>
          {/*  product category  */}
          <div className='space-y-2'>
            <label htmlFor='lws-inputCategory'>Category</label>
            <input
              className='addProductInput'
              id='lws-inputCategory'
              type='text'
              name='productCategory'
              value={productCategory}
              onChange={inputsDataHandle}
              required
            />
          </div>
          {/*  product image url */}
          <div className='space-y-2'>
            <label htmlFor='lws-inputImage'>Image Url</label>
            <input
              className='addProductInput'
              id='lws-inputImage'
              type='text'
              name='productImage'
              value={productImage}
              onChange={inputsDataHandle}
              required
            />
          </div>
          {/*  price & quantity container */}
          <div className='grid grid-cols-2 gap-8 pb-4'>
            {/* price */}
            <div className='space-y-2'>
              <label htmlFor='ws-inputPrice'>Price</label>
              <input
                className='addProductInput'
                type='number'
                id='lws-inputPrice'
                name='productPrice'
                value={productPrice}
                onChange={inputsDataHandle}
                required
              />
            </div>
            {/* quantity  */}
            <div className='space-y-2'>
              <label htmlFor='lws-inputQuantity'>Quantity</label>
              <input
                className='addProductInput'
                type='number'
                id='lws-inputQuantity'
                name='productQuantity'
                value={productQuantity}
                onChange={inputsDataHandle}
                required
              />
            </div>
          </div>
          {/*  submit button  */}
          <button type='submit' id='lws-inputSubmit' className='submit'>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
