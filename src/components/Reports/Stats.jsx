import React from "react";
import { FaThermometerHalf } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 ">
      <div className="flex justify-between items-center ">
        {/* Left Section */}
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-1xl font-bold text-gray-800">{value}</p>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center w-10 h-10 bg-red-100 rounded-full">
          <FaThermometerHalf className="text-red-500" />
        </div>
      </div>
      <p className="p-0.5 bg-gray-300 w-20 text-[10px] justify-center rounded-full inline-flex items-center">
        This Month <MdOutlineKeyboardArrowDown />
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-4 px-6 bg-[#fdfdfd] ">
      <StatsCard title="Total Revenue" value="AED 1,200,000" />
      <StatsCard title="Total Bookings" value="200" />
      <StatsCard title="Top Service" value="AED 1,200" />

      <StatsCard title="New Customers" value="20" />
    </div>
  );
};

export default Stats;
