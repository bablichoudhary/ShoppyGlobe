import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Your cart is empty
          </h2>
          <Link
            to="/"
            className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Shopping Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-8 border-t pt-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-xl font-bold text-gray-700 mb-4 md:mb-0">
            Total: <span className="text-blue-500">${total.toFixed(2)}</span>
          </p>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-all"
            >
              Continue Shopping
            </Link>
            <Link
              to="/checkout"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
