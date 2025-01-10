import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { LuListFilter } from "react-icons/lu";
import Avatar from "../../assets/Avatars.png";
import Pagination from "./Pagination";

const bookings = [
  {
    id: "#1235",
    customer: "Maria Gomez",
    service: "Gel Manicure",
    technician: "Maria Gomez",
    date: "Nov 25, 2024, 10:00 AM",
    status: "Completed",
  },
  {
    id: "#1235",
    customer: "Maria Gomez",
    service: "Gel Manicure",
    technician: "Maria Gomez",
    date: "Nov 25, 2024, 10:00 AM",
    status: "Upcoming",
  },
  {
    id: "#1235",
    customer: "Maria Gomez",
    service: "Gel Manicure",
    technician: "Maria Gomez",
    date: "Nov 25, 2024, 10:00 AM",
    status: "Cancelled",
  },
  {
    id: "#1235",
    customer: "Maria Gomez",
    service: "Gel Manicure",
    technician: "Maria Gomez",
    date: "Nov 25, 2024, 10:00 AM",
    status: "Upcoming",
  },
  {
    id: "#1235",
    customer: "Maria Gomez",
    service: "Gel Manicure",
    technician: "Maria Gomez",
    date: "Nov 25, 2024, 10:00 AM",
    status: "Upcoming",
  },
  // ... other bookings
];

const statusClasses = {
  Completed: "text-green-500 bg-green-100",
  Upcoming: "text-blue-500 bg-blue-100",
  Cancelled: "text-red-500 bg-red-100",
};

const BookingsTable = () => {
  return (
    <div className="p-4 md:p-6 bg-[#fdfdfd]">
      <div className="bg-white border rounded-lg">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 space-y-4 md:space-y-0">
          <h2 className="text-xl font-bold">Today's Bookings</h2>

          <div className="flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:gap-4">
            <div className="relative w-full ">
              <FaSearch className="absolute left-2 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search here..."
                className="w-full   px-8 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="flex gap-2 md:gap-4">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm">
                <LuListFilter /> Date
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm">
                <LuListFilter /> Status
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f9fafb] text-[#344054] border-b text-sm">
                <th className="py-3 px-4 font-normal">Booking ID</th>
                <th className="py-3 px-4 font-normal">Customer Name</th>
                <th className="py-3 px-4 font-normal">Service</th>
                <th className="py-3 px-4 font-normal">Assigned Technician</th>
                <th className="py-3 px-4 font-normal">Date</th>
                <th className="py-3 px-4 font-normal">Status</th>
                <th className="py-3 px-4 font-normal"></th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} className="bg-white text-sm border-b">
                  <td className="py-3 px-4">{booking.id}</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <img
                      src={Avatar}
                      alt="customer"
                      className="w-8 h-8 rounded-full"
                    />
                    {booking.customer}
                  </td>
                  <td className="py-3 px-4">{booking.service}</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <img
                      src={Avatar}
                      alt="technician"
                      className="w-8 h-8 rounded-full"
                    />
                    {booking.technician}
                  </td>
                  <td className="py-3 px-4">{booking.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        statusClasses[booking.status]
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="border py-2 px-1 rounded-sm">
                      <FiMoreVertical className="text-gray-500 cursor-pointer items-center mx-auto flex" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden">
          {bookings.map((booking, index) => (
            <div key={index} className="p-4 border-b last:border-b-0">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <img
                    src={Avatar}
                    alt="customer"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{booking.customer}</p>
                    <p className="text-sm text-gray-500">{booking.service}</p>
                  </div>
                </div>
                <button className="border p-1 rounded-sm">
                  <FiMoreVertical className="text-gray-500" />
                </button>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Booking ID:</span>
                  <span>{booking.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Technician:</span>
                  <span className="flex items-center gap-2">
                    <img
                      src={Avatar}
                      alt="technician"
                      className="w-6 h-6 rounded-full"
                    />
                    {booking.technician}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span>{booking.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Status:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      statusClasses[booking.status]
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default BookingsTable;
