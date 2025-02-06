import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className=" bg-white rounded-xl p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <h2 className="text-xl font-bold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <div className="mt-4 flex justify-between">
        <Link to={`/product/${product.id}`} className="text-blue-600">
          View Details
        </Link>
        <button
          onClick={handleAddToCart}
          className=" bg-blue-600 text-white  px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
