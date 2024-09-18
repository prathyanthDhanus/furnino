import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../../layout/userLayout/UserLayout";
import UserLogin from "../../pages/userPages/UserLogin";
import UserRegister from "../../pages/userPages/UserRegister";
import ForgotPassword from "../../pages/userPages/ForgotPassword";
import LandingPage from "../../pages/userPages/landingPage/LandingPage";
import Shopping from "../../pages/userPages/Shopping";


export const userRouter = createBrowserRouter([
    {
        element:<UserLayout/>,
        children: [
            {path:"/",element:<LandingPage/>},
            {path:"/user/login",element:<UserLogin/>},
            {path:"/user/register",element:<UserRegister/>},
            {path:"/user/forgot-password",element:<ForgotPassword/>},
            {path:"/user/shop",element:<Shopping/>},
        ]
    }
])