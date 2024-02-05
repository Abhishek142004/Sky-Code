import React, { useRef } from "react";
import Pack from "./Pack";

const Premium_content = () => {
  const targetSectionRef = useRef(null);

  const scrollToSection = () => {
    targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-white h-[1500px] w-full top-[100px] absolute">
      <div className="text-black mt-6 mb-[40px] flex items-center flex-col">
        <div className="flex items-center space-x-2 md:space-x-9 mb-3">
          <img
            src="\assets\premium\crown.gif"
            alt="Reload"
            className="w-24 h-24 rounded-xl"
          />
          <h1 className="font-dance text-4xl md:text-6xl font-bold mb-3 md:mb-6">
            Sky-Code
          </h1>
          <img
            src="\assets\premium\crown.gif"
            alt="Reload"
            className="w-24 h-24 rounded-xl"
          />
        </div>
        <p className="text-lg md:text-2xl font-semibold md:font-bold text-teal-400 font-ubuntu  tracking-widest mb-12">
          Code Upto Sky : Push Your Limits
        </p>
        <div className="md:flex space-x-3 lg:space-x-6 md:mb-12 md:items-center hidden md:block">
          <p className="text-black text-xl lg:text-4xl font-semibold  ">
            Premium Features:
          </p>
          <p className="text-lg lg:text-3xl font-semibold  ">
            Free Courses | Free Notes | Personalized Courses
          </p>
        </div>
        <button
          onClick={scrollToSection}
          className="transition duration-500 ease-in-out transform hover:-translate-x-y-1 hover:scale-125 hover:bg-teal-500  rounded-xl p-2 mb-3 md:mb-6 text-lg  md:text-xl border-2 border-gray-800 bg-teal-400  font-semibold text-black"
        >
          Get Premium
        </button>
        <p className="font-hairline text-red-700 ">Restrictions apply. </p>
      </div>
      <div className="text-white flex flex-col items-center mb-6 md:mb-24">
        <p className=" flex text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-12 text-black">
          "Empowering Minds"
          <span className="hidden mx-3 md:block">| "Unleashing Potential"</span>
        </p>
        <div className="flex flex-col md:flex-row justify-around w-full items-center text-black">
          <div className="flex flex-col items-center text-lg font-semibold ">
            <img
              src="\assets\premium\coding.gif"
              className="h-36 pb-3"
              alt="Reload"
            ></img>
            <p ref={targetSectionRef}>Code-In-Depth</p>
          </div>
          <div className="flex flex-col items-center text-lg font-semibold">
            <img src="\assets\premium\course.gif" alt="Reload"></img>
            <p>Personalized Course</p>
          </div>
          <div className="flex flex-col items-center text-lg font-semibold">
            <img src="\assets\premium\notes.gif" alt="Reload"></img>
            <p>Free Notes</p>
          </div>
        </div>
      </div>
      <p className="text-xl md:text-3xl font-bold mb-3 md:mb-12 text-black text-center">
        Pick a Membership that fits You
      </p>
      <div className="flex flex-col items-center md:flex-row md:justify-evenly">
        <Pack
          title="Individual Pack"
          price="129"
          desc="All Premium Features Unlocked for one year and acess upto 2 devices "
        />
        <Pack
          title="Friends Pack"
          price="299"
          desc="All Premium Features Unlocked for one year and acess upto 5 devices "
        />
        <Pack
          title="Institutional Pack"
          price="4999"
          desc="All Premium Features Unlocked for one year and acess upto 100 devices "
        />
      </div>
      <p className="text-base font-semibold text-gray-800 text-center my-3 ">
        Doesn't Renew Automatically
      </p>
    </div>
  );
};

export default Premium_content;
