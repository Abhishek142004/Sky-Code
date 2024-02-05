import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Short_nav from "../Components/Course/Short_nav";
import Prog from "../Components/Course/Prog";

const Course = () => {
  return (
    <div>
      <Navbar />
      <Short_nav />
      <Prog />
      <Footer
        svalue="top-[2700px]"
        mvalue="md:top-[1700px]"
        lvalue="lg:top-[1200px]"
      />
    </div>
  );
};

export default Course;
