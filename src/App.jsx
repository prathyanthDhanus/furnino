import { RouterProvider } from "react-router-dom";
import { userRouter } from "./routes/userRoutes/userRouter";
import { adminRouter } from "./routes/adminRoutes/adminRouter";
import { Toaster } from "react-hot-toast";

function App() {
  const isAdmin = false;
  // https://chatgpt.com/share/66eee86a-4298-800a-ba04-8bf4b956925a link chatgpt(Blog content)
  return (
    <>
     <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={isAdmin ? adminRouter : userRouter} />
    </>
  );
}

export default App;
