import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange(page); // Callback to parent component
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-3 py-1 rounded-md ${
              i === currentPage
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {i}
          </button>
        );
      } else if (
        (i === currentPage - 2 && i > 2) ||
        (i === currentPage + 2 && i < totalPages - 1)
      ) {
        pageNumbers.push(
          <span key={i} className="px-3 py-1">
            ...
          </span>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 flex items-center"
        disabled={currentPage === 1}
      >
        <AiOutlineLeft />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 flex items-center"
        disabled={currentPage === totalPages}
      >
        <AiOutlineRight />
      </button>
      <input
        type="number"
        className="ml-4 w-16 px-2 py-1 border rounded-md text-center"
        min="1"
        max={totalPages}
        value={currentPage}
        onChange={(e) => handlePageChange(Number(e.target.value))}
      />
    </div>
  );
};

export default function Pagination2() {
  const totalPages = 30;

  const handlePageChange = (page) => {
    console.log("Current Page:", page);
  };

  return (
    <div className="flex justify-center items-center ">
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}
