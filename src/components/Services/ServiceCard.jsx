import React, { useState } from "react";
import { FiMoreVertical, FiEdit, FiX } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import ModalAddCategory from "./ModalAddCategory";
import ModalEditCategory from "./ModalEditCategory";

const ServiceCard = ({
  image,
  title,
  price,
  description = "French Manicure uses a simple type of French Manicure uses a simple type of French Manicure uses a simple type of French Manicure uses a simple type of",
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent card click when clicking menu
    setShowMenu((prev) => !prev);
  };

  const handleCardClick = () => {
    setShowModal(true);
    setShowMenu(false);
  };

  return (
    <>
      <div className="relative w-full bg-white p-2 rounded-lg shadow-sm overflow-hidden ">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="py-4 cursor-pointer" onClick={handleCardClick}>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">From AED {price}</p>
        </div>
        <div className="absolute top-3 right-3">
          <button className="p-2 rounded-md bg-white" onClick={toggleMenu}>
            <FiMoreVertical className="text-gray-600" size={20} />
          </button>
          {showMenu && (
            <div className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button className="inline-flex items-center justify-between gap-2 w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-100">
                <p> Active </p> <input type="checkbox" />
              </button>
              <button
                onClick={() => setShowEditModal(true)}
                className="inline-flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FiEdit /> Edit
              </button>
              <button className="inline-flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-100">
                <GoTrash /> Delete
              </button>
            </div>
          )}
          {showEditModal && (
            <ModalEditCategory
              setShowEditModal={setShowEditModal}
              showEditModal={showEditModal}
            />
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-end z-50">
          <div className="bg-white w-full md:w-[400px] h-full overflow-y-auto animate-slide-left">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-4 pt-2">
              <h2 className="text-1xl font-semibold">{title}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <FiX size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-4">
              {/* Card */}
              <div>
                <p className="text-sm font-semibold mb-2">
                  From AED {price}.00
                </p>
                <p className="text-gray-600 text-xs mb-2">{description}</p>

                {/* Service Images */}
                <div className="space-y-4">
                  <div className=" rounded-lg ">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-24 object-cover rounded-lg mb-3"
                    />
                  </div>
                </div>
              </div>

              {/* Additional variations */}
              <p className="text-[10px] bg-gray-100 px-1 text-[#99adae]">
                VARIATION 1
              </p>
              {/* Card */}
              <div className="pt-2 ">
                <div className="inline-flex justify-between items-center w-full py-2">
                  <p>Gel Polish</p>

                  <p className="text-sm font-semibold ">From AED {price}.00</p>
                </div>

                <p className="text-gray-600 text-xs mb-2">{description}</p>

                {/* Service Images */}
                <div className="space-y-4">
                  <div className=" rounded-lg ">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-24 object-cover rounded-lg mb-3"
                    />
                  </div>
                </div>
              </div>

              {/* Additional variations */}
              <p className="text-[10px] bg-gray-100 px-1 text-[#99adae]">
                VARIATION 2
              </p>
              {/* Card */}
              <div className="pt-2 ">
                <div className="inline-flex justify-between items-center w-full py-2">
                  <p>Gel Polish</p>

                  <p className="text-sm font-semibold ">From AED {price}.00</p>
                </div>

                <p className="text-gray-600 text-xs mb-2">{description}</p>

                {/* Service Images */}
                <div className="space-y-4">
                  <div className=" rounded-lg ">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-24 object-cover rounded-lg mb-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Add slide-in animation
const styles = `
  @keyframes slide-left {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  
  .animate-slide-left {
    animation: slide-left 0.3s ease-out;
  }
`;

// Add styles to document
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default ServiceCard;
