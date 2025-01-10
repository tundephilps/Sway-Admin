import React, { useState } from "react";
import { HiDownload, HiPlus, HiDotsVertical, HiX } from "react-icons/hi";
import Face from "../../assets/Avatar2.png";
import ModalAddAdmin from "./ModalAddAdmin";

const Team = () => {
  const [isOpen, setIsOpen] = useState(false);
  const teamMembers = [
    {
      name: "Maria Gomez",
      email: "maria@gmail.com",
      dateAdded: "Nov 25, 2024, 10:00 AM",
    },
    {
      name: "Maria Gomez",
      email: "maria@gmail.com",
      dateAdded: "Nov 25, 2024, 10:00 AM",
    },
    {
      name: "Maria Gomez",
      email: "maria@gmail.com",
      dateAdded: "Nov 25, 2024, 10:00 AM",
    },
    {
      name: "Maria Gomez",
      email: "maria@gmail.com",
      dateAdded: "Nov 25, 2024, 10:00 AM",
    },
    {
      name: "Maria Gomez",
      email: "maria@gmail.com",
      dateAdded: "Nov 25, 2024, 10:00 AM",
    },
    {
      name: "Maria Gomez",
      email: "maria@gmail.com",
      dateAdded: "Nov 25, 2024, 10:00 AM",
    },
    {
      name: "Maria Gomez",
      email: "maria@gmail.com",
      dateAdded: "Nov 25, 2024, 10:00 AM",
    },
  ];

  return (
    <div className="border rounded-md bg-white mx-auto p-6 flex gap-20">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Team Members</h2>
        <p className="text-gray-500 text-sm">
          Invite your colleagues to work faster and collaborate together.
        </p>

        <div className="flex gap-3 pt-6 text-xs whitespace-nowrap">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50">
            <HiDownload className="text-xl" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#ff8691] text-white rounded-md hover:bg-red-600"
          >
            <span>Add new Admin</span>
          </button>

          {isOpen && <ModalAddAdmin isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>

      <div className="bg-white rounded-lg border text-xs w-full">
        <div className="grid grid-cols-3 p-4 border-b bg-[#f9fafb]">
          <div className="text-sm font-medium text-gray-500">Name</div>
          <div className="text-sm font-medium text-gray-500">Email</div>
          <div className="text-sm font-medium text-gray-500">Date Added</div>
        </div>

        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="grid grid-cols-3 p-4 items-center border-b last:border-b-0 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <img src={Face} className="w-10 h-10 rounded-full bg-gray-200" />
              <span className="font-medium">{member.name}</span>
            </div>
            <div className="text-gray-600">{member.email}</div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">{member.dateAdded}</span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <HiDotsVertical className="text-gray-400 text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
