import { useRef } from "react";

export const useOtpHandler = (formik) => {
  const otpRefs = useRef([]);

  const handleOtpChange = (index, event) => {
    const { value } = event.target;
    formik.setFieldValue(`otp${index + 1}`, value);

    // Move to the next input if the current input is filled
    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].focus();
    }

    // Mark field as touched to trigger validation
    formik.setFieldTouched(`otp${index + 1}`, true);

    // Clear the error for this field if it's valid now
    if (!formik.errors[`otp${index + 1}`]) {
      formik.setFieldError(`otp${index + 1}`, undefined);
    }
  };

  // Check for OTP errors in the formik state
  const checkOtpErrors = () => {
    const hasOtpError = Object.keys(formik.errors).some(
      (key) => key.startsWith("otp") && formik.touched[key]
    );

    const otpErrorMessage = hasOtpError ? "Please fill all OTP fields" : "";
    console.log("hasOtpError",hasOtpError)
    return { hasOtpError, otpErrorMessage };
  };

  // Mark all OTP fields as touched to trigger validation
  const markAllOtpFieldsTouched = () => {
    [...Array(5)].forEach((_, i) => {
      formik.setFieldTouched(`otp${i + 1}`, true);
    });
  };

  return { otpRefs, handleOtpChange, checkOtpErrors, markAllOtpFieldsTouched };
};  