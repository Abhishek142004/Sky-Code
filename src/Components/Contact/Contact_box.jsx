import React from "react";

const Contact_box = () => {
  return (
    <div className=" flex flex-col absolute top-[132px]  w-full items-center bg-no-repeat bg-contain">
      <h1 className="text-gray-800 flex justify-center text-3xl font-bold md:mb-6">
        Feel Free To Contact Us
      </h1>
      <div className="flex flex-col items-center w-[80%] md:flex-row md:justify-evenly">
        <img
          src="/contact-bg.jpg"
          alt="reload"
          className="h-[320px] w-[400px] rounded-2xl md:mr-6 md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px]"
        ></img>
        <div className=" w-full flex justify-center md:w-[50%] lg:w-[50%]">
          <form className="flex flex-col items-center w-[80%] border-2 rounded-xl border-gray-800  m-3 p-3 h-[400px] md:w-[80%] md:ml-6 md:border-0">
            <h1 className=" flex justify-center text-gray-800 text-3xl my-6 font-extrabold">
              Contact Us
            </h1>
            <div className="flex border-2 border-gray-400 bg-gray-200 p-2 rounded-xl mb-3 w-[100%]">
              <svg
                className="h-8 w-8 text-gray-400 mr-3"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="9" cy="7" r="4" />{" "}
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />{" "}
                <path d="M16 11l2 2l4 -4" />
              </svg>
              <input
                type="text"
                placeholder="Your Name"
                className="text-xl bg-gray-200 w-[80%] outline-none"
              ></input>
            </div>
            <div className="flex border-2 border-gray-400 bg-gray-200 p-2 rounded-xl mb-3 w-[100%]">
              <svg
                className="h-8 w-8 text-gray-400 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input
                type="text"
                placeholder="Your Mail"
                className="text-xl bg-gray-200  w-[80%] outline-none"
              ></input>
            </div>
            <textarea
              rows="4"
              cols="28"
              className="text-xl bg-gray-200 border-2 border-gray-400 rounded-xl p-3 mb-3 w-[100%] outline-none"
              placeholder="Message"
            ></textarea>
            <button className="border-2 border-gray-800 bg-teal-400 px-3 rounded text-xl text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact_box;
