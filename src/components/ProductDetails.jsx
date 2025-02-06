import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-96 object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-2xl text-blue-600 my-4">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          <button
            onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
            className="bg-blue-600 text-white px-6 py-2 rounded mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
