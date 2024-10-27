import React from "react";
import chair from "../../assets/images/room-background-with-interior-decor-white-walls.jpg";
import CustomInputField from "../../components/inputField/CustomInputField";
import { useGlobalFormik } from "../../hooks/useFormik";
import {
  loginInitialValues,
  loginSchema,
} from "../../utils/validationSchema/authSchema/authSchema";
import CustomButton from "../../components/buttton/CustomButton";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDefaultLogin } from "../../services/userAuth";
import { auth,provider ,signInWithPopup} from "../../utils/firebade/firebaseConfig";
import { useContinueWithGoogle } from "../../services/userAuth";

const UserLogin = () => {
  const { mutate, isLoading } = useDefaultLogin();
  const {mutate:googleMutation} = useContinueWithGoogle();
  const navigate = useNavigate();
  const formik = useGlobalFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const modifiedValues = {
        ...values,
        phoneNumber: `+91${values.phoneNumber}`,
      };
      mutate(modifiedValues);
    },
  });

//======== login with google ===========

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider ); 
    googleMutation( result?.user?.email)
  
   
  } catch (error) {
    console.error("Error during Google Sign-In:", error.message);
  }
};
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2   border  border-custom-yellow rounded-xl h-[43rem] ">
          <div className="hidden lg:block xl:block ">
            <img
              src={chair}
              alt="chair"
              className="rounded-tl-xl rounded-bl-xl  h-full "
            />
          </div>
          <div className="  lg:p-10 m-10 md:m-10">
            <h5 className="text-4xl font-sansation font-bold py-5 ">Login</h5>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-3 xl:gap-3">
              <CustomButton
                buttonText="Login with OTP"
                type="submit"
                className="w-full my-2 bg-gray-100  text-blue-500 hover:shadow-md "
                onClick={() => navigate("/user/otp/login")}
              />
              <CustomButton
                buttonText={
                  <div className="flex items-center justify-center gap-2">
                    <FcGoogle className="text-2xl" /> Continue with Google
                  </div>
                }
                type="submit"
                className="w-full my-2 bg-gray-100  text-blue-500 hover:shadow-md "
                onClick={signInWithGoogle}
              />
            </div>
            <form onSubmit={formik.handleSubmit}>
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
                buttonText="LOGIN"
                type="submit"
                className="w-full my-5 bg-custom-yellow text-custom-white hover:bg-custom-white hover:text-custom-yellow hover:border-custom-yellow"
                disabled={isLoading}
              />
            </form>
            <div className="text-center">
              <p
                className="cursor-pointer hover:text-custom-yellow"
                onClick={() => navigate("/user/forgot-password")}
              >
                Forgot Password?
              </p>
              <p className="font-sansation font-regular mt-3">
                Dont have an account?{" "}
                <span
                  className="font-sansation font-bold hover:cursor-pointer hover:text-custom-yellow"
                  onClick={() => navigate("/user/register")}
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
