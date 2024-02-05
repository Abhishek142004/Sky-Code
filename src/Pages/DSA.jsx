import React from "react";
import Navbar from "../Components/Navbar";
import Short_nav from "../Components/Course/Short_nav";
import Footer from "../Components/Footer";
import Structure from "../Components/Course/Structure";

const DSA = () => {
  return (
    <div>
      <Navbar />
      <Short_nav />
      <Structure />
      <Footer
        svalue="top-[1900px]"
        mvalue="md:top-[1200px]"
        lvalue="lg:top-[700px]"
      />
    </div>
  );
};

export default DSA;
