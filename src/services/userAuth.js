import { useMutation } from "@tanstack/react-query";
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
      const response = await Axios.post(
        "/api/user/login",
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
      const response = await Axios.post(
        "/api/user/register",
        values
      );
      return response.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
      navigate("/login");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Registration failed. Try again."
      );
    },
  });
};



