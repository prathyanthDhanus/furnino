import { useMutation ,useQueryClient} from "@tanstack/react-query";
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
    mutationFn: async ({ totalAmount,addressId,productId,selectedCapacity,quantity}) => {
      const response = await Axios.post("/api/user/payment", {
        totalAmount: totalAmount,
        addressId:addressId,
        productId:productId,
        selectedCapacity:selectedCapacity,
        quantity :quantity
      });
      return response?.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
      localStorage.removeItem("totalAmount");
      localStorage.removeItem("quantity");
      localStorage.removeItem("productId");
      localStorage.removeItem("addressId");
      localStorage.removeItem("selectedCapacity");
      if (data?.data) {
        window.location.href = data?.data;
      }
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
    onSuccess: (data) => {
      console.log(data?.data?.userId);
      const isPhoneNumber = /^\+?\d+$/.test(
        data.data.userId.replace(/\s+/g, "")
      );
      showSuccessToast(data?.message);
      if (isPhoneNumber) {
        localStorage.setItem("phoneNumber", data?.data?.userId);
      } else {
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
      localStorage.setItem("token", data?.data);
      navigate("/");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "Phonenumber validatiion failed.Please try again"
      );
    },
  });
};

//=============== user continue with google ==============

export const useContinueWithGoogle = () => {
  return useMutation({
    mutationFn: async (email) => {
      console.log(email);
      const response = await Axios.post("/api/user/google/login", {
        email: email,
      });
      return response?.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Login failed.Please try again"
      );
    },
  });
};

//=============== forgot password(send otp) ==============

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: async (valuse) => {
      const response = await Axios.post("/api/user/verify-user", {
        phoneNumber: `+91${valuse?.phoneNumber}`,
      });
      return response?.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("phoneNumber", data?.data?.userId);
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "Phone number verification failed.Please try again"
      );
    },
  });
};

//=============== forgot password(verify otp) ==============

export const useForgotPasswordVerifyOTP = () => {
  return useMutation({
    mutationFn: async (values) => {
      const phoneNumber = localStorage?.getItem("phoneNumber");
      const verifyData = {
        otp: values?.otp,
        phoneNumber: phoneNumber,
      };
      const response = await Axios.post("/api/user/verify-otp", verifyData);
      return response?.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "OTP verification failed.Please try again"
      );
    },
  });
};

//=============== create new password ==============

export const useCreateNewPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (values) => {
      const phoneNumber = localStorage?.getItem("phoneNumber");
      const createData = {
        newPassword: values?.newPassword,
        phoneNumber: phoneNumber,
      };
      const response = await Axios.put("/api/user/password", createData);
      return response?.data;
    },
    onSuccess: (data) => {
      localStorage.removeItem("phoneNumber");
      showSuccessToast(data?.message);
      navigate("/user/login");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "OTP verification failed.Please try again"
      );
    },
  });
};

//=============== add user profile ==============

export const useCreateProfile = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (values) => {
      const response = await Axios.post("/api/user/address", values);
      return response.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
      navigate("/product/checkout");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "Profile creation failed.Please try again"
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

// =========== update user profile details ============

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ addressId }) => {
      const response = await Axios.put(`/api/user/address/:${addressId}`);
      return response?.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
      queryClient.invalidateQueries("userProfile");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "Failed to update user profile. Try again."
      );
    },
  });
};
// =========== delete user profile details ============

export const useDeleteProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ addressId }) => {
      const response = await Axios.delete(`/api/user/address/${addressId}`);
      return response?.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
      queryClient.invalidateQueries("userProfile");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "Failed to delete user profile. Try again."
      );
    },
  });
};
