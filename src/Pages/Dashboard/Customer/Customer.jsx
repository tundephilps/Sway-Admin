import React from "react";
import Navbar from "../../../components/Customer/Navbar";
import { AiOutlineDownload } from "react-icons/ai";
import CustomerTable from "../../../components/Customer/CustomerTable";

const Customer = () => {
  return (
    <div className="bg-[#fdfdfd] w-full h-full">
      <Navbar />
      {/* Header */}
      <div className="flex flex-row items-center justify-between px-6 py-4">
        <h1 className="font-bold text-2xl">Customer</h1>
        <button className="px-4 border text-black inline-flex items-center gap-2  text-xs font-medium py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition">
          <AiOutlineDownload className="text-2xl" /> Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="lg:px-6 px-0">
        <CustomerTable />
      </div>
    </div>
  );
};

export default Customer;
