import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-[#fdfdfd] ">
      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome Admin,</h1>
        <p className="text-sm text-gray-500">
          Here's an overview of today's activities
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Today's Date */}
        <div className="flex items-center space-x-2 p-2 px-4 border rounded-lg bg-white shadow-sm">
          <div className="bg-[#f0f2f5] rounded-full p-2">
            <FaRegCalendarAlt className="text-gray-600" />
          </div>
          <span className="text-gray-600 text-sm font-medium pr-4">
            <p className="text-[#475467] text-xs">Today's Date</p>
            1st July, 2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
