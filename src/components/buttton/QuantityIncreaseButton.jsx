import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityComponent = ({
  initialQuantity = 1,
  step = 1,
  onChange,
  className,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    const newQuantity = quantity + step;
    setQuantity(newQuantity);
    if (onChange) {
      onChange(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > step) {
      const newQuantity = quantity - step;
      setQuantity(newQuantity);
      if (onChange) {
        onChange(newQuantity);
      }
    }
  };

  return (
    <div
      className={`flex justify-center items-center gap-3 p-2 rounded-xl  ${className}`}
    >
      <div
        className="cursor-pointer text-xs bg-red-300 p-1 rounded-full text-custom-white"
        onClick={handleDecrement}
      >
        <FaMinus />
      </div>
      <p className="bg-gray-200  rounded-xl flex items-center p-1 w-[2.5rem] justify-center">
        {quantity}
      </p>
      <div
        className="cursor-pointer text-xs bg-green-500 p-1 rounded-full text-custom-white"
        onClick={handleIncrement}
      >
        <FaPlus />
      </div>
    </div>
  );
};

export default QuantityComponent;
