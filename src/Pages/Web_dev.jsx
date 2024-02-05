import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Short_nav from "../Components/Course/Short_nav";
import Devlopment from "../Components/Course/Devlopment";

const Web_dev = () => {
  return (
    <div>
      <Navbar />
      <Short_nav />
      <Devlopment />
      <Footer
        svalue="top-[6000px]"
        mvalue="md:top-[3600px]"
        lvalue="lg:top-[2200px]"
      />
    </div>
  );
};

export default Web_dev;
