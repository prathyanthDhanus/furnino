import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Axios from "../axios/axiosInstance";
import { useNavigate } from "react-router-dom";
import {
  showSuccessToast,
  showErrorToast,
} from "../utils/toastNotification/toastNotifications";

// =========== user login with phone number and password ============

export const useDefaultLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (values) => {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        values
      );
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data?.data);
      showSuccessToast(data?.message);
      navigate("/");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Login failed. Try again."
      );
    },
  });
};

// =========== user register with phone number and password ============

export const useRegisterUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (values) => {
      const response = await axios.post(
        "http://localhost:3000/api/user/register",
        values
      );
      return response.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
      navigate("/user/login");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Registration failed. Try again."
      );
    },
  });
};

// =========== fetch user profile details ============

export const useFetchProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const response = await Axios.get("/api/user/profile");
      return response?.data?.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "Failed to fetch user profile data. Try again."
      );
    },
  });
};

// =========== user logout function ============

export const useHandleLogout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");

    showSuccessToast("User successfully logged out");

    navigate("/");
  };
  return handleLogout;
};

// ============== user payment  ===============

export const usePayment = () => {
  return useMutation({
    mutationFn: async ({ totalAmount }) => {
      const response = await Axios.post("/api/user/payment", {
        totalAmount: totalAmount,
      });
      return response?.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Payment failed.Please try again"
      );
    },
  });
};

//=============== user login with otp (send otp) ==============

export const useLoginWithOtp = () => {
  return useMutation({
    mutationFn: async (values) => {
   
      const response = await Axios.post("/api/user/otp/login", values);
      return response?.data;
    },
    onSuccess: ( data ) => {
      console.log(data?.data?.userId)
      const isPhoneNumber = /^\+?\d+$/.test(
        data.data.userId.replace(/\s+/g, "")
      );
      console.log(isPhoneNumber)
      showSuccessToast(data?.message);
      if (isPhoneNumber) {
        localStorage.setItem("phoneNumber", data?.data?.userId);
      }else{
        localStorage.setItem("email", data?.data?.userId);
      }
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "Phonenumber validatiion failed.Please try again"
      );
    },
  });
};

//=============== user login with otp (verify otp and login) ==============

export const useVerifyOtp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async ({ otp }) => {
      const phoneNumber = localStorage?.getItem("phoneNumber");
      const email = localStorage?.getItem("email");
      const verifyData = {
        otp,
        ...(phoneNumber ? { phoneNumber } : { email }),
      };
      const response = await Axios.post(
        "/api/user/verify/otp/login",
        verifyData
      );
      return response?.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
      localStorage.removeItem("phoneNumber");
      localStorage.removeItem("email");
      localStorage.setItem("token",data?.data)
       navigate("/")
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "Phonenumber validatiion failed.Please try again"
      );
    },
  });
};
