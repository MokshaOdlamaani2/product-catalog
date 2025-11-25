import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-white/80 via-purple-50/70 to-white/80 rounded-xl shadow-xl flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="h-80 md:h-96 w-full md:w-1/2 object-contain rounded-lg border"
      />

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-purple-700">{product.title}</h1>
          <p className="text-gray-700 mt-3">{product.description}</p>
          <p className="text-2xl font-bold text-purple-600 mt-4">${product.price}</p>
          <p className="flex items-center gap-1 mt-2 text-yellow-500 font-semibold">
            {"⭐".repeat(Math.round(product.rating?.rate || 0))} ({product.rating?.count})
          </p>
        </div>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-6 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 font-semibold w-full md:w-auto transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
