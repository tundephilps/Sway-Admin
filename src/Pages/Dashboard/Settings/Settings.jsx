import React, { useState } from "react";
import Navbar from "../../../components/Settings/Navbar";
import Profile from "../../../components/Settings/Profile";
import Team from "../../../components/Settings/Team";
import Password from "../../../components/Settings/Password";

const Settings = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("Team");

  // Components to render for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return <Profile />;
      case "Team":
        return <Team />;
      case "Password":
        return <Password />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="bg-[#fdfdfd] w-full h-full">
      <Navbar />
      <div className="  p-6 w-full ">
        <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>
        <p className="text-sm text-gray-500">
          Control your profile setup and integrations
        </p>
        <div className="mt-6 border-b border-gray-200">
          <nav className="flex space-x-6">
            {["Profile", "Team", "Password"].map((tab) => (
              <button
                key={tab}
                className={`pb-2 text-sm font-medium ${
                  activeTab === tab
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-6">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Settings;
