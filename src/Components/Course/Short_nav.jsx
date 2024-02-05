import React from "react";
import { Link } from "react-router-dom";

const Short_nav = () => {
  return (
    <div className="flex justify-center">
      <div className=" flex justify-center items-center absolute top-[110px] h-[50px] w-[90%] md:w-[70%] lg:w-[40%] bg-gray-800 rounded-xl p-2">
        <ul
          type="none"
          className="flex justify-center items-center space-x-2 md:space-x-3 "
        >
          <li>
            <Link to="/course_prog">
              <button className="text-white text-xs md:text-lg font-semibold  hover:border-b-2 hover:border-teal-400 transition ">
                Programming
              </button>
            </Link>
          </li>
          <li className="text-teal-400">|</li>
          <li>
            <Link to="/course_web">
              <button className="text-white text-xs md:text-lg font-semibold  hover:border-b-2 hover:border-teal-400 transition">
                Web Development
              </button>
            </Link>
          </li>
          <li className="text-teal-400">|</li>
          <li>
            <Link to="/course_dsa">
              <button className="text-white text-xs md:text-lg font-semibold  hover:border-b-2 hover:border-teal-400 transition">
                DSA
              </button>
            </Link>
          </li>
          <li className="text-teal-400">|</li>
          <li>
            <Link to="/course_extra">
              <button className="text-white text-xs md:text-lg font-semibold  hover:border-b-2 hover:border-teal-400 transition">
                Extra's
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Short_nav;
