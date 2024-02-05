import React from "react";

const Testimonial = () => {
  return (
    <div className="h-[400px] w-full top-[1830px] text-gray-800 absolute text-center md:top-[920px] lg:top-[1170px]">
      <h1 className="font-bold text-xl font-serif p-1 md:p-2 lg:p-4 md:text-2xl lg:text-3xl">
        Testimonial
      </h1>
      <div className="flex justify-center my-2 lg:my-8">
        <div className="w-[600px] h-[250px] border-2  p-1 lg:p-2 flex flex-col bg-gray-200 m-4 md:mx-4 lg:mx-8">
          <svg
            className="h-8 w-8 text-gray-800"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />{" "}
            <line x1="8" y1="9" x2="16" y2="9" />{" "}
            <line x1="8" y1="13" x2="14" y2="13" />
          </svg>
          <p className="font-semibold p-1 lg:p-3 ">
            I don't have words to thank this man, I'm really grateful to have
            this website in my daily routine. If you're a mere beginner, then
            you can trust this guy and can take his guidence . I can assure you
            that it'll be worth it.
          </p>
          <h1 className="font-bold  text-lg lg:text-xl p-2 justify-start flex">
            Akshat Pachori
          </h1>
          <p className="font-semibold justify-start flex mx-2 lg:mx-3">
            Web developer
          </p>
        </div>
        <div className="w-[600px] h-[250px] border-2  p-1 lg:p-2 flex flex-col bg-gray-200 m-4 md:mx-4 lg:mx-8 hidden md:block">
          <svg
            className="h-8 w-8 text-gray-800"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />{" "}
            <line x1="8" y1="9" x2="16" y2="9" />{" "}
            <line x1="8" y1="13" x2="14" y2="13" />
          </svg>
          <p className="font-semibold p-1 lg:p-3">
            For everyone who wants to level up their #Coding and #Dev skills -
            seriously, this website is for you! Both basic and advanced skills
            are covered on this website, and one can learn according to his
            skill levels.
          </p>
          <h1 className="font-bold text-lg p-1 lg:text-xl lg:p-2 justify-start flex">
            Aditya Kumar
          </h1>
          <p className="font-semibold justify-start flex  mx-2 lg:mx-3 ">
            Web developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
