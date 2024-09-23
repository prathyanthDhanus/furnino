import React from "react";
import { useNavigate } from "react-router-dom";
import headingImage from "../../assets/images/Rectangle 1.png";
import HeaderBanner from "../../components/banner/HeaderBanner";

const ProductComparison = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="Product Comparison"
        currentPage="Product Comparison"
      />
    </>
  );
};

export default ProductComparison;
