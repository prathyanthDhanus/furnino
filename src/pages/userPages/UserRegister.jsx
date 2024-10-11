import React from "react";
import CustomInputField from "../../components/inputField/CustomInputField";
import CustomButton from "../../components/buttton/CustomButton";
import { useGlobalFormik } from "../../hooks/useFormik";
import {
  registerInitialValues,
  registerSchema,
} from "../../utils/validationSchema/authSchema/authSchema";
import chair from "../../assets/images/143117.jpg";
import { useNavigate } from "react-router-dom";
import { useRegisterUser } from "../../services/userAuth";

const UserRegister = () => {
  const navigate = useNavigate();
 const {mutate,isLoading} = useRegisterUser();

  const formik = useGlobalFormik({
    initialValues: registerInitialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      const modifiedValues = {
        ...values,
        phoneNumber: `+91${values.phoneNumber}`,
      };
      mutate(modifiedValues);
      console.log("oooo",modifiedValues)
    },
  });

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  bg-red-40 border  border-custom-yellow rounded-xl h ">
          <div className="  lg:p-10 m-10 md:m-10">
            <h5 className="text-4xl font-sansation font-bold py-5 ">
              Register
            </h5>

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
                title="Enter Your Phone Number"
                type="text"
                placeholder="Enter Your Phone Number"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.phoneNumber}
                touched={formik.touched.phoneNumber}
              />
              <CustomInputField
                title="Enter Your Password"
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.password}
                touched={formik.touched.password}
              />
              <CustomButton
                buttonText="REGISTER"
                type="submit"
                className="w-full my-5 bg-custom-yellow text-custom-white hover:bg-custom-white hover:text-custom-yellow hover:border-custom-yellow"
                disabled={isLoading}
              />
            </form>
            <div className="text-center ">
              <p className="font-sansation font-regular mt-3">
                Already have an account?{" "}
                <span
                  className="font-sansation font-bold hover:cursor-pointer hover:text-custom-yellow"
                  onClick={() => navigate("/user/login")}
                >
                  Sign in
                </span>
              </p>
            </div>
          </div>
          <div className="hidden lg:block xl:block ">
            <img
              src={chair}
              alt="chair"
              className="rounded-tr-md rounded-br-md  h-full "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
