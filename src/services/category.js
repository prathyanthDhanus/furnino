import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  showSuccessToast,
  showErrorToast,
} from "../utils/toastNotification/toastNotifications"; 
import Axios from "../axios/axiosInstance";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      // const response = await axios.get("http://localhost:3000/api/category/user/categories");
      const response = await Axios.get("/api/category/user/categories");
      return response.data.data; 
    },
    onSuccess: (data) => {
      showSuccessToast("Categories fetched successfully!");
    },
    onError: (error) => {
      showErrorToast(error?.response?.data?.message || "Failed to fetch categories.");
    },
  });
};
