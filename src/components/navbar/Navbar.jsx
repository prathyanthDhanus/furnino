import React from "react";
import { FiUserCheck } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import CustomButton from "../buttton/CustomButton";
import logo from "../../assets/images/Meubel House_Logos-05.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="flex items-center mx-10 gap-2">
          <img src={logo} alt="logo" className="w-[2.5rem]" />

          <h5 className="font-sansation font-bold text-3xl ">Furnino</h5>
        </div>
        <div>
          <ul className="grid grid-cols-4 font-sansation font-bold flex items-center h-full">
            <li className="hover:text-xl cursor-pointer hover:text-custom-yellow ">
              Home
            </li>
            <li className="hover:text-xl cursor-pointer hover:text-custom-yellow ">
              Shop
            </li>
            <li className="hover:text-xl cursor-pointer hover:text-custom-yellow ">
              About
            </li>
            <li className="hover:text-xl cursor-pointer hover:text-custom-yellow ">
              Contact
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
          />
          <BsCart3
            className="cursor-pointer hover:text-custom-yellow "
            title="Cart"
          />
          <CustomButton
            buttonText="Login"
            type="submit"
            className="w-full my-5 bg-custom-yellow text-custom-white hover:bg-custom-white hover:text-custom-yellow hover:border-custom-yellow text-sm"
            onClick={()=>navigate("/user/login")}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
