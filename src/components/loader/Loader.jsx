import React, { useEffect, useState } from "react";


const furnitureImages = [
  "https://cdn-icons-png.flaticon.com/512/2361/2361657.png",
  "https://cdn-icons-png.flaticon.com/512/1663/1663945.png",
  "https://cdn-icons-png.flaticon.com/512/2271/2271478.png",
];

const FurnitureLoader = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === furnitureImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Loader Title */}
      <h2 className="text-2xl font-sansation font-bold text-gray-700 mb-4">
         Furnino
      </h2>

      {/* Image carousel */}
      <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
        <img
          src={furnitureImages[currentImageIndex]}
          alt="Furniture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-lg text-gray-600 animate-pulse font-sansation font-regular">Please wait...</p>

      {/* Optional loader bar or spinner */}
      <div className="w-24 h-2 bg-gray-300 rounded-full mt-4 overflow-hidden">
        <div className="h-full bg-yellow-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default FurnitureLoader;
