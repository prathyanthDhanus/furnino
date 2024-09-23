import { toast } from "react-hot-toast";

// Success Toast
export const showSuccessToast = (message, duration = 4000) => {
  toast.success(message, {
    duration,
    style: {
      background: "#4CAF50",
      color: "#fff",
      fontFamily: "MyCustomFont, sans-serif",
      fontWeight: "bold",
    },
  });
};

// Error Toast
export const showErrorToast = (message, duration = 4000) => {
  toast.error(message, {
    duration,
    style: {
      background: "#F44336",
      color: "#fff",
      fontFamily: "MyCustomFont, sans-serif",
      fontWeight: "bold",
    },
  });
};

// Custom Toast
export const showCustomToast = (message, options = {}) => {
  toast(message, {
    duration: options.duration || 4000,
    style: {
      background: options.background || "#333",
      color: options.color || "#fff",
      fontFamily: options.fontFamily || "MyCustomFont, sans-serif",
      fontWeight: options.fontWeight || "bold",
      ...options.style,
    },
    ...options,
  });
};

// Promise-based Toast (for async operations)
export const showPromiseToast = (promise, messages) => {
  toast.promise(
    promise,
    {
      loading: messages.loading || "Loading...",
      success: messages.success || "Operation Successful!",
      error: messages.error || "Something went wrong!",
    },
    {
      style: {
        fontFamily: "MyCustomFont, sans-serif",
        fontWeight: "bold",
      },
    }
  );
};
