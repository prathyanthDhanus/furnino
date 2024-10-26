import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const UserLayout = () => {
  const location = useLocation();

  // Hide navbar and footer for these routes
  const hideNavbarFooter = [
    "/user/login",
    "/user/register",
    "/user/forgot-password",
    "/user/otp/login"
  ].includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <div>
        <Outlet />
      </div>
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

export default UserLayout;
