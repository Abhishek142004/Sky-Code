import React from "react";

const Course_card = ({ imgsrc, imgalt, title, desc, link }) => {
  return (
    <div className=" w-[250px] h-[350px] m-6 pb-3 md:m-6 lg:m-12 rounded-xl bg-white md:w-[320px] md:h-[420px] lg:w-[300px] lg:h-[390px] overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-2xl">
      <div className="relative w-full h-2.5/5">
        <img
          src={imgsrc}
          alt={imgalt}
          className="w-full h-full object-cover rounded-xl rounded-b-none"
        />
      </div>
      <div className=" flex flex-col items-center p-3">
        <h1 className="text-lg font-bold font-sans md:text-xl lg:m-1 lg:p-1 lg:text-lg">
          {title}
        </h1>
        <p className="text-sm mb-3 font-semibold md:text-base lg:text-sm">
          {desc}
        </p>
        {link && (
          <button className="border-2 absolute bottom-0 mb-6 border-black m-1 px-1 md:px-2 mt-1 md:mt-2 text-white bg-gray-800 rounded transition duration-500 ease-in-out transform hover:-translate-x-y-1 hover:bg-teal-500 hover:text-gray-800 hover:font-semibold">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Start Now
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default Course_card;
