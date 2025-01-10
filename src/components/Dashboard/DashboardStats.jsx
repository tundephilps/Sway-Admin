import React from "react";
import { FaThermometerHalf } from "react-icons/fa";

const StatsCard = ({ title, value }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border rounded-lg shadow-sm">
      {/* Left Section */}
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center w-10 h-10 bg-red-100 rounded-full">
        <FaThermometerHalf className="text-red-500" />
      </div>
    </div>
  );
};

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-4 px-6 bg-[#fdfdfd] ">
      <StatsCard title="Total Bookings Today" value="25" />
      <StatsCard title="Total Revenue Today" value="AED 1,200" />
      <StatsCard title="Total Revenue Today" value="AED 1,200" />
    </div>
  );
};

export default DashboardStats;
