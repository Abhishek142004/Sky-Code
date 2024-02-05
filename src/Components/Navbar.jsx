import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 flex space-x-30 top-0 w-full fixed z-10 h-[100px]">
        <div>
          <img
            className="h-24 w-24 mx-5 hidden md:block"
            src="/logo.png"
            alt="Logo"
          />
        </div>
        <div className="text-white flex items-center justify-center w-[100%] md:w-[60%]">
          <ul className="flex space-x-3 justify-evenly w-[90%] md:justify-start">
            <li>
              <Link to="/">
                <button className="transition duration-500 ease-in-out transform hover:-translate-x-y-1 hover:scale-125 hover:bg-teal-500 rounded p-1 mx-2">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to="/course_prog">
                <button className="transition duration-500 ease-in-out transform hover:-translate-x-y-1 hover:scale-125 hover:bg-teal-500 rounded p-1 mx-1">
                  Courses
                </button>
              </Link>
            </li>
            <li>
              <Link to="/notes">
                <button className="transition duration-500 ease-in-out transform hover:-translate-x-y-1 hover:scale-125 hover:bg-teal-500 rounded p-1 mx-1">
                  Notes
                </button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="transition duration-500 ease-in-out transform hover:-translate-x-y-1 hover:scale-125 hover:bg-teal-500 rounded p-1 mx-1">
                  Contact
                </button>
              </Link>
            </li>
            <li className="hidden md:block">
              <Link to="/premium">
                <button className="transition duration-500 ease-in-out transform hover:-translate-x-y-1 hover:scale-125 hover:bg-teal-500 rounded p-1 mx-3 ">
                  Get Premium
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
