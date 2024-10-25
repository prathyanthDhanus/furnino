import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import QuantityComponent from "../buttton/QuantityIncreaseButton";

const CartViewCard = ({
  imageSrc,
  productTitle,
  size,
  price,
  stockStatus,
  quantity,
  step,
  onQuantityChange,
  onDelete,
  onClick,
  hideCheck,  // Add a prop to control hiding the checkbox
  hideSize,   // Add a prop to control hiding the size
}) => {
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox

  const handleCheckboxChange = (e) => {
    e.stopPropagation(); // Stop event propagation
    setIsChecked((prev) => !prev); // Toggle checkbox state
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Stop event propagation
    onDelete(); // Call delete handler
  };

  return (
    <div className="grid grid-cols-8 gap-4 items-center border my-3 rounded-xl shadow-xl p-4  " onClick={onClick}>
      {/* Conditionally render Checkbox */}
      {!hideCheck && (
        <div className="col-span-1 text-xl hover:shadow-xl bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
      )}

      {/* Image */}
      <div className="col-span-1 " >
        <img src={imageSrc} alt="Product" className="object-cover" />
      </div>

      {/* Text/Content Section */}
      <div className="col-span-5 p-4 font-sansation font-regular" >
        <p className="font-sansation font-bold " >{productTitle}</p>
        
        {/* Conditionally render Size */}
        {!hideSize && <p className="text-sm "> size: {size}</p>}

        <p className="font-sansation font-bold text-xl">{price}</p>
        <p
          className={`text-2xl font-sansation font-bold ${
            stockStatus === "Out of Stock" ? "text-red-500" : "text-green-500"
          }`}
        >
          {stockStatus}
        </p>
        {/* Quantity Component */}
        <div onClick={(e) => e.stopPropagation() /* Prevent propagation for quantity changes */}>
          <QuantityComponent
            initialQuantity={quantity}
            step={step}
            onChange={onQuantityChange}
            className="w-1/2"
          />
        </div>
      </div>

      {/* Delete Icon */}
      <div
        className="col-span-1 text-xl cursor-pointer text-red-400 flex items-center justify-center"
        onClick={handleDeleteClick} // Prevent navigation on delete
      >
        <MdOutlineDeleteOutline />
      </div>
    </div>
  );
};

export default CartViewCard;
