import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import Face from "../../assets/Avatars.png";
import { FaSearch } from "react-icons/fa";
import { LuListFilter } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { ImPower } from "react-icons/im";

const data = [
  {
    name: "Maria Gomez",
    contact: "09056490217",
    email: "mariagomez@gmail.com",
    address: "House 170, Road 1, Aldenco Estate, Abu Dhabi",
    tier: "AMBER",
    tierColor: "bg-yellow-400",
    image: Face, // Placeholder image
  },
  {
    name: "Maria Gomez",
    contact: "09056490217",
    email: "mariagomez@gmail.com",
    address: "House 170, Road 1, Aldenco Estate, Abu Dhabi",
    tier: "ROSE",
    tierColor: "bg-pink-400",
    image: Face,
  },
  {
    name: "Maria Gomez",
    contact: "09056490217",
    email: "mariagomez@gmail.com",
    address: "House 170, Road 1, Aldenco Estate, Abu Dhabi",
    tier: "EMERALD",
    tierColor: "bg-green-400",
    image: Face,
  },
  {
    name: "Maria Gomez",
    contact: "09056490217",
    email: "mariagomez@gmail.com",
    address: "House 170, Road 1, Aldenco Estate, Abu Dhabi",
    tier: "AMBER",
    tierColor: "bg-yellow-400",
    image: Face,
  },
  {
    name: "Maria Gomez",
    contact: "09056490217",
    email: "mariagomez@gmail.com",
    address: "House 170, Road 1, Aldenco Estate, Abu Dhabi",
    tier: "ROSE",
    tierColor: "bg-pink-400",
    image: Face,
  },
];

const CustomerTable = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <div className="lg:border border-gray-300 rounded-md">
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
        <table className="table-auto w-full border-collapse ">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700">Name</th>
              <th className="px-4 py-2 text-left text-gray-700">
                Contact Details
              </th>
              <th className="px-4 py-2 text-left text-gray-700">Address</th>
              <th className="px-4 py-2 text-left text-gray-700">Tier</th>
              <th className="px-4 py-2 text-left text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr
                key={index}
                className="border-t text-xs cursor-pointer"
                onClick={(e) => navigate(`/CustomerDetails`)}
              >
                <td className="px-4 py-2 flex items-center space-x-4">
                  <img
                    src={person.image}
                    alt={`${person.name}'s profile`}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-gray-800 font-bold">{person.name}</span>
                </td>
                <td className="px-4 py-2">
                  <p className="text-gray-800 font-semibold">
                    {person.contact}
                  </p>
                  <p className="text-gray-600">{person.email}</p>
                </td>
                <td className="px-4 py-2 text-gray-800">{person.address}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 inline-flex items-center gap-1 text-white rounded-full ${person.tierColor}`}
                  >
                    <ImPower className="text=[10px]" /> {person.tier}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-gray-500 border p-2 rounded-md hover:text-gray-800">
                    <HiDotsVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
