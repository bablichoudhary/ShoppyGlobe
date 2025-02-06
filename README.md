**e-commerce Website - ShoppyGlobe**
Welcome to Readers Retreat, a library website built with React, Vite, and Tailwind CSS. This project allows users to browse books by category, search for books by title or author, view book details, and add new books to the library.

**Features**
Home Page

Displays products grouped by all Food categories.

Each Product card includes:

Name

Price

Image

A View Details button to see more information about the Product.

A Add to Cart button to add product in Cart.

Includes a search bar to filter books by title or author.

Displays search results dynamically.

Cart Page:

Allows users to increase or decrease product quantity.

Allow user to delete cart Items.

Proceed to checkout button to visit the checkout page.

A continue Shopping button to go back to home page.

Product Details Page:

Displays detailed information about a selected Product.

Checkout Page:

Allow user to fill form for placing order and adding payment details.

Page Not Found:

A custom 404 page for undefined routes.

Includes a button to return to the home page.

Responsive Design:

Built with Tailwind CSS for a clean and responsive layout.

State Management with Redux:

Centralized state management for Products using Redux Toolkit.

Features like adding products and filtering products are handled by Redux.

**Installation and Setup**

**git clone** https://github.com/bablichoudhary/ShoppyGlobe.git
cd vite-project

**Install Dependencies:**
npm install

**Tailwind Integration**
npm install tailwindcss @tailwindcss/vite

**Configure the Vite plugin**
vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
plugins: [
tailwindcss(),
],
})

**Import Tailwind CSS**
index.css , App.css
@import "tailwindcss";

**Start the Development Server:**
npm run dev

**Open the Application:**
Visit http://localhost:5173 in your browser.

**Folder Structure**
|--src/
|-- components/
| |-- Header.jsx
| |-- Footer.jsx
| |-- Cart.jsx
| |-- CartItem.jsx
| |-- ProductItem.jsx
| |-- ProductList.jsx
| |-- ProductDetails.jsx
| |-- PageNotFound.jsx
| |-- Home.jsx
| |-- Checkout.jsx
| |-- main.jsx
| |-- App.jsx
|--hooks
| |--useProduct.jsx
|--store
| |--appStore.js
| |--cartSlice.js

**Acknowledgments**
Dummy Json API: For providing details of products.

Tailwind CSS: For making styling easy and efficient.

React Router: For enabling dynamic routing in the application.

Redux Toolkit: For simplifying state management.

**website is now live! Visit [https://shoppy-globe-blue.vercel.app/] to explore."**
