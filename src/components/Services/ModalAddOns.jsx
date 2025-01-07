import { MdKeyboardArrowDown } from "react-icons/md";
import Search from "../../assets/Search.png";
import React, { useState, useRef, useEffect } from "react";

const ModalAddOns = ({ closeModal }) => {
  const [variations, setVariations] = useState([]);
  const [showVariations, setShowVariations] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const dropdownRef = useRef(null);

  const addVariation = () => {
    setVariations([...variations, { name: "", price: "" }]);
  };

  const updateVariation = (index, field, value) => {
    const updatedVariations = [...variations];
    updatedVariations[index][field] = value;
    setVariations(updatedVariations);
  };

  const deleteVariation = (index) => {
    setVariations(variations.filter((_, i) => i !== index));
  };

  const handleCreateVariation = () => {
    setShowVariations(true);
    if (variations.length === 0) {
      addVariation();
    }
  };

  const services = [
    { id: 1, name: "Manicure" },
    { id: 2, name: "Pedicure" },
    { id: 3, name: "Nails" },
    { id: 4, name: "Spa" },
    { id: 5, name: "Lashes" },
  ];

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleService = (service) => {
    if (selectedServices.some((s) => s.id === service.id)) {
      setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md m-4 relative">
        <img src={Search} className="mx-auto" />
        <h2 className="text-xl text-center pt-4 font-semibold text-gray-900 mb-2">
          Create New Add-Ons
        </h2>

        <div className="my-6" ref={dropdownRef}>
          <label className="block text-sm font-medium text-[#0e121b] mb-2">
            Service Associated with
          </label>
          <div
            className="relative border border-gray-300 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdKeyboardArrowDown className="absolute top-3 right-3" />
            <div className="min-h-[40px] p-2 flex flex-wrap gap-2 cursor-pointer">
              {selectedServices.length > 0 ? (
                selectedServices.map((service) => (
                  <span
                    key={service.id}
                    className="inline-flex items-center border border-red-400 text-[#ff6875] font-semibold text-xs px-2 py-1 rounded-md"
                  >
                    {service.name}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 text-sm">Select services</span>
              )}
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleService(service);
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.some(
                        (s) => s.id === service.id
                      )}
                      onChange={() => {}}
                      className="accent-[#ff6875] h-4 w-4 mr-3"
                    />
                    <span className="text-sm text-gray-700">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="my-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#0e121b] mb-2"
          >
            Name of Add-On
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-[#ff6875]">
            <input
              type="text"
              placeholder="Acrylic Removal"
              className="w-full outline-none text-sm text-gray-700"
            />
          </div>
        </div>
        <div className="">
          {!showVariations && (
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Amount
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#ff6875]">
                <input
                  type="number"
                  placeholder="0.00"
                  className="flex-1 px-4 py-2 text-sm focus:outline-none"
                />
                <span className="px-4 py-2 text-gray-500 text-sm">AED</span>
              </div>
            </div>
          )}

          <div className="mt-4 inline-flex items-center w-full gap-4">
            <div className="h-[1px] w-full bg-gray-300" />
            <button
              onClick={handleCreateVariation}
              className="px-4 py-2 font-medium text-gray-600 whitespace-nowrap border text-xs rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              Add Variations
            </button>
            <div className="h-[1px] w-full bg-gray-300" />
          </div>
        </div>

        {showVariations && (
          <div className="space-y-4 pt-4">
            <div className="inline-flex justify-between gap-4 w-full">
              {/* Per Nail Option */}
              <div>
                <div className="inline-flex items-center gap-2 pb-2">
                  <input
                    type="checkbox"
                    className="accent-[#ff6875] text-white "
                  />
                  <label>Per Nail</label>
                </div>
                <div className="border rounded-md p-2 relative">
                  <input
                    type="number"
                    placeholder="0.00"
                    className="border-none outline-none"
                  />
                  <p className="absolute top-2 right-2">AED</p>
                </div>
              </div>
              {/* Full Set Option */}
              <div>
                <div className="inline-flex items-center gap-2 pb-2">
                  <input
                    type="checkbox"
                    className="accent-[#ff6875] text-white "
                  />
                  <label>Full Set</label>
                </div>
                <div className="border rounded-md p-2 relative">
                  <input
                    type="number"
                    placeholder="0.00"
                    className="border-none outline-none"
                  />
                  <p className="absolute top-2 right-2">AED</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex w-full gap-3">
          <button
            onClick={closeModal}
            className="w-full py-2 text-sm font-medium text-gray-700 border rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button className="w-full py-2 text-sm font-medium text-white bg-[#ff6875] rounded-md hover:bg-red-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddOns;
