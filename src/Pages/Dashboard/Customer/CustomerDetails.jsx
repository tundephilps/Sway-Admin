import React, { useState } from "react";

import Navbar from "../../../components/Technician/Navbar";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Face from "../../../assets/Avatar2.png";
import { FiMoon } from "react-icons/fi";
import { VscDebugBreakpointLog } from "react-icons/vsc";

import {
  MdEmail,
  MdLocationOn,
  MdContentCopy,
  MdPhone,
  MdOutlineWorkHistory,
  MdFilterList,
} from "react-icons/md";
import { RxCaretSort } from "react-icons/rx";

import { FiMoreVertical, FiSearch } from "react-icons/fi";
import { FaThermometerHalf, FaTimes } from "react-icons/fa";
import BookingsTable from "../../../components/Technician/BookingsTable";
import Pagination2 from "../../../components/Technician/Pagination2";
import Pagination from "../../../components/Technician/Pagination";
import { ImPower } from "react-icons/im";
import { LuGift } from "react-icons/lu";
import ModalFreeService from "../../../components/Customer/ModalFreeService";

import ModalLoyalityPoints from "../../../components/Customer/ModalLoyalityPoints";
import ModalDiscountCode from "../../../components/Customer/ModalDiscountCode";

const CustomerDetails = () => {
  const navigate = useNavigate();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  const [blacklistEnabled, setBlacklistEnabled] = useState(false);
  const [seendEnabled, setSeendEnabled] = useState(false);

  // PopOut Menu Logic

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const openModal = (modalType) => {
    setIsModalOpen(false); // Close the modal menu
    setActiveModal(modalType); // Set the modal type to open
  };

  const closeModal = () => setActiveModal(null);

  const details = [
    {
      icon: <MdPhone className="text-sm text-gray-500" />,
      label: "PHONE NUMBER",
      value: "09034563542",
    },
    {
      icon: <MdEmail className="text-sm text-gray-500" />,
      label: "EMAIL ADDRESS",
      value: "mariagomez@gmail.com",
    },
    {
      icon: <MdLocationOn className="text-sm text-gray-500" />,
      label: "HOUSE ADDRESS",
      value: "House 170, Road 1, Aldenco Estate, Abu Dhabi",
    },
  ];

  const roles = [
    { name: "NAIL TECHNICIAN", color: "bg-pink-100 text-pink-500" },
    { name: "LASH TECHNICIAN", color: "bg-teal-100 text-teal-500" },
    { name: "LASH TECHNICIAN", color: "bg-teal-100 text-teal-500" },
  ];

  const stats = [
    {
      label: "Total Bookings",
      value: 150,
      icon: <FaThermometerHalf className="text-gray-500 text-xl" />,
    },
    {
      label: "Total Amount Spent",
      value: "AED 1,200",
      icon: <FaThermometerHalf className="text-gray-500 text-xl" />,
    },
  ];

  return (
    <div className="bg-[#fdfdfd] w-full ">
      <Navbar />

      <div className="grid lg:grid-cols-3 grid-cols-1 h-full">
        {/* First Grid */}
        <div className="border-r  ">
          {/* Go back */}
          <div className="px-6 pt-6 pb-4 inline-flex items-center gap-4">
            <p
              className="p-1 border rounded-md cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <HiOutlineArrowNarrowLeft />
            </p>
            <p className="text-sm text-[#667185]">Back to Customer</p>
          </div>
          {/* Profile */}
          <div className="inline-flex justify-between w-full border-b px-6 pb-4 relative">
            <div className="flex  items-center gap-3">
              <img
                src={Face}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <div>
                <p className="text-sm font-bold text-gray-800">Maria Gomez</p>
                <p className="text-xs text-gray-500">Added on Jul 11,2024</p>
              </div>
            </div>

            <button
              className="text-gray-500 border  px-2 rounded-md "
              onClick={toggleMenu}
            >
              <FiMoreVertical />
            </button>

            {isMenuOpen && (
              <div className="absolute bg-white border shadow-md rounded-md w-40 top-12 right-0 text-[10px]">
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="inline-flex items-center gap-2">
                    <FiMoon />
                    Deactivate Account
                  </span>
                  <input type="checkbox" className="toggle-checkbox" />
                </div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={toggleSubMenu}
                >
                  <span className="inline-flex items-center gap-2">
                    <LuGift /> Gift User{" "}
                  </span>{" "}
                  <span>&gt;</span>
                </button>
              </div>
            )}

            {/* Sub Menu */}
            {isSubMenuOpen && (
              <div className="absolute bg-white border shadow-md rounded-md w-40 mt-2 -right-40 -bottom-32 text-[10px]">
                <button
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => openModal("LoyaltyPoints")}
                >
                  Loyalty Points
                </button>
                <button
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => openModal("DiscountCode")}
                >
                  Discount Code
                </button>
                <button
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => openModal("FreeService")}
                >
                  Free Service
                </button>
              </div>
            )}

            {activeModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="">
                  {/* Modal Content */}
                  {activeModal === "LoyaltyPoints" && (
                    <ModalLoyalityPoints closeModal={closeModal} />
                  )}
                  {activeModal === "DiscountCode" && (
                    <ModalDiscountCode closeModal={closeModal} />
                  )}
                  {activeModal === "FreeService" && (
                    <ModalFreeService closeModal={closeModal} />
                  )}
                </div>
              </div>
            )}
          </div>
          {/* Personal Details */}
          <div className="space-y-4 p-6 border-b">
            {details.map((detail, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="mt-1">{detail.icon}</div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 uppercase">
                    {detail.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    {detail.value}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(detail.value)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <MdContentCopy className="text-sm" />
                </button>
              </div>
            ))}
          </div>
          <div className="space-y-4 p-6 border-b">
            <div className="">
              <p className="text-xs text-gray-400 uppercase flex items-center space-x-3">
                <span>
                  <VscDebugBreakpointLog className="text-sm text-gray-500" />
                </span>
                <span>POINTS BALANCE</span>
              </p>
              <p className="px-6 text-sm font-semibold text-gray-700">
                190 Points
              </p>
            </div>
            <div className="">
              <p className="text-xs text-gray-400 uppercase flex items-center space-x-3">
                <span>
                  <ImPower className="text-sm text-gray-500" />
                </span>
                <span>TIER</span>
              </p>
              <span className="px-3 py-1 inline-flex text-xs items-center gap-1 text-white rounded-full bg-[#fe6e87]">
                <ImPower className="text-[10px]" /> ROSE
              </span>
            </div>
          </div>

          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-sm font-semibold text-gray-700">
                Blacklist this customer
              </span>
              <button
                onClick={() => setBlacklistEnabled(!blacklistEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  blacklistEnabled ? "bg-red-600" : "bg-gray-200"
                }`}
                role="switch"
                aria-checked={blacklistEnabled}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    blacklistEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-sm font-semibold text-gray-700">Send</span>
              <button
                onClick={() => setSeendEnabled(!seendEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  seendEnabled ? "bg-red-600" : "bg-gray-200"
                }`}
                role="switch"
                aria-checked={seendEnabled}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    seendEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="col-span-2 p-6">
          <div>
            <p className="font-bold">Analytics</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white justify-between border border-gray-200 rounded-lg p-4"
                >
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-semibold text-gray-800">
                      {stat.value}
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {/* Title and Underline */}
              <div>
                <h1 className="text-sm pt-6 font-medium text-gray-800">
                  Booking History
                </h1>
                <div className="inline-flex w-full">
                  <div className="h-[2px] w-32 bg-pink-500 "></div>
                  <div className="h-[2px] w-full bg-gray-300 "></div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex justify-between items-center">
                <h2 className="text-sm pt-4 font-bold text-gray-800">
                  All Bookings
                </h2>
                <div className="flex items-center space-x-6 text-gray-500">
                  {/* Search */}
                  <button className="flex items-center space-x-2 hover:text-gray-800">
                    <FiSearch className="text-lg" />
                    <span className="text-xs">Search</span>
                  </button>

                  {/* Filter */}
                  <button className="flex items-center space-x-2 hover:text-gray-800">
                    <MdFilterList className="text-lg" />
                    <span className="text-xs">Filter</span>
                  </button>

                  {/* Sort */}
                  <button className="flex items-center space-x-2 hover:text-gray-800">
                    <RxCaretSort className="text-lg" />
                    <span className="text-xs">Sort</span>
                  </button>
                </div>
              </div>

              <BookingsTable />
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
