// this is a file for handle formik validation

import * as Yup from "yup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //check for contain "@" and "." in the email

export const nameValidation = Yup.string()
  .required("Name is required")
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name cannot exceed 50 characters");

export const emailValidation = Yup.string()
  .matches(emailRegex, "Invalid email address")
  .email("Invalid email address")
  .required("Email is required");

export const passwordValidation = Yup.string()
  .min(6, "Must be at least 6 characters")
  .matches(/[a-z]/, "Must contain at least one lowercase letter")
  .matches(/[A-Z]/, "Must contain at least one uppercase letter")
  .matches(/[0-9]/, "Must contain at least one number")
  .required("Password is required");

export const phoneValidation = Yup.string()
  .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
  .required("Phone number is required");

export const pincodeValidation = Yup.string()
  .matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
  .required("Pincode is required");

export const addressValidation = Yup.string().required("Address is required");
export const houseNameValidation = Yup.string().required("House name is required");
export const streetValidation = Yup.string().required("Street is required");
export const landMarkValidation = Yup.string().required("Landmark is required");
export const cityValidation = Yup.string().required("City is required");
export const districtValidation = Yup.string().required("District is required");
export const stateValidation = Yup.string().required("State is required");

export const addressTypeValidation = Yup.string().required(
  "Please select an address type"
);

export const otpValidation = Yup.string().matches(/^\d{6}$/, "OTP must be exactly 6 digits").required("OTP is required");
