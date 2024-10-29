import React from "react";
import { useNavigate } from "react-router-dom";
import headingImage from "../../assets/images/Rectangle 1.png";
import HeaderBanner from "../../components/banner/HeaderBanner";
import CustomButton from "../../components/buttton/CustomButton";
import AddressCard from "../../components/card/AddressCard";
import CartViewCard from "../../components/card/CartViewCard";
import testImage from "../../assets/images/kids-room-banner.jpg";
import { useFetchProfile } from "../../services/userAuth";
import profileImage from "../../assets/images/Personal site-amico.png";
import SuspenseWrapper from "../../components/suspenceWrapper/SuspenceWrapper";

const CheckOut = () => {
  const navigate = useNavigate();
  const { data: userProfile, isSuccess: userProfileSuccess, isLoading } = useFetchProfile();

  const profileData = [
    {
      address: [
        {
          name: "Prathyanth",
          houseName: "Kalathil House",
          street: "Onden Road",
          landMark: "Janakiya Road",
          city: "Azhikode",
          district: "Kannur",
          state: "Kerala",
          pincode: "670009",
          addressType: "Home",
        },
      ],
    },
    {
      address: [
        {
          name: "Prathyanth",
          houseName: "Kalathil House",
          street: "Onden Road",
          landMark: "Janakiya Road",
          city: "Azhikode",
          district: "Kannur",
          state: "Kerala",
          pincode: "670009",
          addressType: "Office",
        },
      ],
    },
  ];

  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="Checkout"
        currentPage="Checkout"
      />
      <div className="container mx-auto p-5 m-10">
        {isLoading ? (
         <SuspenseWrapper/>
        ) : userProfile && userProfile[0]?.address?.length === 0 ? (
          // Show image if there is no address
          <>
            <img src={profileImage} alt="profile" className="h-screen" />
            <p className="font-sansation font-bold text-center">
              Your profile is not complete.{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate("/user/create/profile")}
              >
                Click here
              </span>{" "}
              to complete your profile.
            </p>
          </>
        ) : (
          // Show profileData and cart details if there is address data
          <>
            {profileData?.map((item, index) => (
              <AddressCard key={index} addressData={item.address} />
            ))}

            <div className="grid grid-cols-6 gap-8 mt-10">
              {/* Left Side - 4 columns */}
              <div className="col-span-4">
                <CartViewCard
                  imageSrc={testImage}
                  productTitle="Product Title"
                  size="M"
                  price="$50"
                  stockStatus="In Stock"
                  quantity={1}
                  step={1}
                  onQuantityChange={(newQuantity) => console.log(newQuantity)}
                  onDelete={() => console.log("Deleted")}
                  hideCheck={true}
                />
              </div>

              {/* Right Side - 2 columns */}
              <div className="col-span-2 bg-gray-100 p-5 rounded-xl shadow-xl">
                <h2 className="font-sansation font-bold text-xl mb-4">
                  Summary
                </h2>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span>Item Total</span>
                    <span>₹5000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Charges</span>
                    <span>₹150</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹5150</span>
                  </div>
                </div>
                <CustomButton
                  buttonText="Proceed TO Checkout"
                  type="submit"
                  className="w-full bg-blue-400 text-custom-white hover:bg-custom-white hover:text-blue-400 hover:border-blue-400 my-5"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CheckOut;
