import React from "react";
import Navbar from "../Components/Navbar";
import Carousal from "../Components/Home/Carousal";
import Description from "../Components/Home/Description";
import Recommendation from "../Components/Home/Recommendation";
import Testimonial from "../Components/Home/Testimonial";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousal />
      <Description />
      <Recommendation />
      <Testimonial />
      <Footer
        svalue="top-[2200px]"
        mvalue="md:top-[1300px]"
        lvalue="lg:top-[1580px]"
      />
    </>
  );
};

export default Home;
