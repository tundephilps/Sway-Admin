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
} from "react-icons/md";

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

  return (
    <div className="bg-[#fdfdfd] w-full h-full">
      <Navbar />

      <div className="grid grid-cols-3 h-full">
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
        <div className="col-span-2 p-6">
          <div>
            <p className="font-bold">Analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianDetails;
