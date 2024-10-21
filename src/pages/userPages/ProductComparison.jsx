import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import headingImage from "../../assets/images/Rectangle 1.png";
import HeaderBanner from "../../components/banner/HeaderBanner";
import { useGetProductById } from "../../services/product";
import { FaStar } from "react-icons/fa";
import { useGetProductsCategoryWise } from "../../services/product";
import CustomCard from "../../components/card/CustomCard";
import Axios from "../../axios/axiosInstance";

const ProductComparison = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  // Fetch the primary product based on productId from the URL
  const { data: product, isSuccess } = useGetProductById(productId);
  const [secondProductData, setSecondProductData] = useState(null); // State to store second product details
  const [secondProductId, setSecondProductId] = useState(null); // Track second product ID
  const {
    name,
    description,
    images = [],
    price,
    stock,
    colour,
    info,
    additionalInfo,
    rating,
    seatingCapacity,
    discountPercentage,
    categoryId,
  } = product || {};

  // Fetch related products based on the category of the first product
  const { data: products, isSuccess: isProductsSuccess } = useGetProductsCategoryWise(categoryId);

  // Fetch second product data when secondProductId is set
  useEffect(() => {
    if (secondProductId) {
      // Fetch the second product using the same hook but with the second product's ID
      const fetchSecondProduct = async () => {
        try {
          const response = await Axios.get(`/api/product/user/${secondProductId}`);
         if(response?.status===200){
          setSecondProductData(response.data?.data);
         }
          setSecondProductData(secondProduct?.data); // Store the second product's data in the state
        } catch (error) {
          console.error("Failed to fetch second product", error);
        }
      };
      fetchSecondProduct();
    }
  }, [secondProductId]);

  // Handle selecting a second product for comparison
  const selectSecondComparingProduct = (productId) => {
    setSecondProductId(productId); 
  };

  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="Product Comparison"
        currentPage="Product Comparison"
      />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* First product display */}
          <div className="border rounded-lg p-6 shadow-md h-[50rem]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{name}</h2>
              <div className="bg-green-600 w-16 flex justify-center items-center text-white gap-1 rounded-md text-sm font-bold">
                <p>{rating}</p>
                <FaStar />
              </div>
            </div>
            <div className="w-80 mx-auto mb-4">
              {images.length > 0 ? (
                <img
                  src={images[0]}
                  alt={name}
                  className="object-cover w-full h-60 rounded-md"
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <p className="text-sm mb-2">{description}</p>
            <p className="text-sm mb-2">
              <strong>Discount:</strong> {discountPercentage}%
            </p>
            <p className="text-lg font-semibold text-green-600 mb-2">₹{price}</p>
            <p className="text-sm mb-2">{additionalInfo}</p>
            <p className="text-sm mb-2">{info}</p>
            <p className="text-sm mb-2">
              <strong>Stock:</strong> {stock}
            </p>
            <p className="text-sm mb-2">
              <strong>Seating Capacity:</strong> {seatingCapacity}
            </p>
          </div>

          {/* Second product display */}
          {secondProductData ? (
            <div className="border rounded-lg p-6 shadow-md h-[50rem]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{secondProductData?.name}</h2>
                <div className="bg-green-600 w-16 flex justify-center items-center text-white gap-1 rounded-md text-sm font-bold">
                  <p>{secondProductData?.rating}</p>
                  <FaStar />
                </div>
              </div>
              <div className="w-80 mx-auto mb-4">
                {secondProductData?.images?.length > 0 ? (
                  <img
                    src={secondProductData?.images[0]}
                    alt={secondProductData?.name}
                    className="object-cover w-full h-60 rounded-md"
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              <p className="text-sm mb-2">{secondProductData?.description}</p>
              <p className="text-sm mb-2">
                <strong>Discount:</strong> {secondProductData?.discountPercentage}%
              </p>
              <p className="text-lg font-semibold text-green-600 mb-2">
                ₹{secondProductData?.price}
              </p>
              <p className="text-sm mb-2">{secondProductData?.additionalInfo}</p>
              <p className="text-sm mb-2">{secondProductData?.info}</p>
              <p className="text-sm mb-2">
                <strong>Stock:</strong> {secondProductData?.stock}
              </p>
              <p className="text-sm mb-2">
                <strong>Seating Capacity:</strong> {secondProductData?.seatingCapacity}
              </p>
            </div>
          ) : (
            <div className="text-gray-600 text-center h-[50rem] flex items-center justify-center">
              <p>Select a product to compare</p>
            </div>
          )}

          {/* Related Products section */}
        
        </div>
        <div className="my-10">
            <h3 className="text-xl font-bold mb-4 ">Related Products</h3>
            <div className="grid lg:grid-cols-4 gap-6">
              {products?.map((product) => (
                <CustomCard
                  key={product?._id}
                  bgimage={product?.images[0]}
                  discountPercentage={product?.discountPercentage}
                  title={product?.name}
                  description={product?.description}
                  info={product?.info}
                  price={product?.price}
                  discountedPrice={product?.discountPrice}
                  onClick={() => selectSecondComparingProduct(product?._id)}
                />
              ))}
            </div>
          </div>
      </div>
    </>
  );
};

export default ProductComparison;
