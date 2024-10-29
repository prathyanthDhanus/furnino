import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import headingImage from "../../assets/images/Rectangle 1.png";
import HeaderBanner from "../../components/banner/HeaderBanner";
import {
  useDeleteFromWishlist,
  useFetchWishlistOfAUser,
} from "../../services/product";
import testImage from "../../assets/images/kids-room-banner.jpg"; 
import wirshlistimage from "../../assets/images/rb_2506.png"

const Wishlist = () => {
  const navigate = useNavigate();
  const { data: userWishlist } = useFetchWishlistOfAUser();
  const { mutate } = useDeleteFromWishlist();

  const handleDelete = (wishlistId) => {
    mutate(wishlistId); 
  };
  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="Wishlist"
        currentPage="Wishlist"
      />

      <div className="container mx-auto p-10">
        {userWishlist?.data?.length===0 ? (
          <div className="grid justify-items-center">
         
           <img src={wirshlistimage} alt="empty wishlist image" className="w-1/2" />
          <div className="flex font-sansation font-regular">
          <p>Your wishlist is empty. <span className="text-blue-500 cursor-pointer">Click here</span> to add items to your wishlist.</p>
          </div>
          </div>
        ) : (
          <>
          
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {userWishlist?.data?.map((wishlistData) => (
            <div
              className="border rounded-lg hover:shadow-md p-4 flex flex-col items-center hover:cursor-pointer"
              key={wishlistData?._id}
            >
              {/* Wishlist Product Image */}
              <img
                src={wishlistData?.productId?.images[0] || testImage}
                alt={wishlistData?.productId?.name}
                className="w-full h-40 object-cover mb-3 rounded"
              />

              {/* Product Info */}
              <h2 className="font-bold text-lg font-sansation font-bold">{wishlistData?.productId?.name}</h2>
              <p className="text-gray-500 mb-3 font-sansation font-regular">Price: {wishlistData?.productId?.discountPrice}</p>

              {/* Stock Status */}
              <p
                className={`text-sm font-bold mb-3 ${
                  wishlistData?.productId?.stockStatus === "Out of Stock"
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {wishlistData?.productId?.stockStatus}
              </p>

              {/* Action Buttons */}
              <div className="flex space-x-2 mt-auto">
                {/* Navigate to Product */}
                <button
                  className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                  onClick={()=>navigate(`/view/product/${ wishlistData?.productId?._id}`)}
                >
                  View Product
                </button>

                {/* Delete from Wishlist */}
                <button
                  className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                  onClick={() => handleDelete(wishlistData?._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        </>
        )}
      </div>
    </>
  );
};

export default Wishlist;
