import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import headingImage from "../../assets/images/Rectangle 1.png";
import CartViewCard from "../../components/card/CartViewCard";
import testImage from "../../assets/images/kids-room-banner.jpg";
import HeaderBanner from "../../components/banner/HeaderBanner";

const Wishlist = () => {
  const navigate = useNavigate();
  const handleQuantityChange = (newQuantity) => {
    console.log("Quantity changed to:", newQuantity);
  };

  const handleDelete = () => {
    console.log("Item deleted");
  };
  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="Wishlist"
        currentPage="Wishlist"
      />

      <div className="container mx-auto p-5 m-10">

      <CartViewCard
        imageSrc={testImage}
        productTitle="Sample Product"
        size="Medium"
        price="₹1200"
        stockStatus="Out of Stock"
        quantity={1}
        step={1}
        onQuantityChange={handleQuantityChange}
        onDelete={handleDelete}
      />
       </div>
    </>
  );
};

export default Wishlist;
