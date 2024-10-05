import React, { useState } from "react";
import headingImage from "../../assets/images/Rectangle 1.png";
import testImage from "../../assets/images/kids-room-banner.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import StarRating from "../../components/starRating/StarRating";
import CustomButton from "../../components/buttton/CustomButton";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiInformation2Fill } from "react-icons/ri";
import { TbHeartFilled } from "react-icons/tb";
import { BiHeart } from "react-icons/bi";
import QuantityComponent from "../../components/buttton/QuantityIncreaseButton";
import HeaderBanner from "../../components/banner/HeaderBanner";
import { useGetProductById } from "../../services/product";

const ViewProduct = () => {
  const navigate = useNavigate();
  const {productId}  =  useParams();
  const [quantity, setQuantity] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const handleQuantityChange = (newQuantity) => {
    console.log("Quantity changed to:", newQuantity);
  };

  const {data:product ,isSuccess} = useGetProductById(productId);

  console.log("mmmmmm",product)

  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="Product Details"
        currentPage="Product Details"
      />

      <div className="container mx-auto  grid sm:rid-cols-1 md:rid-cols-12  lg:grid-cols-12 xl:rid-cols-12 gap-5 p-5 m-10">
        <div className="col-span-2">
          <div className="grid grid-rows-3 w-[10rem] gap-4 ">
            <img src={testImage} alt="" className="object-cover" />
            <img src={testImage} alt="" className="object-cover" />
            <img src={testImage} alt="" className="object-cover" />
            <img src={testImage} alt="" className="object-cover" />
          </div>
        </div>
        <div className="col-span-4 ">
          <img src={testImage} alt="" className="object-cover" />
        </div>
        <div className="col-span-6">
          <div>
            <div className="flex items-center ">
              <h5 className="font-sansation font-bold text-3xl">Sofa Set</h5>
              <TbHeartFilled className="text-red-500 text-2xl ml-5" />
            </div>
            <div className="flex font-sansation font-regular gap-4 my-2 ">
              <div className="bg-green-600 w-[3.5rem] flex justify-center items-center text-custom-white  gap-1 rounded-md text-xs font-sansation font-bold ">
                <p>4.5</p>
                <FaStar />
              </div>
              <p className="text-gray-500 ">82 Ratings & 28 Reviews</p>
              <div className="flex items-center justify-end w-1/2">
                <p
                  className="text-xs bg-custom-yellow px-2 rounded-md text-custom-white p-1 shadow-xl cursor-pointer"
                  onClick={() => navigate("/product/compare")}
                >
                  Compare
                </p>
                <RiInformation2Fill className="text-yellow-500 mx-1 cursor-pointer shadow-xl" />
              </div>
            </div>
            <p className="font-sansation font-regular">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="m-2 font-sansation font-regular">
            <div className="flex items-center ">
              <FaIndianRupeeSign />
              <p className="font-sansation font-bold text-2xl">1,10,000</p>
            </div>
            <div>
              <p className="text-2xl font-sansation font-bold text-red-500">
                Out of Stock{" "}
              </p>
              <QuantityComponent
                initialQuantity={1}
                step={1}
                onChange={handleQuantityChange}
                className="w-1/4"
              />
            </div>
            <h5 className="my-2 ">Available Offers</h5>
            <div className="flex items-center  gap-2 my-2 ">
              <FaTags className="text-custom-yellow w-[2rem]" />
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>

            <span>Size</span>
            <div className="flex gap-5 items-center">
              <p className="bg-custom-yellow text-custom-white px-2 rounded-md  hover:shadow-lg cursor-pointer my-1">
                3 Seater
              </p>
            </div>
            <StarRating totalStars={5} />

            <span>Colour</span>
            <div className="flex gap-4 my-2">
              <p className="w-[1rem] h-[1rem] bg-yellow-400 rounded-full cursor-pointer"></p>
              <p className="w-[1rem] h-[1rem] bg-red-400 rounded-full cursor-pointer"></p>
            </div>
            <div className="flex gap-5 ">
              <div className="grid grid-cols-2  w-full gap-5">
                <CustomButton
                  buttonText="Add To Cart"
                  type="submit"
                  className="w-full bg-blue-400 text-custom-white hover:bg-custom-white hover:text-blue-400 hover:border-blue-400"
                />
                <CustomButton
                  buttonText="Buy Now"
                  type="submit"
                  className="w-full bg-red-500 text-custom-white hover:bg-custom-white hover:text-red-500 hover:border-red-500"
                  onClick={() => navigate("/product/checkout")}
                />
                <CustomButton
                  buttonText="Notify Me"
                  type="submit"
                  className="w-full bg-orange-500 text-custom-white hover:bg-custom-white hover:text-orange-500 hover:border-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 container mx-auto px-5 font-sansation font-regular">
        <div>
          <h5 className="font-sansation font-bold text-xl"> Description</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <h5 className="font-sansation font-bold mt-3 text-xl">
            {" "}
            Additional Information
          </h5>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          </ul>

          <h5 className="font-sansation font-bold mt-3 text-xl">
            Rating & Reviews
          </h5>

          <div className="flex font-sansation font-regular gap-4 my-2">
            <div className="bg-green-600 w-[3.5rem] flex justify-center items-center text-custom-white  gap-1 rounded-md text-xs font-sansation font-bold ">
              <p>4.5</p>
              <FaStar />
            </div>
            <p className="font-sansation font-bold ">Awesome Product</p>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <div className=" grid grid-cols-12  gap-4 my-5">
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
            <img src={testImage} alt="" className="object-cover w-[7rem]" />
          </div>
        </div>
        <div className=" flex items-center text-gray-400 gap-2 text-sm">
          <p>Naresh Agarwal</p>
          <IoCheckmarkCircle className="text-lg" />
          <p>Certified Buyer</p>
          <p>20-09-2024</p>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
