import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Description = () => {
  const [text] = useTypewriter({
    words: ["C-Programming", "Web Development", "DSA", "React Js", "Database"],
    loop: {},
  });

  return (
    <>
      <div className="flex justify-start flex-col text-gray-800 top-[460px] absolute h-[270px] w-[90%] align-center m-6 pl-12 md:pl-1 md:top-[175px] md:w-[40%] lg:w-[50%] right-4 lg:m-1 lg:p-1">
        <h1 className="font-bold text-xl font-serif pl-4 lg:text-3xl lg:p-4 ">
          Welcome to SkyCode
        </h1>
        <h2 className="font-bold text-lg font-sans lg:text-2xl">
          Learn
          <span className="text-teal-500"> {text}</span>
          <span>
            <Cursor />
          </span>
        </h2>
        <h3 className="font-semibold text-base font-sans lg:text-2xl">
          Easily explore courses, read reviews, and find the perfect fit for
          your goals.
        </h3>
        <h4 className="font-semibold text-base font-sans lg:text-2xl">
          Begin your coding journey with expertly crafted, free courses. Happy
          coding!
        </h4>
        <Link to="/premium">
          <button className="transition duration-500 ease-in-out   transform hover:-translate-x-y-1 hover:scale-125 hover:bg-teal-500  bg-gray-800 text-white  font-medium  rounded-2xl p-1 m-4 border-solid border-2 border-gray-800 lg:font-bold lg:m-8 lg:p-2">
            Explore Premium
          </button>
        </Link>
      </div>
    </>
  );
};

export default Description;
