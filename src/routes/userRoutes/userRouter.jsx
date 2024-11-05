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
const CategoryShow = lazy(()=>import("../../pages/userPages/CategoryShowPage"));
const UserLoginwithOTP = lazy(()=>import("../../pages/userPages/UserLoginwithOTP"));
const UserProfile = lazy(()=>import("../../pages/userPages/UserProfile"));
const PaymentSelection = lazy(()=>import("../../pages/userPages/PaymentSelection"));
const MyOrders = lazy(()=>import("../../pages/userPages/MyOrders"));
const AddReview = lazy(()=>import("../../pages/userPages/AddReview"));
const MyOrdersDetailView = lazy(()=>import("../../pages/userPages/MyOrdersDetailView"));
const ViewUserProfile = lazy(()=>import("../../pages/userPages/ViewUserProfile"));
const EditUserProfile = lazy(()=>import("../../pages/userPages/EditProfile"));





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
        path: "/user/shop/:categoryId",
        element: (
          <SuspenseWrapper>
            <Shopping />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/user/shop/",
        element: (
          <SuspenseWrapper>
            <CategoryShow />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/view/product/:productId",
        element: (
          <SuspenseWrapper>
            <ViewProduct />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/product/compare/:productId",
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
      {
        path: "/user/otp/login",
        element: (
          <SuspenseWrapper>
            <UserLoginwithOTP />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/user/create/profile",
        element: (
          <SuspenseWrapper>
            <UserProfile />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/user/payment/selection/:totalAmount",
        element: (
          <SuspenseWrapper>
            <PaymentSelection/>
          </SuspenseWrapper>
        ),
      },
      {
        path: "/create/review",
        element: (
          <SuspenseWrapper>
            <AddReview/>
          </SuspenseWrapper>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <SuspenseWrapper>
            <MyOrders/>
          </SuspenseWrapper>
        ),
      },
      {
        path: "/view/my-orders/:productId",
        element: (
          <SuspenseWrapper>
            <MyOrdersDetailView/>
          </SuspenseWrapper>
        ),
      },
      {
        path: "/view/profile",
        element: (
          <SuspenseWrapper>
            <ViewUserProfile/>
          </SuspenseWrapper>
        ),
      },
      {
        path: "/edit/profile/:addreesId",
        element: (
          <SuspenseWrapper>
            <EditUserProfile/>
          </SuspenseWrapper>
        ),
      },
    
    ],
  },
]);