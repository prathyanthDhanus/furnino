import { showErrorToast } from "../utils/toastNotification/toastNotifications";
import { useQuery } from "@tanstack/react-query";
import Axios from "../axios/axiosInstance";
import axios from "axios";


// ============== get all products in category wise ===============

export const useGetProductsCategoryWise = (categoryId) => {
  return useQuery({
    queryKey: ["products", categoryId],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/api/product/user?categoryId=${categoryId}`
      );
      // const response = await Axios.get(`/api/product/user?categoryId=${categoryId}`)
      return response?.data?.data;
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Failed to fetch categories."
      );
    },
  });
};

// ============== get product by id ===============

export const useGetProductById = (productId)=>{
  return useQuery({
    queryKey:["product",productId],
    queryFn:async()=>{
   const response = await Axios.get(`/api/product/user/${productId}`);
   return response?.data?.data;
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Failed to fetch product."
      );
    },
  });
};
