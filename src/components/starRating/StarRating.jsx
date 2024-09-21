import React, { useState } from "react";
import { CiStar } from "react-icons/ci"; // Outlined star
import { FaStar } from "react-icons/fa6"; // Filled star

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0); // Default rating is 0

  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={starValue}
            onClick={() => setRating(starValue)}
            className="focus:outline-none"
          >
            {/* Conditionally render filled star or outlined star */}
            {starValue <= rating ? (
              <FaStar size={24} className="text-yellow-400" />
            ) : (
              <CiStar size={24} className="text-gray-300" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
