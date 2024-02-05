import React from "react";
import Course_card from "./Course_card";

const Devlopment = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="grid  justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 top-[200px] absolute md:px-12 w-[100%] md:w-[100%] ">
          <Course_card
            imgsrc="/assets/Dev/HTML.png"
            imgalt="Reload"
            title="HTML Course"
            desc="HTML is the language used for website design. This hindi course on html will teach you everything you need to learn about html tags, lists, tables, seo etc."
            link="https://www.youtube.com/watch?v=BsDoLVMnmZs"
          />
          <Course_card
            imgsrc="/assets/Dev/CSS.png"
            imgalt="Reload"
            title="CSS Course"
            desc="Mastering CSS: A Comprehensive Course with Detailed Notes for In-Depth Learning.Elevate Your Web Design Skills with Expert Guidance and Detailed Course Notes."
            link="https://www.youtube.com/watch?v=ESnrn1kAD4E"
          />
          <Course_card
            imgsrc="./assets/Programm/Js.png"
            imgalt="Reload"
            title="JS Programming"
            desc="This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS."
            link="https://www.youtube.com/watch?v=VlPiVmYuoqw"
          />
          <Course_card
            imgsrc="/assets/Dev/React.jpg"
            imgalt="Reload"
            title="React Js"
            desc="Embark on a comprehensive learning journey with our React & Redux Complete Course (2024).Dive into real-world projects."
            link="https://www.youtube.com/watch?v=eILUmCJhl64&list=WL&index=1"
          />
          <Course_card
            imgsrc="/assets/Dev/Tailwind.jpg"
            imgalt="Reload"
            title="Tailwind CSS"
            desc="Immerse yourself in the world of modern web styling with our Tailwind CSS Course. This comprehensive course guides you through the nuances of Tailwind CSS."
            link="https://www.youtube.com/watch?v=_9mTJ84uL1Q"
          />
          <Course_card
            imgsrc="/assets/Dev/Bootstrap.jpg"
            imgalt="Reload"
            title="BootStrap"
            desc="Dive into the realm of responsive web development with our Bootstrap Course Through practical projects and hands-on exercises."
            link="https://www.youtube.com/watch?v=vpAJ0s5S2t0"
          />
          <Course_card
            imgsrc="/assets/Dev/Figma.jpg"
            imgalt="Reload"
            title="Figma Course"
            desc="Unlock the potential of UI/UX design with our Figma Course.This course provides a comprehensive journey through Figma's features."
            link="https://www.youtube.com/watch?v=FxZFKSgpeBc&list=PLuou2gyfaGEud03tcppC1ofbYIcIEwKfm"
          />
          <Course_card
            imgsrc="/assets/Dev/node.jpeg"
            imgalt="Reload"
            title="Node Js"
            desc=" Explore the core concepts, asynchronous programming, and modules that make Node.js a powerful runtime for building scalable web applications."
            link="https://www.youtube.com/watch?v=BLl32FvcdVM"
          />
          <Course_card
            imgsrc="/assets/Dev/Expres.jpg"
            imgalt="Reload"
            title="Express Js"
            desc=" Elevate your web development capabilities with our Express.js Course. Uncover the versatility of this minimalist web application framework for Node.js."
            link="https://www.youtube.com/watch?v=7H_QH9nipNs"
          />
          <Course_card
            imgsrc="/assets/Dev/SQL.jpg"
            imgalt="Reload"
            title="MY SQL"
            desc=" Master the art of relational databases with our MySQL Course. Gain a comprehensive understanding of database design,and SQL queries."
            link="https://www.youtube.com/watch?v=hlGoQC332VM"
          />
          <Course_card
            imgsrc="/assets/Dev/Mongo.png"
            imgalt="Reload"
            title="Mongo DB"
            desc=" Immerse yourself in the realm of NoSQL databases with our MongoDB Course. Explore the flexibility and scalability of MongoDB as a document-oriented database. "
            link="https://www.youtube.com/watch?v=J6mDkcqU_ZE"
          />
          <Course_card
            imgsrc="/assets/Dev/Django.jpg"
            imgalt="Reload"
            title="Python Django"
            desc="Django is a Python-based free and open-source web framework. If you already know Python and want to try web development, you can go with Django."
            link="https://www.youtube.com/watch?v=JxzZxdht-XY"
          />
          <Course_card
            imgsrc="/assets/Dev/PHP.jpg"
            imgalt="Reload"
            title="PHP"
            desc=" PHP is a general-purpose scripting language geared towards web development. This course will give you a complete and proper understanding of PHP concepts."
            link="https://www.youtube.com/watch?v=1SnPKhCdlsU"
          />
          <Course_card
            imgsrc="./assets/Programm/New.gif"
            imgalt="Reload"
            title="Coming Soon"
            desc="This is a new Well structured Web Development Course That will be coming soon "
          />
        </div>
      </div>
    </div>
  );
};

export default Devlopment;
