import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import Face from "../../assets/Avatars.png";

const BookingsTable = () => {
  const bookings = [
    {
      customer: "Maria Gomez",
      service: "Gel Manicure",
      date: "Nov 25, 2024, 10:00 AM",
      status: "Upcoming",
      statusColor: "text-blue-500 bg-blue-100",
      avatar: Face, // Replace with the actual image path
    },
    {
      customer: "Maria Gomez",
      service: "Gel Manicure",
      date: "Nov 25, 2024, 10:00 AM",
      status: "Cancelled",
      statusColor: "text-red-500 bg-red-100",
      avatar: Face,
    },
    {
      customer: "Maria Gomez",
      service: "Gel Manicure",
      date: "Nov 25, 2024, 10:00 AM",
      status: "Completed",
      statusColor: "text-green-500 bg-green-100",
      avatar: Face,
    },
    {
      customer: "Maria Gomez",
      service: "Gel Manicure",
      date: "Nov 25, 2024, 10:00 AM",
      status: "Upcoming",
      statusColor: "text-blue-500 bg-blue-100",
      avatar: Face, // Replace with the actual image path
    },
    {
      customer: "Maria Gomez",
      service: "Gel Manicure",
      date: "Nov 25, 2024, 10:00 AM",
      status: "Cancelled",
      statusColor: "text-red-500 bg-red-100",
      avatar: Face,
    },
    {
      customer: "Maria Gomez",
      service: "Gel Manicure",
      date: "Nov 25, 2024, 10:00 AM",
      status: "Completed",
      statusColor: "text-green-500 bg-green-100",
      avatar: Face,
    },
    {
      customer: "Maria Gomez",
      service: "Gel Manicure",
      date: "Nov 25, 2024, 10:00 AM",
      status: "Upcoming",
      statusColor: "text-blue-500 bg-blue-100",
      avatar: Face, // Replace with the actual image path
    },
    {
      customer: "Maria Gomez",
      service: "Gel Manicure",
      date: "Nov 25, 2024, 10:00 AM",
      status: "Cancelled",
      statusColor: "text-red-500 bg-red-100",
      avatar: Face,
    },
    {
      customer: "Maria Gomez",
      service: "Gel Manicure",
      date: "Nov 25, 2024, 10:00 AM",
      status: "Completed",
      statusColor: "text-green-500 bg-green-100",
      avatar: Face,
    },
  ];

  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full border border-gray-200 rounded-xl">
        <thead>
          <tr className="bg-gray-50 text-gray-600 text-sm font-medium">
            <th className="py-3 px-6 text-left">Customer</th>
            <th className="py-3 px-6 text-left">Service</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50 text-gray-700 text-xs"
            >
              <td className="py-3 px-6 flex items-center space-x-3">
                <img
                  src={booking.avatar}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-xs whitespace-nowrap text-black font-medium">
                  {booking.customer}
                </span>
              </td>
              <td className="py-3 px-6">{booking.service}</td>
              <td className="py-3 px-6">{booking.date}</td>
              <td className="py-3 px-6">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${booking.statusColor}`}
                >
                  {booking.status}
                </span>
              </td>
              <td className="py-3 px-6 text-center">
                <button className="text-gray-500 border p-1 rounded-md hover:text-gray-700">
                  <FiMoreVertical size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsTable;
