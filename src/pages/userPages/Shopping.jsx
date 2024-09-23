import React, { useState } from "react";
import headingImage from "../../assets/images/Rectangle 1.png";
import { useNavigate } from "react-router-dom";
import studyTable from "../../assets/images/view-3d-school-desk (1).jpg";
import localImage from "../../assets/images/143117.jpg";
import CustomCard from "../../components/card/CustomCard";
import HeaderBanner from "../../components/banner/HeaderBanner";

const Shopping = () => {
  const shoppingCategory = [
    { title: "Sofa Sets", image: studyTable, id: 1 },
    { title: "Beds", image: studyTable, id: 2 },
    { title: "Dinning Table Set", image: studyTable, id: 1 },
    { title: "Coffee Tables", image: studyTable, id: 1 },
    { title: "Book Shelfs", image: studyTable, id: 1 },
    { title: "Book Shelfs", image: studyTable, id: 2 },
    { title: "Book Shelfs", image: studyTable, id: 2 },
    { title: "Book Shelfs", image: studyTable, id: 2 },
  ];

  const products = [
    {
      bgimage: localImage,
      discountPercentage: 20,
      title: "Dining Table",
      description: "Stylish wooden dining table",
      price: "$200",
      discountedPrice: "$160",
    },
    {
      bgimage: localImage,
      discountPercentage: 15,
      title: "Sofa Set",
      description: "Comfortable modern sofa",
      price: "$500",
      discountedPrice: "$425",
    },
    {
      bgimage: localImage,
      title: "Coffee Table",
      description: "Minimalist coffee table",
      // price: "$100",
      discountedPrice: "$100",
    },
    {
      bgimage: localImage,
      title: "Coffee Table",
      description: "Minimalist coffee table",
      // price: "$100",
      discountedPrice: "$100",
    },
  ];

  const navigate = useNavigate();
  const [categoryClick, setCategoryClick] = useState(false);

  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="Shop"
        currentPage="Shop"
      />
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-5 ">
        {shoppingCategory?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center relative my-3"
          >
            {/* Round div */}
            <div className=" w-64 h-64 bg-gradient-to-r from-white to-custom-yellow rounded-[60%] shadow-lg overflow-hidden hover:cursor-pointer flex justify-center items-center">
              <img
                src={item.image}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-2 bg-gray-200 flex justify-center items-center rounded-md hover:cursor-pointer shadow-md">
              <p className="text-center font-sansation font-bold text- px-5 ">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-items-center">
        {products.map((product, index) => (
          <CustomCard
            key={index}
            bgimage={product.bgimage}
            discountPercentage={product.discountPercentage}
            title={product.title}
            description={product.description}
            price={product.price}
            discountedPrice={product.discountedPrice}
            onClick={() => navigate("/view/product")}
          />
        ))}
      </div>
    </>
  );
};

export default Shopping;
