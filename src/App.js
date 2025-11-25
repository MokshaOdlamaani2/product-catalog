import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./features/products/ProductDetails";
import CartPage from "./features/cart/CartPage";
import NotFound from "./pages/NotFound";
import './index.css';

const pastelBubbles = ["pastel-1", "pastel-2", "pastel-3", "pastel-4"];
const shapes = ["star", "triangle", "diamond"];

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden animated-bg">

      {/* Floating Pastel Bubbles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const size = Math.floor(Math.random() * 30) + 10;
          const left = Math.floor(Math.random() * 100);
          const duration = Math.random() * 6 + 4;
          const bubbleClass = pastelBubbles[Math.floor(Math.random() * pastelBubbles.length)];

          return (
            <div
              key={i}
              className={`flying-bubble ${bubbleClass}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                animationDuration: `${duration}s`,
              }}
            ></div>
          );
        })}

        {/* Flying shapes */}
        {[...Array(15)].map((_, i) => {
          const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
          const top = Math.floor(Math.random() * 80); // position vertically
          const duration = Math.random() * 8 + 5; // 5s-13s

          return (
            <div
              key={i}
              className={`flying-shape ${shapeType}`}
              style={{
                top: `${top}%`,
                animationDuration: `${duration}s`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Page Content */}
      <BrowserRouter>
        <Navbar />
        <div className="relative z-10 fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
