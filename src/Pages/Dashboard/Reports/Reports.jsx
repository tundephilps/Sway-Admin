import React from "react";
import Navbar from "../../../components/Reports/Navbar";
import Stats from "../../../components/Reports/Stats";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuListFilter } from "react-icons/lu";
import RevenueChart from "../../../components/Reports/RevenueChart";
import BookingBreakdown from "../../../components/Reports/BookingBreakdown";
import PeakBookingTimes from "../../../components/Reports/PeakBookingTimes";
import CustomerChart from "../../../components/Reports/CustomerChart";
import TopCustomers from "../../../components/Reports/TopCustomers";

const Reports = () => {
  return (
    <div className="bg-[#fdfdfd] w-full h-full">
      <Navbar />
      <div className="flex justify-between items-center px-6 py-6 bg-[#fdfdfd] ">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Booking Summary</h1>
        </div>
      </div>
      <Stats />
      <div className="flex justify-between items-center px-6 pt-6 bg-[#fdfdfd] ">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Booking Reports</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Today's Date */}
          <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm">
            <LuListFilter /> Date
          </button>
        </div>
      </div>

      <div className="bg-[#fdfdfd] grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Available Technicians */}
        <div className="col-span-2">
          <RevenueChart />
        </div>

        {/* Bookings Overview */}
        <div className="space-y-2">
          <BookingBreakdown />
          <PeakBookingTimes />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-6 pt-6 bg-[#fdfdfd] ">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Customer Reports</h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Today's Date */}
          <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm">
            <LuListFilter /> Date
          </button>
        </div>
      </div>
      <div className="bg-[#fdfdfd] grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <CustomerChart />
        <TopCustomers />
      </div>
    </div>
  );
};

export default Reports;
