import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ShoppyGlobe
        </Link>
        <Link to="/cart" className="flex items-center">
          <span className="mr-2">Cart</span>
          <div className="flex flex-col-reverse">
            <span>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping text-right  text-xl"></i>
              </Link>
            </span>
            <span className=" text-white px-2">{itemCount}</span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
