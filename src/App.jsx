import { RouterProvider } from "react-router-dom";
import { userRouter } from "./routes/userRoutes/userRouter";
import { adminRouter } from "./routes/adminRoutes/adminRouter";

function App() {
  const isAdmin = false;

  return (
    <>
      <RouterProvider router={isAdmin ? adminRouter : userRouter} />
    </>
  );
}

export default App;
