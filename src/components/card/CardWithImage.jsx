import React from "react";

const CardWithImage = ({ cardImages, cardAlt }) => {
  return (
    <>
      <img
        src={cardImages || "default-image-path.jpg"}
        alt={cardAlt || "Image"}
        className="transition-transform duration-300 ease-in-out transform hover:scale-110 max-w-full h-auto p-3 cursor-pointer"
      />
    </>
  );
};

export default CardWithImage;
