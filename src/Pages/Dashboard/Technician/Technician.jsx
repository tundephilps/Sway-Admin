import React from "react";
import Navbar from "../../../components/Technician/Navbar";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import TechTable from "../../../components/Technician/TechTable";

const Technician = () => {
  return (
    <div className="bg-[#fdfdfd] w-full h-full">
      <Navbar />
      {/* Header */}
      <div className="flex flex-row items-center justify-between px-6 py-4">
        <h1 className="font-bold text-2xl">Technicians</h1>
        <button className="px-4 border text-black inline-flex items-center gap-2  text-xs font-medium py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition">
          <AiOutlineDownload className="text-2xl" /> Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="px-6">
        <TechTable />
      </div>
    </div>
  );
};

export default Technician;
