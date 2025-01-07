import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

export default () => {
  const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10"]);
  const [currentPage, setCurrentPage] = useState("1");

  return (
    <div className=" mx-auto  p-4 text-gray-600 ">
      <div className="hidden items-center justify-between text-sm md:flex">
        <div>Page 1 of 30</div>
        <div className="flex items-center gap-12" aria-label="Pagination">
          <ul className="flex items-center gap-1">
            {pages.map((item, idx) => (
              <li key={item}>
                {item == "..." ? (
                  <div>{item}</div>
                ) : (
                  <a
                    href="javascript:void(0)"
                    aria-current={currentPage == item ? "page" : false}
                    className={`px-3 py-2 rounded-lg duration-150 hover:text-[#ff6875] hover:bg-[#fff0f1] ${
                      currentPage == item
                        ? "bg-[#fff0f1] text-[#ff6875] font-medium"
                        : ""
                    }`}
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="inline-flex items-center gap-4 text-[#344054] font-semibold">
          <div className="hover:text-indigo-600 border gap-2  w-24 p-2 inline-flex items-center justify-center rounded-md">
            <IoIosArrowRoundBack /> Previous
          </div>

          <div className="hover:text-indigo-600 border gap-2  w-24 p-2 inline-flex items-center justify-center rounded-md">
            Next <IoIosArrowRoundForward />
          </div>
        </div>
      </div>
      {/* On mobile version */}
      {/* <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
        <div className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">
          Previous
        </div>
        <div className="font-medium">SHOWING 1-10 OF 120</div>
        <div className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">
          Next
        </div>
      </div> */}
    </div>
  );
};
