import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQty } from "./cartSlice";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold text-purple-700">Your Cart</h1>
      {items.length === 0 && (
        <p className="text-gray-600 mt-4">Your cart is empty.</p>
      )}

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-white/70 backdrop-blur-md p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt=""
              className="h-24 w-24 object-contain rounded border"
            />

            <div className="flex-1">
              <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
              <p className="text-purple-600 font-bold mt-1">${item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) =>
                  dispatch(updateQty({ id: item.id, qty: Number(e.target.value) }))
                }
                className="border w-20 text-center p-1 rounded"
              />
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:text-red-600 transition"
              >
                Remove
              </button>
            </div>

            <p className="font-semibold text-gray-700">
              ${(item.price * item.qty).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {items.length > 0 && (
        <h2 className="text-2xl font-bold text-purple-700 mt-6 text-right">
          Total: ${total.toFixed(2)}
        </h2>
      )}
    </div>
  );
};

export default CartPage;
