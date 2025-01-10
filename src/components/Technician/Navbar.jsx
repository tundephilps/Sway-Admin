import { FiSearch } from "react-icons/fi";
import Avatar from "../../assets/Avatars.png";
import { CiBellOn } from "react-icons/ci";
import Users from "../../assets/users.png";
import Chat from "../../assets/chat.png";

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";

import { TbCalendarTime } from "react-icons/tb";
import { GrHomeRounded } from "react-icons/gr";
import { BiStoreAlt } from "react-icons/bi";
import { LiaIdCard } from "react-icons/lia";
import { PiUsersThreeLight } from "react-icons/pi";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    {
      icon: <GrHomeRounded size={20} />,
      title: "Dashboard",
      path: "/Dashboard",
    },
    {
      icon: <BiStoreAlt size={20} />,
      title: "Services Management",
      path: "/ServiceManagement",
    },
    {
      icon: <LiaIdCard size={20} />,
      title: "Technicians Management",
      path: "/TechnicianManagement",
    },
    {
      icon: <PiUsersThreeLight size={20} />,

      title: "Customer Management",
      path: "/CustomerManagement",
    },
    {
      icon: <TbCalendarTime size={20} />,
      title: "Booking Management",
      path: "/BookingManagement",
    },
    {
      icon: <HiOutlinePresentationChartLine size={20} />,
      title: "Reports",
      path: "/reports",
    },
    {
      icon: <RiSettings4Line size={20} />,
      title: "Settings",
      path: "/Settings",
    },
  ];

  return (
    <div className="flex items-center border-b border-gray-200 justify-between bg-white px-6 py-4 w-full">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <img src={Users} className="text-gray-500 text-lg" />
        <h1 className="text-gray-700 font-medium">Technician Management</h1>
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
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
            >
              <MdOutlineKeyboardArrowDown
                className={`text-[#667185] transform transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                size={24}
              />
            </button>

            {isOpen && (
              <div className="absolute lg:hidden text-xs right-0 mt-4 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-gray-500">{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
