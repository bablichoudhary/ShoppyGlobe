import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center bg-white shadow-lg rounded-2xl p-5 max-w-xl mx-auto border border-gray-200">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-24 h-24 object-cover rounded-lg border border-gray-300"
      />

      <div className="ml-5 flex-grow">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-500 font-medium">${item.price}</p>

        <div className="flex items-center mt-3 space-x-3">
          <button
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity - 1 })
              )
            }
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-lg"
          >
            −
          </button>
          <span className="text-lg font-semibold">{item.quantity}</span>
          <button
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity + 1 })
              )
            }
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-lg"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
