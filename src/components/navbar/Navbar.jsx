import React, { useState } from "react";
import { FiUserCheck, FiSearch, FiMenu } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import CustomButton from "../buttton/CustomButton";
import logo from "../../assets/images/Meubel House_Logos-05.png";
import { useNavigate } from "react-router-dom";
import { useHandleLogout } from "../../services/userAuth";
import { showConfirmationToast } from "../../utils/toastNotification/toastNotifications";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Track mobile menu state
  const [dialogOpen, setDialogOpen] = useState(false); // Track profile dialog state
  const token = localStorage?.getItem("token");
  const handleLogout = useHandleLogout();
  const navigate = useNavigate();

  const confirmLogout = () => {
    showConfirmationToast(
      () => handleLogout(),
      "Are you sure you want to logout?",
      "Logout"
    );
  };

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle mobile menu
  const toggleDialog = () => setDialogOpen(!dialogOpen); // Toggle profile dialog

  return (
    <div className="fixed w-full z-10 bg-white p-5">
      <div className="flex justify-between items-center px-4 py-2 md:px-10 ">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-[2.5rem]" />
          <h5 className="font-sansation font-bold text-3xl">Furnino</h5>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:grid md:grid-cols-5 font-sansation font-bold items-center h-full gap-6">
          {["Home", "Shop", "About", "Contact", "Blog"].map((item, index) => {
            const routes = {
              Home: "/",
              Shop: "/user/shop",
              About: "/about-us",
              Contact: "/contact-us",
              Blog: "/blog",
            };
            return (
              <li
                key={index}
                className="cursor-pointer hover:text-custom-yellow"
                onClick={() => navigate(routes[item])}
              >
                {item}
              </li>
            );
          })}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          <FiMenu />
        </div>

        {/* Profile, Search, Wishlist, Cart */}
        <div className="hidden md:flex gap-4 items-center text-2xl">
          <div className="flex items-center border border-custom-yellow rounded p-1">
            <input
              type="text"
              className="border-none outline-none px-2 py-1 flex-1 text-sm font-sansation font-regular"
              placeholder="Search"
            />
          </div>

          <FiUserCheck
            title="Profile"
            className="cursor-pointer hover:text-custom-yellow"
            onClick={toggleDialog}
          />

          <IoMdHeartEmpty
            title="Wishlist"
            className="cursor-pointer hover:text-custom-yellow"
            onClick={() => navigate("/wishlist")}
          />
          <BsCart3
            title="Cart"
            className="cursor-pointer hover:text-custom-yellow"
            onClick={() => navigate("/cart")}
          />
          {token ? (
            <CustomButton
              buttonText="Logout"
              type="button"
              className="bg-custom-yellow text-custom-white hover:bg-custom-white hover:text-custom-yellow hover:border-custom-yellow text-sm"
              onClick={confirmLogout}
            />
          ) : (
            <CustomButton
              buttonText="Login"
              type="button"
              className="bg-custom-yellow text-custom-white hover:bg-custom-white hover:text-custom-yellow hover:border-custom-yellow text-sm"
              onClick={() => navigate("/user/login")}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          {["Home", "Shop", "About", "Contact", "Blog"].map((item, index) => {
            const routes = {
              Home: "/",
              Shop: "/user/shop",
              About: "/about-us",
              Contact: "/contact-us",
              Blog: "/blog",
            };
            return (
              <li
                key={index}
                className="cursor-pointer hover:text-custom-yellow"
                onClick={() => navigate(routes[item])}
              >
                {item}
              </li>
            );
          })}
          <div className="flex items-center border border-custom-yellow rounded p-1">
            <input
              type="text"
              className="border-none outline-none px-2 py-1 flex-1 text-sm"
              placeholder="Search"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <FiUserCheck
              title="Profile"
              className="text-2xl cursor-pointer hover:text-custom-yellow"
              onClick={toggleDialog}
            />

            <IoMdHeartEmpty
              title="Wishlist"
              className="text-2xl cursor-pointer hover:text-custom-yellow"
              onClick={() => navigate("/wishlist")}
            />
            <BsCart3
              title="Cart"
              className="text-2xl cursor-pointer hover:text-custom-yellow"
              onClick={() => navigate("/cart")}
            />
          </div>
        </div>
      )}

      {/* Profile Dialog */}
      {dialogOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white p-6 rounded-md shadow-lg z-20">
          <h3 className="text-xl font-sansation font-bold mb-4">User Menu</h3>
          <ul className="space-y-2 font-sansation font-regular">
            {[
              { name: "Profile", path: "/view/profile" },
              { name: "My Orders", path: "/my-orders" },
              { name: "My Reviews", path: "/create/review" },
              { name: "Rewards", path: "/user/rewards" },
              { name: "Notifications", path: "/user/notifications" },
              { name: "Coupons", path: "/user/coupons" },
            ].map((option) => (
              <li
                key={option.name}
                className="cursor-pointer hover:text-custom-yellow"
                onClick={() => {
                  navigate(option.path); // Navigate to the specified route
                  setDialogOpen(false); // Close dialog after selecting an option
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDialog}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-custom-white hover:text-custom-yellow border border-custom-yellow"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
