import React, { useState } from "react";
import headingImage from "../../assets/images/Rectangle 1.png";
import { useNavigate, useParams } from "react-router-dom";
import CustomCard from "../../components/card/CustomCard";
import HeaderBanner from "../../components/banner/HeaderBanner";
import { useGetProductsCategoryWise } from "../../services/product";

const Shopping = () => {
  const { categoryId } = useParams();
  const { data: products, isSuccess: isProductsSuccess } =
    useGetProductsCategoryWise(categoryId);

  const navigate = useNavigate();

  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="Shop"
        currentPage="Shop"
      />
      {isProductsSuccess && (
        <>
          <div className=" container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-items-center m-10 mx-auto">
            {products?.map((product) => {
              const trimmedDescription =
                product?.description.split(".")[0] + ".";
              const trimmedInfo = product?.info.split(".")[0] + ".";

              return (
                <CustomCard
                  key={product?._id}
                  bgimage={product?.images[0]}
                  discountPercentage={product?.discountPercentage}
                  title={product?.name}
                  description={trimmedDescription}
                  info={trimmedInfo}
                  price={product?.price}
                  discountedPrice={product?.discountPrice}
                  onClick={() => navigate(`/view/product/${product?._id}`)}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Shopping;
