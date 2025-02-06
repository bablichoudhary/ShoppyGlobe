import React, { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container bg-slate-100 mx-auto p-4 ">
      <input
        type="text"
        placeholder="Search products..."
        className="block mx-auto w-3/4 sm:w-1/2 md:w-1/3 p-2 border-2 border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400  text-center text-sm placeholder-black "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
