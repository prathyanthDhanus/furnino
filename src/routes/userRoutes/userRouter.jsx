import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import UserLayout from "../../layout/userLayout/UserLayout";
import SuspenseWrapper from "../../components/suspenceWrapper/SuspenceWrapper";




const UserLogin = lazy(() => import("../../pages/userPages/UserLogin"));
const UserRegister = lazy(() => import("../../pages/userPages/UserRegister"));
const ForgotPassword = lazy(() => import("../../pages/userPages/ForgotPassword"));
const LandingPage = lazy(() => import("../../pages/userPages/landingPage/LandingPage"));
const Shopping = lazy(() => import("../../pages/userPages/Shopping"));
const ViewProduct = lazy(() => import("../../pages/userPages/ViewProduct"));
const ProductComparison = lazy(()=>import("../../pages/userPages/ProductComparison"));
const AboutUs = lazy(()=>import("../../pages/userPages/AboutUs"));
const Blog = lazy(()=>import("../../pages/userPages/Blog"));
const Cart = lazy(()=>import("../../pages/userPages/Cart"));
const CheckOut = lazy(()=>import("../../pages/userPages/CheckOut"));
const ContactUs = lazy(()=>import("../../pages/userPages/ContactUs"));
const Wishlist = lazy(()=>import("../../pages/userPages/Wishlist"));


export const userRouter = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: (
          <SuspenseWrapper>
            <LandingPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/user/login",
        element: (
          <SuspenseWrapper>
            <UserLogin />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/user/register",
        element: (
          <SuspenseWrapper>
            <UserRegister />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/user/forgot-password",
        element: (
          <SuspenseWrapper>
            <ForgotPassword />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/user/shop",
        element: (
          <SuspenseWrapper>
            <Shopping />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/view/product",
        element: (
          <SuspenseWrapper>
            <ViewProduct />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/product/compare",
        element: (
          <SuspenseWrapper>
            <ProductComparison />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/cart",
        element: (
          <SuspenseWrapper>
            <Cart />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/about-us",
        element: (
          <SuspenseWrapper>
            <AboutUs />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <SuspenseWrapper>
            <ContactUs />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/blog",
        element: (
          <SuspenseWrapper>
            <Blog/>
          </SuspenseWrapper>
        ),
      },
      {
        path: "/product/checkout",
        element: (
          <SuspenseWrapper>
            <CheckOut />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <SuspenseWrapper>
            <Wishlist />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);