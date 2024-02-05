import React from "react";

const Pdf_card = ({ icon, title, link }) => {
  return (
    <div className=" w-[250px] h-[270px] m-6 pb-3 md:m-6 lg:m-12 rounded-xl bg-white md:w-[320px] md:h-[300px] lg:w-[280px] lg:h-[280px] overflow-hidden transition-transform duration-300 ease-in-out border-4 border-gray-400 transform hover:scale-105 shadow-2xl">
      <div className=" flex flex-col items-center justify-center p-3">
        <div className="relative w-full h-[47%] flex justify-center">
          <img src={icon} alt="Reload" className="mb-3" />
        </div>
        <h1 className="text-lg font-bold font-sans md:text-xl lg:m-1 lg:p-1 lg:text-xl">
          {title}
        </h1>
        {link && <p>Download Notes</p>}
        {link && (
          <button className="border-2 absolute bottom-0 mb-6 border-black m-1 px-1 md:px-2 mt-1 md:mt-2 text-white bg-gray-800 rounded transition duration-500 ease-in-out transform hover:-translate-x-y-1 hover:bg-teal-500 hover:text-gray-800 hover:font-semibold">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default Pdf_card;
