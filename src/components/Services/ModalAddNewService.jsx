import React, { useState } from "react";
import Search from "../../assets/Search.png";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Emoji from "../../assets/Emoji.png";

const ModalAddNewService = ({ closeModal }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("😊"); // Default emoji

  const onEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji.native);
    setShowPicker(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="bg-white rounded-lg p-6 w-full max-w-md m-4 relative">
        {/* Close Button */}

        {/* Modal Header */}
        <img src={Search} className="mx-auto" />
        <h2 className="text-xl text-center pt-4 font-semibold text-gray-900 mb-4">
          Add New Service
        </h2>

        {/* Modal Content */}
        <div className="inline-flex items-center gap-4">
          <div className="p-2 rounded-full bg-[#fff0f1] flex w-14 items-start justify-start">
            <div className="bg-[#ffd0d4] p-2 rounded-full flex">
              <span className="w-6 h-6 flex items-center justify-center text-xl">
                {selectedEmoji}
              </span>
            </div>
          </div>

          <p
            className="border p-2 rounded-md text-xs cursor-pointer hover:bg-gray-50"
            onClick={() => setShowPicker(!showPicker)}
          >
            Select Icon
          </p>
        </div>

        {/* Emoji Picker Popup */}
        {showPicker && (
          <div className="absolute top-2 right-[-20%] mt-2 z-50">
            <div
              className="fixed inset-0"
              onClick={() => setShowPicker(false)}
            />
            <div className="relative">
              <Picker
                data={data}
                onEmojiSelect={onEmojiSelect}
                theme="light"
                previewPosition="none"
                skinTonePosition="none"
              />
            </div>
          </div>
        )}

        {/* Form */}
        <div className="my-6 ">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#0e121b] mb-2"
          >
            Name of Service
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-[#ff6875] ">
            <input
              type="text"
              id="email"
              placeholder=""
              className="w-full outline-none text-sm text-gray-700"
            />
          </div>
        </div>

        {/* Modal Footer */}
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

export default ModalAddNewService;
