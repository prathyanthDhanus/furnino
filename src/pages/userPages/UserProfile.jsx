import React from "react";
import HeaderBanner from "../../components/banner/HeaderBanner";
import headingImage from "../../assets/images/Rectangle 1.png";
import CustomButton from "../../components/buttton/CustomButton";
import CustomInputField from "../../components/inputField/CustomInputField";
import { useGlobalFormik } from "../../hooks/useFormik";
import { userProfileInitialValues } from "../../utils/validationSchema/authSchema/authSchema";
import { userProfileSchema } from "../../utils/validationSchema/authSchema/authSchema";
import { useCreateProfile } from "../../services/userAuth";




const UserProfile = () => {
  const {mutate:profileMutate,isPending} = useCreateProfile();
  const formik = useGlobalFormik({
    initialValues: userProfileInitialValues,
    validationSchema: userProfileSchema,
    onSubmit: (value) => {
      console.log(value)
      profileMutate(value)
    },
  });
  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="User Profile"
        currentPage="User Profile"
      />
      <div className="container mx-auto p-5 m-10">
        <div className="grid grid-cols-1 lg:mx-20 lg:px-20">
          <form onSubmit={formik.handleSubmit}>
            <CustomInputField
              title="Enter Your Name"
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.name}
              touched={formik.touched.name}
            />
            <CustomInputField
              title="Enter Your House Name"
              type="text"
              placeholder="Enter Your House Name "
              name="houseName"
              value={formik.values.houseName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.houseName}
              touched={formik.touched.houseName}
            />
            <CustomInputField
              title="Enter Your Street"
              type="text"
              placeholder="Enter Your Street"
              name="street"
              value={formik.values.street}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.street}
              touched={formik.touched.street}
            />
            <CustomInputField
              title="Enter Your land Mark"
              type="text"
              placeholder="Enter Your land Mark"
              name="landMark"
              value={formik.values.landMark}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.landMark}
              touched={formik.touched.landMark}
            />
            <CustomInputField
              title="Enter Your City"
              type="text"
              placeholder="Enter Your City"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.city}
              touched={formik.touched.city}
            />
            <CustomInputField
              title="Enter Your district"
              type="text"
              placeholder="Enter Your district"
              name="district"
              value={formik.values.district}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.district}
              touched={formik.touched.district}
            />
            <CustomInputField
              title="Enter Your state"
              type="text"
              placeholder="Enter Your state"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.state}
              touched={formik.touched.state}
            />
            <CustomInputField
              title="Enter Your Pincode"
              type="text"
              placeholder="Enter Your Pincode"
              name="pincode"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.pincode}
              touched={formik.touched.pincode}
            />
            <p className="my-3 sm:text-sm md:text-sm lg:text-base font-sansation font-regular">
              Select Your Address Type
            </p>
            <div className="flex items-center gap-5">
              <CustomButton
                buttonText="Home"
                type="button"
                className="w-full my-2 bg-blue-400 text-custom-white hover:bg-custom-white hover:text-blue-400 hover:border-blue-400"
                onClick={() => formik.setFieldValue("addressType", "Home")}
              />
              <CustomButton
                buttonText="Office"
                type="button"
                className="w-full my-2 bg-orange-400 text-custom-white hover:bg-custom-white hover:text-orange-400 hover:border-orange-400"
                onClick={() => formik.setFieldValue("addressType", "Office")}
              />
              <CustomButton
                buttonText="Others"
                type="button"
                className="w-full my-2 bg-green-400 text-custom-white hover:bg-custom-white hover:text-green-400 hover:border-green-400"
                onClick={() => formik.setFieldValue("addressType", "Others")}
              />
            </div>
            {formik.errors.addressType && formik.touched.addressType && (
              <p className="text-red-500 text-sm">{formik.errors.addressType}</p>
            )}
            <CustomButton
              buttonText="LOGIN"
              type="submit"
              className="w-full my-5 bg-custom-yellow text-custom-white hover:bg-custom-white hover:text-custom-yellow hover:border-custom-yellow"
              disabled={isPending}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
