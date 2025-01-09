import React from "react";
import Navbar from "../../../components/Booking/Navbar";
import DashboardStats from "../../../components/Booking/DashboardStats";
import BookingsTable from "../../../components/Booking/BookingTable";
import { AiOutlineDownload } from "react-icons/ai";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import BookingHeader from "../../../components/Booking/Header";

const Booking = () => {
  return (
    <div className="bg-[#fdfdfd] w-full h-full">
      <Navbar />
      <BookingHeader />
      <DashboardStats />
      {/* Header */}
      <div className="flex flex-row items-center justify-between px-6 py-4 pt-6">
        <h1 className="font-bold text-2xl">All Bookings</h1>
        <button className="px-4 bg-[#ff6875] inline-flex items-center gap-2 text-white text-xs font-medium py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition">
          <FaPlus className="text-1xl" /> Create New Booking
        </button>
      </div>
      <BookingsTable />
    </div>
  );
};

export default Booking;
