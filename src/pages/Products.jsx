import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setCategory } from "../features/products/productsSlice";
import ProductList from "../features/products/ProductList";
import useProducts from "../hooks/useProducts";

const Products = () => {
  useProducts();
  const dispatch = useDispatch();
  const { search, category } = useSelector((state) => state.products);

  // Generate flying bubbles
  const bubbles = Array.from({ length: 15 }, (_, i) => {
    const size = Math.random() * 20 + 20; // 20px to 40px
    const left = Math.random() * 100; // random horizontal position
    const delay = Math.random() * 10; // animation delay
    const duration = 5 + Math.random() * 10; // animation duration
    const colors = ["#ffe0e8", "#e6e6fa", "#d8bfd8", "#ddbeed"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div
        key={i}
        className="flying-bubble"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          backgroundColor: color,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });

  return (
    <div className="relative min-h-screen p-6 max-w-7xl mx-auto overflow-hidden animated-bg">
      
      {/* Flying bubbles */}
      {bubbles}

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 relative z-10">
        {/* Search Input */}
        <input
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="
            bg-[#ffe0e8]/60 border border-[#e6e6fa] 
            rounded-xl p-3 flex-1 shadow-md 
            placeholder-[#7A2B3C] text-[#330000] 
            focus:outline-none focus:ring-2 focus:ring-[#d8bfd8]
          "
          placeholder="Search products..."
        />

        {/* Category Select */}
        <select
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
          className="
            bg-[#e6e6fa]/60 border border-[#d8bfd8] 
            rounded-xl p-3 shadow-md text-[#4A3700] 
            focus:outline-none focus:ring-2 focus:ring-[#ddbeed]
          "
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="relative z-10">
        <ProductList />
      </div>

    </div>
  );
};

export default Products;
