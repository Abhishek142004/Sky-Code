import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Premium_content from "../Components/Premium/Premium_content";

const Premium = () => {
  return (
    <>
      <Navbar />
      <Premium_content />
      <Footer
        svalue="top-[1840px]"
        mvalue="md:top-[1300px]"
        lvalue="lg:top-[1300px]"
      />
    </>
  );
};

export default Premium;
