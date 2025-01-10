import React from "react";

import Navbar from "../../../components/Technician/Navbar";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Face from "../../../assets/Avatar2.png";
import { BsCheckCircleFill } from "react-icons/bs";

import {
  MdEmail,
  MdLocationOn,
  MdContentCopy,
  MdPhone,
  MdOutlineWorkHistory,
  MdFilterList,
} from "react-icons/md";
import { RxCaretSort } from "react-icons/rx";

import { FiMoreVertical } from "react-icons/fi";

import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";
import { FiThermometer } from "react-icons/fi";
import { FaThermometerHalf } from "react-icons/fa";
import BookingsTable from "../../../components/Technician/BookingsTable";
import Pagination2 from "../../../components/Technician/Pagination2";
import Pagination from "../../../components/Technician/Pagination";

const TechnicianDetails = () => {
  const navigate = useNavigate();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

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
      label: "Customer Repeat Rate",
      value: "25%",
      icon: <FaThermometerHalf className="text-gray-500 text-xl" />,
    },
  ];

  return (
    <div className="bg-[#fdfdfd] w-full h-full">
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
            <p className="text-sm text-[#667185]">Back to techincians</p>
          </div>
          {/* Profile */}
          <div className="flex  items-center gap-3 border-b px-6 pb-4 ">
            <img
              src={Face}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            <div>
              <p className="text-sm font-bold text-gray-800">Maria Gomez</p>
              <p className="text-xs text-gray-500">Added on Jul 11,2024</p>
            </div>
            <div className="flex items-center gap-2 border px-2 py-1 rounded-lg justify-center mb-4">
              <BsCheckCircleFill className="text-green-500 text-xs" />
              <span className="text-xs text-gray-700">Avaliable</span>
            </div>
          </div>
          {/* Personal Details */}
          <div className="space-y-4 p-6 ">
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
            <div>
              <p className="text-xs text-gray-400 uppercase flex items-center space-x-3">
                <span>
                  <MdPhone className="text-sm text-gray-500" />
                </span>
                <span>Role</span>
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {roles.map((role, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-xs rounded-full ${role.color}`}
                  >
                    {role.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Years of Experience Section */}
            <div>
              <p className="text-xs text-gray-400 uppercase flex items-center space-x-4">
                <span>
                  <MdOutlineWorkHistory />
                </span>
                <span>Years of Experience</span>
              </p>
              <p className="text-sm text-gray-700 mt-2 px-7">3</p>
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
                  All Bookings
                </h1>
                <div className="inline-flex w-full">
                  <div className="h-[2px] w-24 bg-pink-500 "></div>
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

export default TechnicianDetails;
