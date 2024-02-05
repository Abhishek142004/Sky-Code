import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Pdf from "../Components/Notes/Pdf";

const Notes = () => {
  return (
    <div>
      <Navbar />
      <Pdf />
      <Footer
        svalue="top-[3500px]"
        mvalue="md:top-[2000px]"
        lvalue="lg:top-[1350px]"
      />
    </div>
  );
};

export default Notes;
