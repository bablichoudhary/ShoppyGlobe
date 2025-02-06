import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ProductList = React.lazy(() => import("./components/ProductList"));
const ProductDetail = React.lazy(() => import("./components/ProductDetails"));
const Cart = React.lazy(() => import("./components/Cart"));
const Checkout = React.lazy(() => import("./components/Checkout"));
const NotFound = React.lazy(() => import("./components/NotFound"));

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading...</p>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
