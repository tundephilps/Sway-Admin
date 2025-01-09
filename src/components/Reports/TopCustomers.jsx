import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Face from "../../assets/Avatar2.png";

const TopCustomers = () => {
  // Dummy data for the customers
  const customers = [
    {
      name: "Natalia Sharp",
      avatar: Face,
      amount: "AED 2000",
    },
    {
      name: "Natalia Sharp",
      avatar: Face,
      amount: "AED 2000",
    },
    {
      name: "Natalia Sharp",
      avatar: Face,
      amount: "AED 2000",
    },
    {
      name: "Natalia Sharp",
      avatar: Face,
      amount: "AED 2000",
    },
  ];

  return (
    <div className="bg-white border rounded-lg px-6 py-2 w-full">
      <h2 className="text-1xl font-semibold border-b pb-2">
        Top Spending Customers
      </h2>
      <ul className="space-y-4 pt-4">
        {customers.map((customer, index) => (
          <li
            key={index}
            className="flex items-center justify-between   rounded-lg hover:bg-gray-100 transition"
          >
            <div className="flex items-center space-x-3">
              <img
                src={customer.avatar}
                alt={customer.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {customer.name}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-[10px] bg-gray-200 p-1 rounded-full font-semibold text-gray-500">
                {customer.amount}
              </p>
              <FiChevronRight className="text-gray-400" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCustomers;
