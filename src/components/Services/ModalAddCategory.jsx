import React, { useState } from "react";
import Search from "../../assets/Search.png";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Emoji from "../../assets/Emoji.png";

const ModalAddCategory = ({ closeModal }) => {
  const [variations, setVariations] = useState([]);
  const [showVariations, setShowVariations] = useState(false);

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md m-4 relative">
        <img src={Search} className="mx-auto" />
        <h2 className="text-xl text-center pt-4 font-semibold text-gray-900 mb-2">
          Add Manicure Category
        </h2>
        <p className="text-xs text-[#525866]">
          Discover how these features AlignUI with your organization's
          requirements
        </p>

        <div className="my-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#0e121b] mb-2"
          >
            Name of Category
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-[#ff6875]">
            <input
              type="text"
              id="email"
              placeholder=""
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
              Create Variation
            </button>
            <div className="h-[1px] w-full bg-gray-300" />
          </div>
        </div>

        {showVariations && (
          <div className="space-y-4 pt-4">
            {variations.map((variation, index) => (
              <>
                <div key={index}>
                  <div className="flex items-center space-x-2 pb-0">
                    <input
                      type="text"
                      placeholder="e.g Basic"
                      value={variation.name}
                      onChange={(e) =>
                        updateVariation(index, "name", e.target.value)
                      }
                      className="flex-grow px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-300"
                    />
                    <input
                      type="number"
                      placeholder="0.00"
                      value={variation.price}
                      onChange={(e) =>
                        updateVariation(index, "price", e.target.value)
                      }
                      className="w-20 px-2 py-1 text-right border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-300"
                    />
                    <span className="text-gray-500">AED</span>
                    <button
                      onClick={() => deleteVariation(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </>
            ))}

            <button
              onClick={addVariation}
              className="text-red-500 text-xs pt-2 hover:underline focus:outline-none"
            >
              + Add new Variation
            </button>
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

export default ModalAddCategory;
