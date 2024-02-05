import React from "react";
import Course_card from "./Course_card";

const Prog = () => {
  return (
    <div className="flex justify-center ">
      <div className="grid  justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 top-[200px] absolute md:px-12 w-[100%] md:w-[100%] ">
        <Course_card
          imgsrc="/assets/Programm/C_prog.png"
          imgalt="Reload"
          title="C Programming"
          desc="Even if you don't know the ABC of coding, start this course, and I can assure you that you'll be an intermediate-level coder after completion. Get started with C language."
          link="https://www.youtube.com/watch?v=ZSPZob_1TOk"
        />
        <Course_card
          imgsrc="/assets/Programm/Python.jpg"
          imgalt="Reload"
          title="Python Programming"
          desc="This Python Programming in Hindi tutorial is a complete python course in Hindi comprising of 13 Python chapters and 3 Python Projects. Get started with Python "
          link="https://www.youtube.com/watch?v=gfDE2a7MKjA"
        />
        <Course_card
          imgsrc="/assets/Programm/chash.png"
          imgalt="Reload"
          title="C# Programming"
          desc="C# in one video in Hindi has been designed so that you can easily learn all the basic concepts of C# at a single place with proper code examples. Get started with C#"
          link="https://www.youtube.com/watch?v=SuLiu5AK9Ps"
        />
        <Course_card
          imgsrc="/assets/Programm/Java.jpg"
          imgalt="Reload"
          title="Java Programming"
          desc="This Java Programming in Hindi tutorial is meticulously crafted to enable you to grasp all the fundamental concepts of Java in a single video."
          link="https://www.youtube.com/watch?v=UmnCZ7-9yDY"
        />
        <Course_card
          imgsrc="/assets/Programm/Js.png"
          imgalt="Reload"
          title="JS Programming"
          desc="This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS."
          link="https://www.youtube.com/watch?v=VlPiVmYuoqw"
        />
        <Course_card
          imgsrc="/assets/Programm/New.gif"
          imgalt="Reload"
          title="Coming Soon"
          desc="This is a new Well structured Programming Course That will be coming soon "
        />
      </div>
    </div>
  );
};

export default Prog;
