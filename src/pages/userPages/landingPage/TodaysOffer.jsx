import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import { images } from "../../../utils/hardcodedData/carouselData/landingPageCarousel";
import CardWithImage from "../../../components/card/CardWithImage";
import offerImage from "../../../assets/images/18051731.jpg";
import furnitureOffer from "../../../assets/images/Furniture-Social-Media-Banner-05.jpg";
import furnitureOffer2 from "../../../assets/images/5266783.jpg";

const TodaysOffer = () => {
  const bestSellersData = [
    {
      image: offerImage,
      alt: "offerImage",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.`,
    },
    {
      image: furnitureOffer,
      alt: "furnitureOffer",
      description: `Discover the best deals on stylish furniture for your home. Check out our
                exclusive offers on living room sets, bedroom furniture, and more.`,
    },
    {
      image: furnitureOffer2,
      alt: "furnitureOffer2",
      description: `Transform your space with modern furniture designs at unbeatable prices. 
                Limited-time offers available now!`,
    },
    {
      image: furnitureOffer2,
      alt: "furnitureOffer2",
      description: `Transform your space with modern furniture designs at unbeatable prices. 
                Limited-time offers available now!`,
    },
    {
      image: offerImage,
      alt: "offerImage",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.`,
    },
    {
      image: furnitureOffer,
      alt: "furnitureOffer",
      description: `Discover the best deals on stylish furniture for your home. Check out our
                  exclusive offers on living room sets, bedroom furniture, and more.`,
    },
  ];
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
          <>
            <div
              className="border-2 border-custom-yellow rounded-xl"
              key={index}
            >
              <CardWithImage cardImages={item.image} cardAlt="bedroom" />
              <p className="px-5 m-2 text-sm ">{item.description}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default TodaysOffer;
