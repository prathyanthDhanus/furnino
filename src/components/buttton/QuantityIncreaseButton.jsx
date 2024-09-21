import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityComponent = ({ initialQuantity = 1, step = 1, onChange }) => {
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
    <div className="flex justify-center items-center gap-4 border-2 w-[5rem] p-2 rounded-xl hover:border-custom-yellow">
      <FaMinus className="cursor-pointer text-xs" onClick={handleDecrement} />
      <p>{quantity}</p>
      <FaPlus className="cursor-pointer text-xs" onClick={handleIncrement} />
    </div>
  );
};

export default QuantityComponent;
