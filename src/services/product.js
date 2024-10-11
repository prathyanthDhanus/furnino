import {
  showErrorToast,
  showSuccessToast,
} from "../utils/toastNotification/toastNotifications";
import { useQuery } from "@tanstack/react-query";
import Axios from "../axios/axiosInstance";
import { useMutation } from "@tanstack/react-query";

// ============== get all products in category wise ===============

export const useGetProductsCategoryWise = (categoryId) => {
  return useQuery({
    queryKey: ["products", categoryId],
    queryFn: async () => {
      const response = await Axios.get(
        `/api/product/user?categoryId=${categoryId}`
      );
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

export const useGetProductById = (productId) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
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

// ============== get  products from the cart of a particular user ===============

export const useGetProductsFromtheCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await Axios.get("/api/cart/user");
      return response?.data?.data;
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "Failed to fetch products from the cart."
      );
    },
  });
};

// ============== update quantity of the cart product ===============

export const useUpdateQuantityOfAProduct = () => {
  return useMutation({
    mutationFn: async ({ newQuantity, productId }) => {
      const response = await Axios.put("/api/cart/user", {
        quantity: newQuantity,
        productId: productId,
      });
      return response?.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      console.log(error);
      showErrorToast(
        error?.response?.data?.message || "Quantity updation failed. Try again."
      );
    },
  });
};

// ============== update quantity of the cart product ===============

export const useDeleteProductFromCart = () => {
  return useMutation({
    mutationFn: async ({ cartId }) => {
      const response = await Axios.delete(`/api/cart/user/${cartId}`);
      return response?.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "Failed to delete product from cart. Try again."
      );
    },
  });
};

// ============== get total amount of the cart products ===============

export const useCartTotal = () => {
  return useQuery({
    queryKey: ["cartTotal"],
    queryFn: async () => {
      const response = await Axios.get("/api/cart/user/cart-total");
      return response?.data?.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Failed to fetch data. Try again."
      );
    },
  });
};

// ============== add to cart ===============

export const useAddToCart = () => {
  return useMutation({
    mutationFn: async ({ productId, quantity, selectedCapacity }) => {
      const response = await Axios.post("/api/cart/user", {
        productId: productId,
        quantity: quantity,
        selectedCapacity: selectedCapacity,
      });
      return response?.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "Failed to upload add to cart. Try again."
      );
    },
  });
};



