import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About ShoppyGlobe</h3>
            <p className="text-gray-300">
              Your one-stop destination for all your shopping needs. We provide
              quality products at competitive prices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="https://www.linkedin.com/in/babli-choudhary-3b1180160/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/bablichoudhary">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://babli-portfolio.netlify.app/">
                  <i className="fa-regular fa-user"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center p-4">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
