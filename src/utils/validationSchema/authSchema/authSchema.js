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
    otp: "",
    
};

export const OTPSchema = Yup.object().shape({
    otp: otpValidation,

  
});
//--------------------- forgot password section end --------------------

// --------------------- login with otp section ----------------------
export const loginWithOTPInitialValues = {
    contactInfo: "", // Changed to a more general name
  };
  
  export const loginWithOTPSchema = Yup.object().shape({
    contactInfo: Yup.string()
      .required("This field is required")
      .test("is-email-or-phone", "Invalid email or phone number", (value) => {
        const isPhoneNumber = /^\d+$/.test(value); // Simple check for numbers only
        const isEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(value); // Email validation regex
        return isPhoneNumber || isEmail;
      }),
  });

export const loginOTPInitialValues = {
    otp: "",
    
};

export const loginOTPSchema = Yup.object().shape({
    otp: otpValidation,

  
});
//--------------------- login with otp section end --------------------