import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Basic validation rules
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postalCode.trim())
      newErrors.postalCode = "Postal code is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.cardName.trim())
      newErrors.cardName = "Name on card is required";
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Invalid card number";
    }
    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = "Expiry date is required";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Invalid expiry date (MM/YY)";
    }
    if (!formData.cvv.trim()) {
      newErrors.cvv = "CVV is required";
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = "Invalid CVV";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically process the payment and order
      alert("Order placed successfully!");
      navigate("/");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded ${
                        errors.city ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded ${
                        errors.postalCode ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.postalCode && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.postalCode}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${
                      errors.country ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.country}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${
                      errors.cardName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.cardName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.cardName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    className={`w-full p-2 border rounded ${
                      errors.cardNumber ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.cardNumber}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className={`w-full p-2 border rounded ${
                        errors.expiryDate ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.expiryDate && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.expiryDate}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      className={`w-full p-2 border rounded ${
                        errors.cvv ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.cvv && (
                      <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Place Order (${total.toFixed(2)})
            </button>
          </form>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow sticky top-4">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold text-lg">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
