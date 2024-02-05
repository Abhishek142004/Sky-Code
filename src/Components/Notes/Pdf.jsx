import React from "react";
import Pdf_card from "./Pdf_card";

const Pdf = () => {
  return (
    <div className="top-[140px] absolute w-full">
      <div>
        <h1 className="text-center text-xl lg:text-3xl font-bold font-ubuntu tracking-wider">
          Download Notes By Sky-Code
        </h1>
        <div className="grid  justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 top-[50px] absolute md:px-12 w-[100%] md:w-[100%] ">
          <Pdf_card
            icon="/assets/Notes/HTML.jpg"
            title="HTML"
            link="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/HTML_Complete_Notes.pdf"
          />
          <Pdf_card
            icon="/assets/Notes/Css.jpg"
            title="CSS"
            link="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/CSS_Complete_Notes.pdf"
          />
          <Pdf_card
            icon="/assets/Notes/Js.jpg"
            title="Java Script"
            link="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/JS_Chapterwise_Notes.pdf"
          />
          <Pdf_card
            icon="/assets/Notes/C.jpg"
            title="C Programming"
            link="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/C_Complete_Notes.pdf"
          />
          <Pdf_card
            icon="/assets/Notes/Java.jpg"
            title="Java Programming"
            link="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/Java_Complete_Notes.pdf"
          />
          <Pdf_card
            icon="/assets/Notes/python.jpg"
            title="Python Programming"
            link="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/Java_Complete_Notes.pdf"
          />
          <Pdf_card
            icon="/assets/Notes/sql.jpg"
            title="DBMS"
            link="https://drive.google.com/file/d/1tYw1eRGC5guMbyna74rVOm0t9XYVSJhz/view?usp=sharing"
          />
          <Pdf_card
            icon="/assets/Notes/Android.png"
            title="Android Development"
            link="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/Android_CompleteNotes.pdf"
          />
          <Pdf_card
            icon="/assets/Notes/DSA.jpg"
            title="Data Structure"
            link="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/DSA_CompleteNotes.pdf"
          />
          <Pdf_card icon="/assets/Notes/coming.gif" />
          <div className=" lg:h-[350px] w-[350px] flex justify-center items-center">
            <h1 className="text-gray-800 font-bold  text-2xl lg:text-3xl font-dance bottom-0 ">
              New Notes Coming Soon .....
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdf;
