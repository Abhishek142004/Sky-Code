import React from "react";
import Navbar from "../Components/Navbar";
import Contact_box from "../Components/Contact/Contact_box";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Contact_box />
      <Footer
        svalue="top-[1020px]"
        mvalue="md:top-[630px]"
        lvalue="lg:top-[630px]"
        check="1"
      />
    </>
  );
};

export default Contact;
