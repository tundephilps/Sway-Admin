import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Avatar from "../../assets/Avatars.png";

const Technicians = () => {
  return (
    <div className="  rounded-lg  ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 inline-flex items-center gap-3">
          Available Technicians{" "}
          <div className="text-gray-100 text-center h-4 w-4  text-xs bg-gray-600 rounded-full">
            <p>8</p>
          </div>
        </h2>
        <a href="#" className="text-sm text-red-500 flex items-center">
          See all Technicians <FaChevronRight className="ml-1" />
        </a>
      </div>

      {/* Technicians List */}
      <div className="flex  overflow-auto justify-between border px-4 py-5 rounded-lg bg-white border-[#f0f2f5]">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="flex flex-col  items-center space-y-2">
            <div className="w-14 h-14 rounded-full border-2 border-red-300 overflow-hidden">
              <img
                src={Avatar}
                alt="Technician"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-gray-800 font-medium">Ariana Bush</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const BookingsOverview = () => {
  return (
    <div className="p-4 bg-white rounded-lg border border-[#f0f2f5] w-full">
      {/* Header */}
      <h2 className="text-lg font-semibold text-[#0e121b] mb-4 border-b border-[#f0f2f5] pb-2">
        Today's Bookings
      </h2>

      {/* Stats */}
      <p className="text-1xl font-bold text-[#525866] mb-4">25 Bookings</p>

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

const AvaliableTechnicians = () => {
  return (
    <div className="bg-[#fdfdfd] grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Available Technicians */}
      <div className="lg:col-span-2 col-span-3">
        <Technicians />
      </div>

      {/* Bookings Overview */}
      <div className="lg:col-span-1 col-span-3">
        <BookingsOverview />
      </div>
    </div>
  );
};

export default AvaliableTechnicians;
