import React from "react";

export const CustomButton = ({ buttonText, className, onClick,type="button",disabled}) => {
  return (
    <div>
      <button
        className={`flex items-center border justify-center rounded-md  font-sansation font-regular ${className}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        <span className=" gap-2 p-3 ">{buttonText}</span>
      </button>
    </div>
  );
};

export default CustomButton;