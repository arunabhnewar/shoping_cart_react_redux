import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  // Use Selector
  const carts = useSelector(state => state.carts);

  let totalItem = 0;

  for (let product of carts) {
    totalItem += product.addQuantity;
  }

  return (
    <nav className='bg-[#171C2A] py-4'>
      <div className='navBar'>
        <Link to='/'>
          <img src={logoImg} alt='LWS' className='max-w-[140px]' />
        </Link>

        <div className='flex gap-4'>
          <Link to='/' className='navHome' id='lws-home'>
            {" "}
            Home{" "}
          </Link>
          <Link to='/cart' className='navCart' id='lws-cart'>
            <i className='text-xl fa-sharp fa-solid fa-bag-shopping'></i>
            <span id='lws-totalCart'>{totalItem}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
