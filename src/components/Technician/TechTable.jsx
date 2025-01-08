import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { LuListFilter } from "react-icons/lu";
import { FiMoreVertical } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import Avatar from "../../assets/Avatars.png";
import { GoClockFill } from "react-icons/go";
import Pagination from "./Pagination";

const TechTable = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1, // Added IDs for each technician
      name: "Maria Gomez",
      contact: { phone: "09065490217", email: "mariagomez@gmail.com" },
      roles: ["NAIL TECHNICIAN", "LASH TECHNICIAN"],
      status: "Available",
    },
    {
      id: 2,
      name: "Maria Gomez",
      contact: { phone: "08065490217", email: "mariagomez@gmail.com" },
      roles: ["MASSAGE THERAPIST"],
      status: "Unavailable",
    },
    {
      id: 3,
      name: "Maria Gomez",
      contact: { phone: "09065490217", email: "mariagomez@gmail.com" },
      roles: ["LASH TECHNICIAN"],
      status: "On Vacation",
    },
  ];

  const roleStyles = {
    "NAIL TECHNICIAN": {
      background:
        "linear-gradient(90deg, rgba(255,192,203,0.3) 0%, rgba(255,192,203,0.1) 100%)",
      color: "#FF69B4",
    },
    "LASH TECHNICIAN": {
      background:
        "linear-gradient(90deg, rgba(0,255,255,0.3) 0%, rgba(0,255,255,0.1) 100%)",
      color: "#00CED1",
    },
    "MASSAGE THERAPIST": {
      background:
        "linear-gradient(90deg, rgba(147,112,219,0.3) 0%, rgba(147,112,219,0.1) 100%)",
      color: "#9370DB",
    },
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Available":
        return (
          <div className="flex items-center gap-2 border py-1 rounded-lg justify-center">
            <BsCheckCircleFill className="text-green-500" />
            <span className="text-sm text-gray-700">{status}</span>
          </div>
        );
      case "Unavailable":
        return (
          <div className="flex items-center gap-2 border py-1 rounded-lg justify-center">
            <IoCloseCircle className="text-red-500" />
            <span className="text-sm text-gray-700">{status}</span>
          </div>
        );
      case "On Vacation":
        return (
          <div className="flex items-center gap-2 border py-1 rounded-lg justify-center">
            <GoClockFill className="text-gray-500" />
            <span className="text-sm text-gray-700">{status}</span>
          </div>
        );
      default:
        return status;
    }
  };

  // Handle row click
  const handleRowClick = (technicianId, event) => {
    // Prevent navigation if clicking on the more options button
    if (event.target.closest(".more-options-button")) {
      return;
    }
    navigate(`/TechnicianDetails`);
  };

  return (
    <div className="bg-white border rounded-lg">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-bold mb-4 opacity-0">.</h2>
        <div className="inline-flex gap-4">
          <div className="relative border border-gray-300 rounded-lg px-2">
            <FaSearch className="absolute left-2 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="ml-4 px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm">
              <LuListFilter /> Filter
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white rounded-md">
          <thead className="bg-[#f9fafb] text-gray-600 text-sm border-b">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Name</th>
              <th className="px-4 py-3 text-left font-medium">
                Contact Details
              </th>
              <th className="px-4 py-3 text-left font-medium">Role</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
              <th className="px-4 py-3 text-left font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                onClick={(e) => handleRowClick(row.id, e)}
                className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
              >
                <td className="px-4 py-3 flex items-center space-x-3">
                  <img
                    src={Avatar}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{row.name}</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  <div className="font-semibold text-blacka">
                    {row.contact.phone}
                  </div>
                  <div className="text-gray-500">{row.contact.email}</div>
                </td>
                <td className="px-4 py-3 flex space-x-2">
                  {row.roles.map((role, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full"
                      style={roleStyles[role]}
                    >
                      {role}
                    </span>
                  ))}
                </td>
                <td className="px-4 py-3">{getStatusIcon(row.status)}</td>
                <td className="px-8 py-3 text-right">
                  <div className="border py-2 rounded-sm more-options-button">
                    <FiMoreVertical className="text-gray-500 cursor-pointer items-center mx-auto flex" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default TechTable;
