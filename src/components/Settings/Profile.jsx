import React, { useState } from "react";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove the selected image
  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white border rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-800">
          Profile Settings
        </h2>
        <p className="text-sm text-gray-500">These are your personal details</p>

        {/* Image Upload Section */}
        <div className="mt-4 flex flex-row items-center">
          <div className="relative w-20 h-20">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Uploaded"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">No Image</span>
              </div>
            )}
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs px-2 font-semibold">Upload Image</p>
            <p className="text-xs px-2 text-gray-500">
              Min 400x400px, PNG or JPEG
            </p>

            <div className="inline-flex items-center px-2 gap-2">
              {selectedImage && (
                <button
                  className="px-3 py-1 text-sm font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-200"
                  onClick={handleRemoveImage}
                >
                  Remove
                </button>
              )}
              <div className="">
                <label
                  htmlFor="upload"
                  className="px-2 py-1 text-sm font-medium text-gray-700 border rounded-lg cursor-pointer hover:bg-gray-300"
                >
                  Change
                  <input
                    id="upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Placeholder text..."
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Placeholder text..."
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between gap-2">
          <button className="px-4 w-full py-2 text-sm font-medium text-gray-700 border rounded-lg hover:bg-gray-300">
            Cancel
          </button>
          <button className="px-4 w-full py-2 text-sm font-medium text-white bg-[#ff8691] rounded-lg hover:bg-red-600">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
