import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Brand or Text */}
      <h1 className="text-4xl font-mono  tracking-widest mb-6 text-white/90">
        Please Wait
      </h1>

      {/* Glowing dots animation */}
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-red-500  rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-4 h-4 bg-green-400 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
