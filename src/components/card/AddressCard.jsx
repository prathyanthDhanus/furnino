import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const AddressCard = ({ addressData }) => {

  const getAddressTypeBgColor = (addressType) => {
    switch (addressType?.toLowerCase()) {
      case 'home':
        return 'bg-green-400';
      case 'office':
        return 'bg-orange-400';
      default:
        return 'bg-blue-600'; 
    }
  };
  return (
    <div className="grid grid-cols-8 items-center border my-3 rounded-xl shadow-xl py-3">
      <div className="col-span-1 text-4xl flex justify-center p-2">
        <CiDeliveryTruck />
      </div>
      <div className="col-span-6">
        <div>
          <div className="flex font-sansation font-bold gap-5">
            <p>{addressData.name}</p>
            <p className={`${getAddressTypeBgColor(addressData.addressType)} text-xs px-2 flex items-center justify-center text-custom-white rounded-xl`}>
              {addressData.addressType}
            </p>
          </div>
          <div className="gap-3 font-sansation font-regular">
            <span>{addressData.houseName},</span>
            <span>{addressData.street},</span>
            <span>{addressData.landMark},</span>
            <span>{addressData.city}</span>
          </div>
          <div className="font-sansation font-regular">
            <span>{addressData.district},</span>
            <span>{addressData.state},</span>
            <span>{addressData.pincode}</span>
          </div>
        </div>
      </div>
      <div className="col-span-1 text-xl hover:shadow-xl bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
        <input type="checkbox" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default AddressCard;
