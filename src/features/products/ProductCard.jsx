import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const ProductCard = React.memo(({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white/30 backdrop-blur-md border border-gray-400 rounded-2xl p-4 flex flex-col justify-between shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-400">
      
      {/* Product Image and Title */}
      <Link to={`/products/${product.id}`} className="flex-1">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 mx-auto object-contain mb-3 transition-transform duration-500 hover:scale-105"
        />
        <h3 className="text-md font-semibold text-gray-800 line-clamp-2">{product.title}</h3>
      </Link>

      {/* Price and Add to Cart */}
      <div className="mt-3">
        <p className="text-lg font-bold text-gray-900">${product.price}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full mt-2 bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 text-white py-2 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-400"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
});

export default ProductCard;
