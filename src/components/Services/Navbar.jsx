import React from "react";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";
import Avatar from "../../assets/Avatars.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import Users from "../../assets/users.png";
import Chat from "../../assets/chat.png";

const Navbar = () => {
  return (
    <div className="flex items-center border-b border-gray-200 justify-between bg-white px-6 py-4 w-full">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <img src={Users} className="text-gray-500 text-lg" />
        <h1 className="text-gray-700 font-medium">Services Management</h1>
      </div>

      {/* Center Search */}
      <div className="flex">
        <div className=" mx-6 w-[450px] lg:block hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-10 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute top-2.5 left-3 text-gray-400 text-base" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="relative text-gray-500 hover:text-gray-600">
            <CiBellOn className="text-[28px] text-[#667185] font-extrabold" />
            {/* Notification Badge */}
            <span className="absolute top-0 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <button className="relative text-gray-500 hover:text-gray-600">
            <img src={Chat} className="text-base" />
          </button>

          {/* Profile Avatar */}
          <img
            src={Avatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
          <MdOutlineKeyboardArrowDown className="text-[#667185]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
