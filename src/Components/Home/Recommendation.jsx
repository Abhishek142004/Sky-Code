import React from "react";
import Card from "./Card";

const Recommendation = () => {
  return (
    <div className="h-[500px] w-full top-[720px]  text-gray-800 absolute text-center md:top-[500px] lg:top-[640px]">
      <h1 className="font-bold  text-xl md:text-2xl lg:text-3xl font-serif p-4">
        Recommended Courses
      </h1>
      <div className="flex flex-col md:flex-row items-center md:justify-center">
        <Card
          imgsrc="/assets/Recommendation/C_prog.gif"
          imgalt="Reload"
          title="C Programming"
          desc="C Language Tutorial For Beginners In Hindi (With Notes)"
          link="https://www.youtube.com/watch?v=ZSPZob_1TOk"
        />
        <Card
          imgsrc="/assets/Recommendation/React.gif"
          imgalt="Reload"
          title="React Js"
          desc=" React & Redux Complete Course (2024) with Projects | Notes "
          link="https://www.youtube.com/watch?v=eILUmCJhl64&list=WL&index=1"
        />
        <Card
          imgsrc="/assets/Recommendation/DSA.gif"
          imgalt="Reload"
          title="Data Structure"
          desc="Data Structures and Algorithms in C | Notes"
          link="https://www.youtube.com/watch?v=AT14lCXuMKI&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU"
        />
      </div>
    </div>
  );
};

export default Recommendation;
