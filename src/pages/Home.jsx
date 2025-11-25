import React from "react";

const Home = () => {
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg">
      {/* Flying bubbles */}
      {bubbles}

      {/* Welcome Message */}
      <h1 className="fade-in text-4xl md:text-6xl font-extrabold text-[#330000] drop-shadow-lg">
        Welcome to the Product Store
      </h1>
    </div>
  );
};

export default Home;
