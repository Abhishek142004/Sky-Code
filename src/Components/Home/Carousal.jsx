import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousal = () => {
  const slides = [
    {
      url: "/assets/carousal/Web Programming.jpg",
      name: "Web Programming",
    },
    { url: "/assets/carousal/Database.jpg", name: "Data-Base" },
    {
      url: "/assets/carousal/DSA.jpg",
      name: "Data-Structure",
    },
    {
      url: "/assets/carousal/Beginner Programming.jpg",
      name: "Programming",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className=" h-[250px] w-[100%] mx-auto px-8 absolute top-32 group inline md:py-3 md:w-[50%] lg:h-[400px]">
      <h1 className="text-gray-800 text-center font-bold text-xl  font-mono md:text-3xl md:pb-3">
        "{slides[currentIndex].name}"
      </h1>
      <div
        style={{ backgroundImage: `url("${slides[currentIndex].url}")` }}
        className="h-full w-full rounded-xl bg-center bg-contain bg-no-repeat duration-1000 bg-opacity-75"
      ></div>
      <div className="left-20  translate-y-[50%] -translate-x-0 top-[50%] bg-gray-800 text-white absolute rounded hidden group-hover:block cursor-pointer ">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="right-20 translate-y-[50%] -translate-x-0 top-[50%] bg-gray-800 text-white absolute rounded hidden group-hover:block cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 py-6 justify-center">
        {slides.map((slide, slideIndex) => (
          <div className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousal;
