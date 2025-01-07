import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

const Tag = ({ text, icon }) => (
  <div className="flex items-center px-2 py-1 bg-pink-100 text-pink-600 text-xs font-medium rounded-full">
    <span className="mr-1">{icon}</span>
    {text}
  </div>
);

const AddOnCards = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <div className="relative w-full bg-white rounded-lg border-[#e7e5e0] border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-pink-100 flex items-center justify-center rounded-full">
            <span className="text-xl">🔮</span>
          </div>
        </div>
        <button
          className="p-2 border rounded-md hover:bg-gray-100"
          onClick={toggleMenu}
        >
          <FiMoreVertical className="text-gray-600" size={20} />
        </button>
        {showMenu && (
          <div className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Edit
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-100">
              Delete
            </button>
          </div>
        )}
      </div>
      <h3 className="mt-4 text-md font-semibold text-gray-800">
        Acrylic Removal Hand
      </h3>
      <div className="flex gap-2 mt-2">
        <Tag text="MANICURE" icon="🖐️" />
        <Tag text="NAILS" icon="💅" />

        <Tag text="PEDICURE" icon="🖐️" />
      </div>
    </div>
  );
};

export default AddOnCards;
