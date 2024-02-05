import React from "react";
import Course_card from "./Course_card";

const Structure = () => {
  return (
    <div className="flex justify-center ">
      <div className="grid  justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 top-[200px] absolute md:px-12 w-[100%] md:w-[100%] ">
        <Course_card
          imgsrc="/assets/Data_Struct/C_dsa.jpg"
          imgalt="Reload"
          title="DSA in C"
          desc="Delve into the foundations of programming with our Data Structures and Algorithms in C Course.From linked lists to sorting algorithms, master the principles."
          link="https://www.youtube.com/watch?v=AT14lCXuMKI&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU"
        />
        <Course_card
          imgsrc="/assets/Data_Struct/Java_dsa.png"
          imgalt="Reload"
          title="DSA in Java"
          desc="Step into the world of Java programming with our Data Structures and Algorithms in Java Course. Explore the versatility of Java in this course "
          link="https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop"
        />
        <Course_card
          imgsrc="/assets/Data_Struct/Cpp_dsa.jpg"
          imgalt="Reload"
          title="DSA in C++"
          desc="Elevate your programming expertise with our Data Structures and Algorithms in C++ Course.Through hands-on projects, gain practical experience."
          link="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"
        />
        <Course_card
          imgsrc="./assets/Programm/New.gif"
          imgalt="Reload"
          title="Coming Soon"
          desc="This is a new Well structured Programming Course with data structure and Algoritm That will be coming soon "
        />
      </div>
    </div>
  );
};

export default Structure;
