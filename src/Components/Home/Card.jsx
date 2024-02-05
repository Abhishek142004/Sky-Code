import React from "react";

const Card = ({ imgsrc, imgalt, title, desc, link }) => {
  return (
    <div className="w-[290px] h-[300px]  m-6 md:m-6 lg:m-12  rounded-xl bg-gray-400 shadow-3xl transition duration-500 ease-in-out   transform hover:-translate-x-y-1 hover:scale-110 md:hover:scale-125 md:w-[300px] md:h-[280px] lg:w-[300px] lg:h-[350px] flex flex-col items-center">
      <div>
        <img src={imgsrc} alt={imgalt} className="rounded-xl rounded-b-none" />
      </div>
      <h1 className="text-lg font-bold font-sans md:text-xl lg:m-1 lg:p-1 lg:text-2xl">
        {title}
      </h1>
      <p className="text-sm p-1 m-1 font-semibold md:text-xs lg:text-lg">
        {desc}
      </p>
      <button className="border-2 border-black m-1  px-1 md:px-2 mt-1  md:mt-2 text-white bg-gray-800 rounded transition duration-500 ease-in-out   transform hover:-translate-x-y-1  hover:bg-teal-500 ">
        <a href={link} target="_blank">
          Start Now
        </a>
      </button>
    </div>
  );
};

export default Card;
