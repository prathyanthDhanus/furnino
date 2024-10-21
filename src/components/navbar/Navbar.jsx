import React from "react";
import { FiUserCheck } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import CustomButton from "../buttton/CustomButton";
import logo from "../../assets/images/Meubel House_Logos-05.png";
import { useNavigate } from "react-router-dom";
import { useHandleLogout } from "../../services/userAuth";


const Navbar = () => {
  const token = localStorage?.getItem("token");
  const handleLogout = useHandleLogout(); 
  const navigate = useNavigate();
  
  return (
    <>
      <div className="grid grid-cols-3 fixed bg-white w-full z-10">
        <div className="flex items-center mx-10 gap-2">
          <img src={logo} alt="logo" className="w-[2.5rem]" />

          <h5 className="font-sansation font-bold text-3xl ">Furnino</h5>
        </div>
        <div>
          <ul className="grid grid-cols-5 font-sansation font-bold flex items-center h-full">
            <li
              className="hover:text-xl cursor-pointer hover:text-custom-yellow "
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-xl cursor-pointer hover:text-custom-yellow "
              onClick={() => navigate("/user/shop")}
            >
              Shop
            </li>
            <li
              className="hover:text-xl cursor-pointer hover:text-custom-yellow "
              onClick={() => navigate("/about-us")}
            >
              About
            </li>
            <li
              className="hover:text-xl cursor-pointer hover:text-custom-yellow "
              onClick={() => navigate("/contact-us")}
            >
              Contact
            </li>
            <li
              className="hover:text-xl cursor-pointer hover:text-custom-yellow "
              onClick={() => navigate("/blog")}
            >
              Blog
            </li>
          </ul>
        </div>
        <div className="flex gap-10 justify-end items-center mx-10 text-2xl">
          <FiUserCheck
            className="cursor-pointer hover:text-custom-yellow  "
            title="Profile"
          />
          <FiSearch
            className="cursor-pointer hover:text-custom-yellow "
            title="Search"
          />
          <IoMdHeartEmpty
            className="cursor-pointer hover:text-custom-yellow "
            title="Wishlist"
            onClick={() => navigate("/wishlist")}
          />
          <BsCart3
            className="cursor-pointer hover:text-custom-yellow "
            title="Cart"
            onClick={() => navigate("/cart")}
          />

          {token ? (
            <CustomButton
              buttonText="Logout"
              type="submit"
              className="w-full my-5 bg-custom-yellow text-custom-white hover:bg-custom-white hover:text-custom-yellow hover:border-custom-yellow text-sm"
              onClick={handleLogout}
            />
          ) : (
            <CustomButton
              buttonText="Login"
              type="submit"
              className="w-full my-5 bg-custom-yellow text-custom-white hover:bg-custom-white hover:text-custom-yellow hover:border-custom-yellow text-sm"
              onClick={()=>navigate("/user/login")}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
