import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Premium from "./Pages/Premium";
import Course from "./Pages/Course";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrolltoTop";
import Web_dev from "./Pages/Web_dev";
import DSA from "./Pages/DSA";
import Imp from "./Pages/Imp";
import Notes from "./Pages/Notes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/premium" element={<Premium />}></Route>
          <Route exact path="/course_prog" element={<Course />}></Route>
          <Route exact path="/course_web" element={<Web_dev />}></Route>
          <Route exact path="/course_dsa" element={<DSA />}></Route>
          <Route exact path="/course_extra" element={<Imp />}></Route>
          <Route exact path="/notes" element={<Notes />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
