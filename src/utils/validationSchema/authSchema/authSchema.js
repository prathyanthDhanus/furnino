import * as Yup from "yup";
import { emailValidation,passwordValidation,nameValidation,phoneValidation, otpValidation } from "../commonValidation";

// --------------------- login section ----------------------
export const loginInitialValues = {
    phoneNumber: "",
    password: "",
};

export const loginSchema = Yup.object().shape({
    phoneNumber: phoneValidation,
    password: passwordValidation
});
//--------------------- login section end --------------------

//--------------------- register section ----------------------
export const registerInitialValues = {
    name: "",
    phoneNumber: "",
    password: ""
};

export const registerSchema = Yup.object().shape({
    name: nameValidation,
    phoneNumber: phoneValidation,
    password: passwordValidation
});
//-------------------- register section end ---------------------

// --------------------- forgot password section ----------------------
export const forgotPasswordInitialValues = {
    phoneNumber: "",
  
};

export const forgotPasswordSchema = Yup.object().shape({
    phoneNumber: phoneValidation,
  
});


export const OTPInitialValues = {
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
};

export const OTPSchema = Yup.object().shape({
    otp1: otpValidation,
    otp2: otpValidation,
    otp3: otpValidation,
    otp4: otpValidation,
    otp5: otpValidation,
  
});
//--------------------- forgot password section end --------------------