
import React, { forwardRef } from "react";

const OTP_InputField = forwardRef(({ value, placeholder = "", onChange, onBlur, name , }, ref) => {
  return (
    <div className="w-full flex sm:text-sm md:text-sm lg:text-base items-center mt-2 p-3 border border-gray-300 rounded-lg focus-within:border-custom-yellow font-sansation font-regular ">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        maxLength="1" 
        className="border-none text-center outline-none w-full  text-xs  md:text-sm lg:text-sm xl:text-sm xxl:text-md"
        ref={ref}
      />
    </div>
  );
});

export default OTP_InputField;

