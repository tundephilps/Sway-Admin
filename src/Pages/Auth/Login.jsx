import React, { useState } from "react";
import Logo from "../../assets/Logo.png";

import { FiMail, FiLock } from "react-icons/fi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full h-screen bg-[#fff0f1] flex items-center justify-center">
      <div className="bg-white lg:w-[464px] w-full p-6 rounded-lg border border-[#e1e4ea]">
        <img src={Logo} className="h-[132px] w-[156px] mx-auto" />
        <p className="text-center font-extrabold text-[24px]">
          Welcome Back, Admin
        </p>
        <p className="text-center text-[#645d5d]">
          Use your work email to sign in
        </p>
        <form className=" py-6">
          {/* Email Address Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#0e121b] mb-2"
            >
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-[#ff6875] ">
              <FiMail className="text-gray-400 mr-2" />
              <input
                type="email"
                id="email"
                placeholder="vee@sway.spa"
                className="w-full outline-none text-sm text-gray-700"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#0e121b] mb-2"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-[#ff6875] ">
              <FiLock className="text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                className="w-full outline-none text-sm text-gray-700"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 focus:outline-none"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#ff6875] text-white text-sm font-medium py-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition"
          >
            Log into Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
