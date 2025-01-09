import React from "react";
import { useLocation } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import { GrHomeRounded } from "react-icons/gr";
import { BiStoreAlt } from "react-icons/bi";
import { LiaIdCard } from "react-icons/lia";
import { PiUsersThreeLight } from "react-icons/pi";
import { TbCalendarTime } from "react-icons/tb";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { RiSettings4Line } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import Face from "../../assets/Avatars.png";
import Add from "../../assets/Frame.png";

const Sidebar = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    const baseClasses =
      "flex items-center gap-3 p-3 rounded-lg mt-2 cursor-pointer";
    const isActive = location.pathname === path;

    return isActive
      ? `${baseClasses} text-[#2c0d10] bg-[#ffd0d4]`
      : `${baseClasses} text-gray-600 hover:bg-gray-100`;
  };

  return (
    <div className="min-h-full whitespace-nowrap bg-[#f7f7f5]  flex flex-col justify-between">
      {/* Logo and Menu */}
      <div>
        {/* Logo */}
        <div className="pt-4">
          <img src={Logo} alt="Sway Logo" className="h-[132px] mx-auto" />
        </div>

        {/* Menu Items */}
        <nav className="px-2">
          <ul>
            <Link to="/Dashboard" className={getLinkClassName("/Dashboard")}>
              <GrHomeRounded className="text-lg" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link
              to="/ServiceManagement"
              className={getLinkClassName("/ServiceManagement")}
            >
              <BiStoreAlt className="text-lg" />
              <span className="text-sm font-medium">Service Management</span>
            </Link>
            <Link
              to="/TechnicianManagement"
              className={getLinkClassName("/TechnicianManagement")}
            >
              <LiaIdCard className="text-lg" />
              <span className="text-sm font-medium">Technician Management</span>
            </Link>
            <Link
              to="/CustomerManagement"
              className={getLinkClassName("/CustomerManagement")}
            >
              <PiUsersThreeLight className="text-lg" />
              <span className="text-sm font-medium">Customer Management</span>
            </Link>
            <Link
              to="/BookingManagement"
              className={getLinkClassName("/BookingManagement")}
            >
              <TbCalendarTime className="text-lg" />
              <span className="text-sm font-medium">Booking Management</span>
            </Link>
            <Link to="/Reports" className={getLinkClassName("/Reports")}>
              <HiOutlinePresentationChartLine className="text-lg" />
              <span className="text-sm font-medium">Reports</span>
            </Link>
            <Link to="/Settings" className={getLinkClassName("/Settings")}>
              <RiSettings4Line className="text-lg" />
              <span className="text-sm font-medium">Settings</span>
            </Link>
          </ul>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="p-4 pt-[200px]">
        {/* Add Admin */}
        <div className="bg-[#f9faf8] border border-[#e7e5e0] p-3 rounded-lg flex flex-col items-start gap-3 mb-4">
          <img src={Add} />
          <p className="font-bold">Add a new Admin</p>
          <p className="text-xs text-[#a9a9a8]">
            Share the load – add a new admin
            <br />
            to keep things running smoothly!
          </p>
          <div>
            <h4 className="text-sm font-medium text-[#ff6875] inline-flex gap-2">
              <AiOutlinePlus className=" text-lg" /> Add admin
            </h4>
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3 border-t border-[]#a9a9a8 pt-4">
          <img
            src={Face}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <div>
            <p className="text-sm font-bold text-gray-800">Vee Gomez</p>
            <p className="text-xs text-gray-500">vee@sway.spa</p>
          </div>
          <button className="ml-auto text-[454341] text-2xl hover:text-gray-600">
            <MdOutlineLogout />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
