import React, { useState, useRef } from "react";
import forgotPasswordImage from "../../assets/images/Secure login-pana.png";
import CustomInputField from "../../components/inputField/CustomInputField";
import { useGlobalFormik } from "../../hooks/useFormik";
import {
  forgotPasswordInitialValues,
  forgotPasswordSchema,
  OTPInitialValues,
  OTPSchema,
} from "../../utils/validationSchema/authSchema/authSchema";
import CustomButton from "../../components/buttton/CustomButton";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";

const ForgotPassword = () => {
  const [verifiedMobile, setVerifiedMobile] = useState(true);
  const navigate = useNavigate();
  const formik = useGlobalFormik({
    initialValues: forgotPasswordInitialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  const formik2 = useGlobalFormik({
    initialValues: OTPInitialValues,
    validationSchema: OTPSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  bg-red-40 border  border-custom-yellow rounded-xl h ">
          <div className="hidden lg:block xl:block ">
            <img
              src={forgotPasswordImage}
              alt="chair"
              className="rounded-tl-xl rounded-bl-xl  h-full "
            />
          </div>
          <div className="  lg:p-10 m-10 md:m-10">
            <h5 className="text-4xl font-sansation font-bold py-5 ">
              Forgot Password
            </h5>
            {!verifiedMobile && (
              <>
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
                  <CustomButton
                    buttonText="Verify Mobile Number"
                    type="submit"
                    className="w-full my-5 bg-custom-yellow text-custom-white hover:bg-custom-white hover:text-custom-yellow hover:border-custom-yellow"
                  />
                </form>
              </>
            )}
            {verifiedMobile && (
              <>
                <form onSubmit={formik2.handleSubmit}>
                  <p className="mt-3 font-sansation font-bold">Enter OTP</p>
                  <div className="">
                    <OtpInput
                      value={formik2?.values?.otp}
                      onChange={(otp) => formik2.setFieldValue("otp", otp)}
                      numInputs={6}
                      isInputNum
                      shouldAutoFocus
                      renderSeparator={<span className="px-[0.4rem] md:px-[2.5rem] lg:px-[1.2rem]"></span>}
                      renderInput={(props) => (
                        <input
                          {...props}
                          className={`w-12 h-12 text-center border-2 ${
                            formik2.errors.otp && formik2.touched.otp
                              ? "border-red-500"
                              : "border-gray-300 focus:border-yellow-500"
                          } focus:outline-none rounded-lg`}
                          style={{ padding: "0" }}
                        />
                      )}
                      containerStyle="mt-4"
                    />
                    {formik2.errors.otp && formik2.touched.otp && (
                      <div className="text-red-500 text-sm mt-2">
                        {formik2.errors.otp}
                      </div>
                    )}
                  </div>
                  <CustomButton
                    buttonText="Submit"
                    type="submit"
                    className="w-full my-4 bg-custom-yellow text-custom-white hover:bg-custom-white hover:text-custom-yellow hover:border-custom-yellow"
                  />
                </form>
              </>
            )}
            <div className="text-center ">
              <p className="font-sansation font-regular mt-3">
                Remembered your password?{" "}
                <span
                  className="font-sansation font-bold hover:cursor-pointer hover:text-custom-yellow"
                  onClick={() => navigate("/user/login")}
                >
                  Click here to log in.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
