import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import headingImage from "../../assets/images/Rectangle 1.png";
import HeaderBanner from "../../components/banner/HeaderBanner";
import AddressCard from "../../components/card/AddressCard";
import { useFetchProfile } from "../../services/userAuth";
import profileImage from "../../assets/images/Personal site-amico.png";
import SuspenseWrapper from "../../components/suspenceWrapper/SuspenceWrapper";
import CustomButton from "../../components/buttton/CustomButton";

const CheckOut = () => {
  const navigate = useNavigate();
  const {
    data: userProfile,
    isSuccess: userProfileSuccess,
    isLoading,
  } = useFetchProfile();

  // State variable to store the selected addressId
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  // Handler function to set selected addressId
  const handleAddressSelect = (addressId) => {
    setSelectedAddressId(addressId);
    localStorage.setItem("addressId",addressId);
    
  };

const handleGoPaymnent = ()=>{
  const totalAmount = localStorage.getItem("totalAmount");
  navigate(`/user/payment/selection/${totalAmount}`)
}

  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="Checkout"
        currentPage="Checkout"
      />
      <div className="container mx-auto p-5 m-10 ">
        {isLoading ? (
          <SuspenseWrapper />
        ) : userProfile && userProfile[0]?.address?.length === 0 ? (
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
          <>
            {userProfile?.map((item) =>
              item?.address?.map((user) => (
                <AddressCard
                  key={user._id}
                  addressData={user}
                  onAddressSelect={handleAddressSelect} // Pass the handler to AddressCard
                  isSelected={selectedAddressId === user._id} // Mark as selected if it matches selectedAddressId
                />
              ))
            )}
          </>
        )}
      </div>
      <div className="grid justify-items-center ">
        {selectedAddressId && (
          <CustomButton
            buttonText="Next"
            type="submit"
            className="w-full bg-blue-400 text-custom-white hover:bg-custom-white hover:text-blue-400 hover:border-blue-400"
            onClick={handleGoPaymnent}
          />
        )}
      </div>
    </>
  );
};

export default CheckOut;
