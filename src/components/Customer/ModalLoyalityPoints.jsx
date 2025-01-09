import React, { useState } from "react";

import { FaGift, FaTimes } from "react-icons/fa";

const ModalLoyalityPoints = ({ closeModal }) => {
  const [giftType, setGiftType] = useState("");
  const [service, setService] = useState("");

  return (
    <div className="bg-white shadow-lg rounded-lg w-96 p-6 relative">
      <div className="flex justify-center mb-4">
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <FaTimes />
        </button>
        <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center">
          <FaGift size={24} />
        </div>
      </div>
      <h2 className="text-lg font-semibold text-center mb-2">
        Explore AlignUI using this side navigation
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Discover how these features AlignUI with your organization’s
        requirements.
      </p>
      <div className="mb-4">
        <label
          htmlFor="giftType"
          className="block text-sm font-medium text-gray-700"
        >
          Gift Type
        </label>
        <select
          id="giftType"
          value={giftType}
          onChange={(e) => setGiftType(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
        >
          <option value="">Loyality Points</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Points
        </label>
        <input
          id="service"
          type="number"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
        />
      </div>
      <button
        className="w-full bg-[#ff8691] cursor-pointer text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300"
        onClick={closeModal}
      >
        Apply
      </button>
    </div>
  );
};

export default ModalLoyalityPoints;
