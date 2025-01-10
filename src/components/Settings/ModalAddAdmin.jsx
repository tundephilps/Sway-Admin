import React from "react";

import { HiPlus, HiX } from "react-icons/hi";

const ModalAddAdmin = ({ setIsOpen }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative animate-fade-in">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <HiX className="text-xl" />
        </button>

        {/* Icon at the top */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <HiPlus className="text-2xl text-[#ff8691]" />
          </div>
        </div>

        {/* Modal content */}
        <h2 className="text-xl font-semibold text-center mb-2">Add Admin</h2>
        <p className="text-gray-500 text-center text-sm mb-6 ">
          Share the load—add a new admin to keep things running <br /> smoothly!
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8691]"
              placeholder="Frank Ocean"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8691]"
              placeholder="frank@example.com"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff8691] text-white py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalAddAdmin;
