import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ svalue, mvalue, lvalue, check }) => {
  return (
    <footer
      className={`h-[360px] w-full ${svalue} text-white absolute text-center bg-gray-800 flex flex-col ${mvalue} ${lvalue}`}
    >
      <div className="flex justify-center gap-10 m-6 ">
        <a
          className="text-white hover:text-teal-400"
          aria-label="Visit TrendyMinds LinkedIn"
          href="https://www.linkedin.com/in/abhishek-yadav-a68157250/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-8"
          >
            <path
              fill="currentColor"
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            ></path>
          </svg>
        </a>
        <a
          className="text-white hover:text-teal-400"
          aria-label="Visit TrendyMinds YouTube"
          href="https://www.youtube.com/channel/UCTdyWpWljeSLww3939zb97g"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="h-8"
          >
            <path
              fill="currentColor"
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            ></path>
          </svg>
        </a>
        <a
          className="text-white hover:text-teal-400"
          aria-label="Visit TrendyMinds Facebook"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="h-8"
          >
            <path
              fill="currentColor"
              d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            ></path>
          </svg>
        </a>
        <a
          className="text-white hover:text-teal-400"
          aria-label="Visit TrendyMinds Instagram"
          href="https://www.instagram.com/abhi.142004"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-8"
          >
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
        </a>
        <a
          className="text-white hover:text-teal-400"
          aria-label="Visit TrendyMinds Twitter"
          href="https://twitter.com/Abhi_14072004"
          target="_blank"
        >
          <svg
            className="h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            ></path>
          </svg>
        </a>
      </div>
      <div className="flex justify between mb-6 md:mb-2">
        <div className="flex flex-col p-1 m-1 content-start md:p-3 md:m-3  ">
          <p className="flex justify-start my-1 md:my-2 font-semibold text-sm md:text-base">
            <svg
              className="h-6 w-6 text-white"
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
              <polyline points="5 12 3 12 12 3 21 12 19 12" />{" "}
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />{" "}
              <rect x="10" y="12" width="4" height="4" />
            </svg>{" "}
            &nbsp;&nbsp; Skycode
          </p>
          <p className="flex justify-start text-sm md:text-base">
            Main Office: Jammu{" "}
          </p>
          <p className="flex justify-start text-sm md:text-base hidden md:block">
            Sanjay Nagar, Digiana{" "}
          </p>
          <p className="flex justify-start text-sm md:text-base hidden md:block">
            Jammu{" "}
          </p>
          <p className="flex justify-start text-sm md:text-base hidden md:block">
            Jammu and Kashmir
          </p>
        </div>
        <div className="flex flex-col p-3 m-1 md:p-6 md:m-3">
          <p className="flex justify-start font-semibold text-sm md:text-base">
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            &nbsp;+9906339615
          </p>
          <p className="flex justify-start  mb-3 md:mb-6 text-sm md:text-base">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +99086784065
          </p>
          <p className="flex justify-start text-sm md:text-base">
            <svg
              className="h-5 w-5 text-white"
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
            &nbsp;&nbsp;abyadav9149@gmail.com
          </p>
          <p className="flex justify-start text-sm md:text-base">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;abhisheky.cs22@bmsce.ac.in
          </p>
        </div>
        <div className={check == 1 ? "hidden" : "block"}>
          <div className="flex  absolute right-10 hidden md:block">
            <svg
              className="h-5 w-5 text-white "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />{" "}
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            &nbsp;&nbsp;
            <Link to="/contact">
              <button
                className="transition duration-500 ease-in-out   transform hover:-translate-x-y-1 hover:scale-110 hover:bg-teal-500  rounded p-1 mx-1 border-2 border-white bg-white text-gray-800
           "
              >
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="text-white " />
      <div className="m-1 p-1 ">Free Courses | Notes | 24/7 Available</div>
      <div className="m-1 p-1 "> All rights are reserved @Skycode </div>
    </footer>
  );
};

export default Footer;
