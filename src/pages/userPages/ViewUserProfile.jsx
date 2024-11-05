import React from "react";
import HeaderBanner from "../../components/banner/HeaderBanner";
import headingImage from "../../assets/images/Rectangle 1.png";
import { useDeleteProfile, useFetchProfile } from "../../services/userAuth";
import AddressCard from "../../components/card/AddressCard";
import profileImage from "../../assets/images/Personal site-amico.png";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/loader/Spinner";

const ViewUserProfile = () => {
  const navigate = useNavigate();

  const {
    data: userProfile,
    isSuccess: userProfileSuccess,
    isLoading,
  } = useFetchProfile();
  console.log("first", userProfile);

  const { mutate: deleteProfileAddress } = useDeleteProfile();

  const handleAddressDelete = (addressId) => {
    deleteProfileAddress({ addressId });
  };

  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="View Profile"
        currentPage="View Profile"
      />

      <div className="container mx-auto px-4 py-10 bg-gray-50 ">
        {isLoading ? (
          <Spinner />
        ) : userProfile && userProfile[0]?.address?.length === 0 ? (
          <div className="flex flex-col items-center">
            <img src={profileImage} alt="profile" className="h-64 mb-6" />
            <p className="font-sansation font-bold text-lg text-center text-gray-700">
              Your profile is not complete.{" "}
              <span
                className="text-blue-600 cursor-pointer underline"
                onClick={() => navigate("/user/create/profile")}
              >
                Click here
              </span>{" "}
              to complete your profile.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userProfile?.map((item) =>
              item?.address?.map((user) => (
                <div
                  key={user?._id}
                  className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md border border-gray-200"
                >
                  <AddressCard addressData={user} />
                  <button
                    className="mt-4 md:mt-0 md:ml-6 text-blue-500 hover:text-blue-700 font-semibold underline"
                    onClick={() => navigate(`/edit/profile/${user?._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="mt-4 md:mt-0 md:ml-6 text-red-500 hover:text-red-700 font-semibold underline"
                    onClick={() => handleAddressDelete(user?._id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ViewUserProfile;
