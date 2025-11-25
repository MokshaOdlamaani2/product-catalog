import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-pink-500 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold hover:scale-105 transition-transform duration-300"
        >
          🛒 MyStore
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/products"
            className="hover:text-yellow-300 hover:underline transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="relative hover:text-yellow-300 hover:underline transition-colors duration-200"
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
