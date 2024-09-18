import React from "react";
import CardWithImage from "../../../components/card/CardWithImage";
import landingImage from "../../../assets/images/scandinavian-interior-mockup-wall-decal-background 1.png";
import bedroomImage from "../../../assets/images/beds-banner.jpg";
import livingroomImage from "../../../assets/images/space-save-banner.jpg";
import dinningroomImage from "../../../assets/images/dining-set-banner.jpg";
import studyroomImage from "../../../assets/images/wfh-banner.jpg";
import outdoorImage from "../../../assets/images/outdoor-banner.jpg";
import kidsroomImage from "../../../assets/images/kids-room-banner.jpg";
import CustomButton from "../../../components/buttton/CustomButton";
import TodaysOffer from "./TodaysOffer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${landingImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
          <div></div>
          <div className="bg-[#FFF3E3] p-10 m-20 rounded-md">
            <p className="font-sansation font-regular">🎀 New Arrival</p>
            <div className="font-sansation font-bold text-custom-yellow text-6xl">
              <h5>Discover Our</h5>
              <h5>New Collection</h5>
            </div>
            <p className="font-sansation font-regular mt-2">
              Explore our latest furniture designs, featuring stylish sofas,
              elegant dining sets, and chic bedroom pieces. Crafted with quality
              and care, these new arrivals are perfect for enhancing any space.
              Discover them now and transform your home with fresh, contemporary
              pieces!
            </p>
            <CustomButton
              buttonText="Explore Now"
              type="submit"
              className="w-1/2 my-2 bg-custom-yellow text-custom-white hover:bg-custom-white hover:text-custom-yellow hover:border-custom-yellow "
              onClick={()=>navigate("/user/shop")}
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center my-5">
        <div className="flex items-center ">
          <div className="relative">
            <hr className="w-[1.25rem] h-1 my-2 border-custom-yellow border-t-2 dark:border-custom-yellow ml-auto" />
            <hr className="w-[2.5rem] h-1 my-2 border-custom-yellow border-t-2  dark:border-custom-yellow" />
          </div>
          <div className="m-4">
            <h1 className=" font-sansation font-bold text-3xl   ">
            Browse Our Collections
            </h1>
          </div>
        </div>
        <div className="relative">
          <hr className="w-[1.25rem] h-1 my-2 border-custom-yellow border-t-2  dark:border-custom-yellow " />
          <hr className="w-[2.5rem] h-1 my-2 border-custom-yellow border-t-2  dark:border-custom-yellow" />
        </div>
      </div>

  
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 mx-10">
        <CardWithImage cardImages={bedroomImage} cardAlt="bedroom" />
        <CardWithImage cardImages={livingroomImage} cardAlt="living room" />
        <CardWithImage cardImages={dinningroomImage} cardAlt="dinning room" />
        <CardWithImage cardImages={kidsroomImage} cardAlt="kids room" />
        <CardWithImage cardImages={outdoorImage} cardAlt="outdoor" />
        <CardWithImage cardImages={studyroomImage} cardAlt="study room" />
      </div>
      <TodaysOffer/>
    </>
  );
};

export default LandingPage;
