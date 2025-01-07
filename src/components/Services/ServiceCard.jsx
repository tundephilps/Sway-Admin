import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";

const ServiceCard = ({ image, title, price }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <div className="relative w-full bg-white p-2  rounded-lg shadow-sm overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="py-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">From AED {price}</p>
      </div>
      <div className="absolute top-3 right-3">
        <button className="p-2 rounded-md bg-white" onClick={toggleMenu}>
          <FiMoreVertical className="text-gray-600" size={20} />
        </button>
        {showMenu && (
          <div className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
            <button className="inline-flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <FiEdit /> Edit
            </button>
            <button className="inline-flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-100">
              <GoTrash /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
