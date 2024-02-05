import React from "react";
import Navbar from "../Components/Navbar";
import Short_nav from "../Components/Course/Short_nav";
import Footer from "../Components/Footer";
import Extra from "../Components/Course/Extra";

const Imp = () => {
  return (
    <div>
      <Navbar />
      <Short_nav />
      <Extra />
      <Footer
        svalue="top-[3640px]"
        mvalue="md:top-[2300px]"
        lvalue="lg:top-[1600px]"
      />
    </div>
  );
};

export default Imp;
