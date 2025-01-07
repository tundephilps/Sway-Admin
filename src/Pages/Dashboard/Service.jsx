import React from "react";
import Navbar from "../../components/Services/Navbar";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Service = () => {
  return (
    <div className="bg-[#fdfdfd] w-full h-full">
      <Navbar />
      <div className="flex flex-row items-center justify-between p-4">
        <h1 className="font-bold text-2xl">Service Management</h1>
        <button
          type="submit"
          className="px-4 bg-[#ff6875] inline-flex items-center gap-2 text-white text-xs font-medium py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition"
        >
          <MdOutlineKeyboardArrowLeft className="text-2xl" /> Add New Services
        </button>
      </div>
    </div>
  );
};

export default Service;
