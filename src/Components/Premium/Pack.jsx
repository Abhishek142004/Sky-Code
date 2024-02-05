import React from "react";

const Pack = ({ title, price, desc, link }) => {
  return (
    <div className="w-[290px] h-[190px]  m-3 p-6 rounded-xl bg-white shadow-3xl transition duration-500 ease-in-out   transform hover:-translate-x-y-1 hover:scale-110 text-gray-800 flex flex-col items-center space-y-2 border-2 border-white-600 justify-center">
      <h1 className="text-lg md:text-xl font-bold font-sans ">{title}</h1>
      <h1 className="text-sm md:text-lg font-bold  font-sans ">₹{price}</h1>
      <p className="text-sm  p-1 m-1 font-semibold">{desc}</p>
      <button className="border-2 border-black m-1 px-1 md:px-3 mt-1   text-white bg-gray-800 rounded transition duration-500 ease-in-out   transform hover:-translate-x-y-1  hover:bg-teal-500 ">
        <a href={link} target="_blank">
          Pay Now
        </a>
      </button>
    </div>
  );
};

export default Pack;
