import React from "react";
import { useNavigate } from "react-router-dom";
import headingImage from "../../assets/images/Rectangle 1.png";
import HeaderBanner from "../../components/banner/HeaderBanner";
import CustomButton from "../../components/buttton/CustomButton";
import AddressCard from "../../components/card/AddressCard";
import CartViewCard from "../../components/card/CartViewCard";
import testImage from "../../assets/images/kids-room-banner.jpg";

const CheckOut = () => {
  const navigate = useNavigate();


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
        <div className="grid grid-cols-6 gap-8">
          {/* Left Side - 4 columns */}
          <div className="col-span-4">
            {profileData?.map((item, index) => (
              <AddressCard key={index} addressData={item.address} />
            ))}

            <div className="mt-10">
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
          </div>

          {/* Right Side - 2 columns */}
          <div className="col-span-2 bg-gray-100 p-5 rounded-xl shadow-xl h-1/2">
            <h2 className="font-sansation font-bold text-xl mb-4">Summary</h2>
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
      </div>
    </>
  );
};

export default CheckOut;
