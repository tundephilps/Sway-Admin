import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiMoreVertical, FiX } from "react-icons/fi";
import { LuListFilter } from "react-icons/lu";
import Avatar from "../../assets/Avatars.png";
import Pagination from "./Pagination";
import { AiOutlineDownload } from "react-icons/ai";

const bookings = [
  {
    id: "#1235",
    customer: "Maria Gomez",
    service: "  Sway Signature Manicure-Gel Polish",
    technician: "Sarah Lopez",
    date: "Nov 25, 2024, 10:00 AM",
    status: "Completed",
    details: {
      addOns: ["Glitter XS", "Nail Art XS"],
      prices: {
        service: 235.0,
        addOns: [5.0, 5.0],
        total: 235.0,
      },
      paymentStatus: "PAID",
      paymentMethod: "BANK TRANSFER",
      additionalNotes:
        "Come with a cuticle remover. Call me when you're at my gate.",
    },
  },
  {
    id: "#1235",
    customer: "Maria Gomez",
    service: "  Sway Signature Manicure-Gel Polish",
    technician: "Sarah Lopez",
    date: "Nov 25, 2024, 10:00 AM",
    status: "Upcoming",
    details: {
      addOns: ["Glitter XS", "Nail Art XS"],
      prices: {
        service: 235.0,
        addOns: [5.0, 5.0],
        total: 235.0,
      },
      paymentStatus: "PAID",
      paymentMethod: "BANK TRANSFER",
      additionalNotes:
        "Come with a cuticle remover. Call me when you're at my gate.",
    },
  },
  {
    id: "#1235",
    customer: "Maria Gomez",
    service: "Gel Manicure",
    technician: "Sarah Lopez",
    date: "Nov 25, 2024, 10:00 AM",
    status: "Cancelled",
    details: {
      addOns: ["Glitter XS", "Nail Art XS"],
      prices: {
        service: 235.0,
        addOns: [5.0, 5.0],
        total: 235.0,
      },
      paymentStatus: "PAID",
      paymentMethod: "BANK TRANSFER",
      additionalNotes:
        "Come with a cuticle remover. Call me when you're at my gate.",
    },
  },
  // ... rest of your bookings data
];

const statusClasses = {
  Completed: "text-green-500 bg-green-100",
  Upcoming: "text-blue-500 bg-blue-100",
  Cancelled: "text-red-500 bg-red-100",
};

const BookingDetailsModal = ({ booking, onClose }) => {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
      {/* Modal */}
      <div className="w-96 bg-white h-full shadow-lg pt-6 text-[10px]">
        {/* Modal Booking Details */}
        <div className="px-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Booking Details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 font-bold">
              Booking ID {booking.id}
            </p>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                statusClasses[booking.status]
              }`}
            >
              {booking.status}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Customer & Technician Section */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">CUSTOMER</p>
                <div className="flex items-center gap-2 mt-1">
                  <img
                    src={Avatar}
                    alt={booking.customer}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm">{booking.customer}</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">TECHNICIAN</p>
                <div className="flex items-center gap-2 mt-1">
                  <img
                    src={Avatar}
                    alt={booking.technician}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm">{booking.technician}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Details Section */}
          <div>
            <h3 className=" text-gray-500 mb-2 bg-gray-200 px-2 rounded-sm">
              SERVICE DETAILS
            </h3>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-500">{booking.service}</span>
                <span>AED {booking.details?.prices.service}</span>
              </div>
              <div>
                <p className="text-[#101928] font-semibold">ADD-ONS</p>
              </div>

              {booking.details?.addOns.map((addon, index) => (
                <div key={index} className="flex justify-between">
                  <span className="">{addon}</span>
                  <span className="">
                    AED {booking.details.prices.addOns[index]}
                  </span>
                </div>
              ))}
              <div className="flex justify-between font-semibold pt-2 border-t">
                <span>Service</span>
                <span>AED {booking.details?.prices.total}</span>
              </div>
              <div className="flex justify-between font-semibold  ">
                <span>Add-Ons</span>
                <span>AED {booking.details?.prices.total}</span>
              </div>
              <div className="flex justify-between font-semibold  ">
                <span>Grand Total</span>
                <span>AED {booking.details?.prices.total}</span>
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div>
            <h3 className=" text-gray-500 mb-2 bg-gray-200 px-2 rounded-sm">
              BOOKING INFORMATION
            </h3>
            <div className="space-y-2">
              <div>
                <p className=" text-gray-500">DATE</p>
                <p className="">{booking.date}</p>
              </div>
              <div>
                <p className=" text-gray-500">ADDITIONAL NOTES</p>
                <p className="">{booking.details?.additionalNotes}</p>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <h3 className=" text-gray-500 mb-2 bg-gray-200 px-2 rounded-sm">
              PAYMENT INFORMATION
            </h3>
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">PAYMENT STATUS</p>
                <p className="text-sm text-green-500">
                  {booking.details?.paymentStatus}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">PAYMENT METHOD</p>
                <p className="text-sm">{booking.details?.paymentMethod}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingsTable = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleRowClick = (booking) => {
    setSelectedBooking(booking);
  };

  return (
    <div className="p-6 bg-[#fdfdfd]">
      <div className="bg-white border rounded-lg">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold mb-4 opacity-0">.</h2>
          <div className="inline-flex gap-4">
            <div className="relative border border-gray-300 rounded-lg">
              <FaSearch className="absolute left-2 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search here..."
                className="ml-4 px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm">
                <LuListFilter /> Date
              </button>
              <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm">
                <LuListFilter /> Status
              </button>
              <button className="px-4 border text-black inline-flex items-center gap-2  text-xs font-medium py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition">
                <AiOutlineDownload className="text-2xl" /> Export CSV
              </button>
            </div>
          </div>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f9fafb] text-[#344054] border-b text-sm">
              <th className="py-3 px-4 font-normal">Booking ID</th>
              <th className="py-3 px-4 font-normal">Customer Name</th>
              <th className="py-3 px-4 font-normal">Service</th>
              <th className="py-3 px-4 font-normal">Assigned Technician</th>
              <th className="py-3 px-4 font-normal">Service Date</th>
              <th className="py-3 px-4 font-normal">Status</th>
              <th className="py-3 px-4 font-normal"></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={index}
                className="bg-white text-sm border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(booking)}
              >
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
        <Pagination />
      </div>

      {selectedBooking && (
        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />
      )}
    </div>
  );
};

export default BookingsTable;
