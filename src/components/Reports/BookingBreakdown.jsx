import React from "react";

const BookingBreakdown = () => {
  return (
    <div className="p-4 bg-white rounded-lg border border-[#f0f2f5] w-full">
      {/* Header */}
      <h2 className="text-lg font-semibold text-[#0e121b] mb-4 border-b border-[#f0f2f5] pb-2">
        Today's Bookings
      </h2>

      {/* Stats */}
      <p className="text-1xl font-bold text-[#525866] mb-4">
        250 Total Bookings
      </p>

      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="flex items-center gap-1">
          <div className="h-2 flex-1 bg-green-500 rounded-l-full"></div>
          <div className="h-2 flex-1 bg-blue-500"></div>
          <div className="h-2 flex-1 bg-red-500 rounded-r-full"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 pt-2.5">
          <span className="flex items-center space-x-1 ">
            <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
            <span>Completed</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
            <span>Upcoming</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
            <span>Cancelled</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingBreakdown;
