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



// Confirmation Toast
export const showConfirmationToast = (onConfirm, message,actionLabel, duration = 4000) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } bg-red-600 p-4 rounded shadow-lg  justify-between items-center font-sansation font-bold text-custom-white`}
    >
      <span >{message}</span>
      <div className="flex space-x-2 justify-center mt-5 gap-4">
        <button
          onClick={() => {
            toast.dismiss(t.id);
            console.log("tid",t.id)
          }}
          className="text-blue-400 p-1 rounded-md bg-white"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            toast.dismiss(t._id);
            onConfirm();  
          }}
          className="text-red-500  p-1 rounded-md bg-white"
        >
         {actionLabel}
        </button>
      </div>
    </div>
  ), {
    duration,
  });
};



