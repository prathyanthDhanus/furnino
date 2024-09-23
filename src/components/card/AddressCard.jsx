
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const AddressCard = ({ addressData }) => {
  return (
    <div className="grid grid-cols-8 items-center border my-3 rounded-xl shadow-xl py-3">
      <div className="col-span-1 text-4xl flex justify-center p-2">
        <CiDeliveryTruck />
      </div>
      <div className="col-span-6">
        {addressData?.map((address, index) => (
          <div key={index}>
            <div className="flex font-sansation font-bold gap-5">
              <p>{address.name}</p>
              <p className="bg-green-400 text-xs px-2 flex items-center justify-center text-custom-white rounded-xl">
                {address.addressType}
              </p>
            </div>
            <div className="gap-3 font-sansation font-regular">
              <span>{address.houseName},</span>
              <span>{address.street},</span>
              <span>{address.landMark},</span>
              <span>{address.city}</span>
            </div>
            <div className="font-sansation font-regular">
              <span>{address.district},</span>
              <span>{address.state},</span>
              <span>{address.pincode}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-1 text-xl hover:shadow-xl bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
        <input type="checkbox" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default AddressCard;
