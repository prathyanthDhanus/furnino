import React from "react";

const CustomCard = ({
  onClick,
  bgimage,
  discountPercentage,
  title,
  description,
  price,
  discountedPrice,
}) => {
  return (
    <>
      <div className=" w-[18rem] cursor-pointer" onClick={onClick}>
        <div
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "40vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {discountPercentage && (
            <div className="absolute top-3 right-3 bg-red-400 text-white rounded-full p-1 text-sm  font-sansation font-bold">
              {discountPercentage}%
            </div>
          )}
        </div>
        <div className="border-2 bg-gray-200 p-2 shadow-md">
          <h5 className="font-sansation font-bold ">{title}</h5>
          <p className="font-sansation font-regular text-gray-500 text-sm">{description}</p>
          <div className="flex items-center">
            <p className={`${discountPercentage ? "line-through font-sansation font-regular text-gray-500 text-sm" : ""} mr-2`}>
              {price}
            </p>
            <p className="font-sansation font-regular  text-sm">{discountedPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
