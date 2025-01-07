import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Navbar from "../../../components/Services/Navbar";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import ModalAddCategory from "../../../components/Services/ModalAddCategory";
import AddOnCards from "../../../components/Services/AddOnCards";
import Manicure1 from "../../../assets/Man1.png";
import Manicure2 from "../../../assets/Man3.png";
import Manicure3 from "../../../assets/Man2.png";
import { useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import ModalAddOns from "../../../components/Services/ModalAddOns";

const AddOns = () => {
  const navigate = useNavigate();

  const services = [
    {
      image: Manicure1, // Replace with your image URL
      title: "French Manicure",
      price: "66.00",
    },
    {
      image: Manicure2, // Replace with your image URL
      title: "Sway Signature Manicure",
      price: "66.00",
    },
    {
      image: Manicure3, // Replace with your image URL
      title: "Russian Manicure",
      price: "66.00",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="bg-[#fdfdfd] w-full h-full">
      <Navbar />
      {/* Header */}
      <div className="p-6 inline-flex items-center gap-4">
        <p
          className="p-1 border rounded-md cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <HiOutlineArrowNarrowLeft />
        </p>
        <p className="text-sm text-[#667185]">Back to All Services</p>
      </div>
      <div className="flex flex-row items-center justify-between px-6">
        <h1 className="font-bold text-2xl">Manicure</h1>
        <button
          onClick={openModal}
          className="px-4 bg-[#ff6875] inline-flex items-center gap-2 text-white text-xs font-medium py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition"
        >
          <BsPlus className="text-2xl" /> Add New Add-On
        </button>
      </div>

      {isModalOpen && (
        <ModalAddOns closeModal={closeModal} openModal={openModal} />
      )}

      <div className="grid grid-cols-3 w-full p-6 gap-8 ">
        <AddOnCards />
        <AddOnCards /> <AddOnCards />
      </div>
    </div>
  );
};

export default AddOns;
