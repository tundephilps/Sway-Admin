import React from "react";

const PeakBookingTimes = () => {
  return (
    <div className="bg-white  border rounded-lg p-4 w-full">
      <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">
        Peak Booking Times
      </h3>
      <div className="flex justify-around items-center text-center pt-2">
        <div className="">
          <p className="text-xs text-gray-500">Saturdays</p>
          <p className="text-1xl font-bold text-gray-800">3PM–5PM</p>
        </div>
        <div className="h-12 w-[1px] bg-gray-300" />
        <div>
          <p className="text-xs text-gray-500">Fridays</p>
          <p className="text-1xl font-bold text-gray-800">4PM–8PM</p>
        </div>
      </div>
    </div>
  );
};

export default PeakBookingTimes;
