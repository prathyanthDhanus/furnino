import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import { images } from "../../../utils/hardcodedData/carouselData/landingPageData";
import CardWithImage from "../../../components/card/CardWithImage";
import { bestSellersData } from "../../../utils/hardcodedData/carouselData/landingPageData";

const TodaysOffer = () => {

  return (
    <>
      <div className=" flex justify-center items-center my-5">
        <div className="flex items-center ">
          <div className="relative">
            <hr className="w-[1.25rem] h-1 my-2 border-custom-yellow border-t-2 dark:border-custom-yellow ml-auto" />
            <hr className="w-[2.5rem] h-1 my-2 border-custom-yellow border-t-2  dark:border-custom-yellow" />
          </div>
          <div className="m-4">
            <h1 className=" font-sansation font-bold text-3xl   ">
              Todays Special offers
            </h1>
          </div>
        </div>
        <div className="relative">
          <hr className="w-[1.25rem] h-1 my-2 border-custom-yellow border-t-2  dark:border-custom-yellow " />
          <hr className="w-[2.5rem] h-1 my-2 border-custom-yellow border-t-2  dark:border-custom-yellow" />
        </div>
      </div>

      <Carousel images={images} />
      <div className=" flex justify-center items-center my-5">
        <div className="flex items-center ">
          <div className="relative">
            <hr className="w-[1.25rem] h-1 my-2 border-custom-yellow border-t-2 dark:border-custom-yellow ml-auto" />
            <hr className="w-[2.5rem] h-1 my-2 border-custom-yellow border-t-2  dark:border-custom-yellow" />
          </div>
          <div className="m-4">
            <h1 className=" font-sansation font-bold text-3xl   ">
              Best-Sellers of the Season
            </h1>
          </div>
        </div>
        <div className="relative">
          <hr className="w-[1.25rem] h-1 my-2 border-custom-yellow border-t-2  dark:border-custom-yellow " />
          <hr className="w-[2.5rem] h-1 my-2 border-custom-yellow border-t-2  dark:border-custom-yellow" />
        </div>
      </div>

      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-10 ">
        {bestSellersData?.map((item, index) => (
        
            <div
             key={index}
              className="border-2 border-custom-yellow rounded-xl"
             
            >
              <CardWithImage cardImages={item.image} cardAlt="bedroom" />
              <p className="px-5 m-2 text-sm ">{item.description}</p>
            </div>
          
        ))}
      </div>
    </>
  );
};

export default TodaysOffer;
