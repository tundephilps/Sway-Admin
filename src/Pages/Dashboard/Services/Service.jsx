import React, { useState } from "react";
import Navbar from "../../../components/Services/Navbar";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { FiChevronRight } from "react-icons/fi";
import Modal from "../../../components/Services/Modal";
import Emoji from "../../../assets/Emoji.png";

const Service = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const categories = [
    {
      name: "Manicure",
      services: "3 SERVICES",
      icon: Emoji, // Replace with the actual icon/image path
    },
    {
      name: "Pedicure",
      services: "3 SERVICES",
      icon: Emoji, // Replace with the actual icon/image path
    },
    {
      name: "Nail Enhancements",
      services: "3 SERVICES",
      icon: Emoji, // Replace with the actual icon/image path
    },
    {
      name: "Spa Treatment",
      services: "3 SERVICES",
      icon: Emoji, // Replace with the actual icon/image path
    },
    {
      name: "Lashes",
      services: "3 SERVICES",
      icon: Emoji, // Replace with the actual icon/image path
    },
    {
      name: "Add-Ons",
      services: "3 SERVICES",
      icon: Emoji, // Replace with the actual icon/image path
    },
  ];

  return (
    <div className="bg-[#fdfdfd] w-full h-full">
      <Navbar />
      <div className="flex flex-row items-center justify-between p-4">
        <h1 className="font-bold text-2xl">Service Management</h1>
        <button
          onClick={openModal}
          className="px-4 bg-[#ff6875] inline-flex items-center gap-2 text-white text-xs font-medium py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition"
        >
          <MdOutlineKeyboardArrowLeft className="text-2xl" /> Add New Services
        </button>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} openModal={openModal} />}

      <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg border">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 px-24  hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-[#fff0f1] flex items-center justify-center">
                <div className="bg-[#ffd0d4] p-2 rounded-full">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{category.name}</h3>
                <p className="text-xs text-pink-500 font-semibold px-1.5 bg-[#fff0f1] rounded-full w-28 items-center  inline-flex">
                  <LuDot className="text-2xl" /> {category.services}
                </p>
              </div>
            </div>
            <FiChevronRight className="text-red-400 text-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
