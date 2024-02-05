import React from "react";
import Course_card from "./Course_card";

const Extra = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="grid  justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 top-[200px] absolute md:px-12 w-[100%] md:w-[100%] ">
        <Course_card
          imgsrc="/assets/Extra_imp/ML.jpg"
          imgalt="Reload"
          title="Machine Learning"
          desc="Machine Learning is one of the exciting topics nowadays. And if you want to get a glimpse of ML, don't think twice. "
          link="https://www.youtube.com/watch?v=GwIo3gDZCVQ"
        />
        <Course_card
          imgsrc="/assets/Extra_imp/App.jpg"
          imgalt="Reload"
          title="Android Development"
          desc="Android Development is one of the booming career options nowadays, and many people are learning Android because it feels so good to create own app. "
          link="https://www.youtube.com/watch?v=mXjZQX3UzOs"
        />
        <Course_card
          imgsrc="/assets/Extra_imp/gpt.jpg"
          imgalt="Reload"
          title="Chat Gpt"
          desc="Embark on an enlightening journey into the realm of conversational artificial intelligence with our ChatGPT Course. {In English Only} "
          link="https://www.youtube.com/watch?v=tjKw_yF6s5k"
        />
        <Course_card
          imgsrc="/assets/Extra_imp/git.png"
          imgalt="Reload"
          title="Git and Git Hub"
          desc="If you're serious about coding and want to make a career out of it, then do learn Git and GitHub. "
          link="https://www.youtube.com/watch?v=Ez8F0nW6S-w"
        />
        <Course_card
          imgsrc="/assets/Extra_imp/proj.png"
          imgalt="Reload"
          title="Projects"
          desc="Unlock the full potential of web development through our immersive course featuring 10+ hands-on projects built with pure HTML, CSS, and JavaScript "
          link="https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3"
        />
        <Course_card
          imgsrc="./assets/Programm/New.gif"
          imgalt="Reload"
          title="Coming Soon"
          desc="This is a new Well structured Knowledgable New Era course specially designed for college Students.That will be coming soon "
        />
      </div>
      <h1 className="text-gray  text-3xl md:text-5xl lg:text-6xl font-bold mb-12 font-dance absolute lg:top-[1200px] md:top-[1700px]  top-[2660px]">
        Coursera Free Courses
      </h1>
      <div className="grid  justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:top-[1300px] md:top-[1800px] top-[2710px] absolute md:px-12 w-[100%] md:w-[100%] ">
        <a
          className="text-lg text-white   font-semibold p-3 w-[70%] border-2 m-3 rounded-xl  border-gray-800 bg-teal-400 hover:scale-110 text-center  "
          href="https://lnkd.in/gVZ9HdFx "
          target="_blank"
        >
          1. HTML AND CSS
        </a>
        <a
          className="text-lg text-white   font-semibold p-3 w-[70%] border-2 m-3 rounded-xl  border-gray-800 bg-teal-400 hover:scale-110 text-center  "
          href="https://lnkd.in/gFURecbH "
          target="_blank"
        >
          2. JavaScript
        </a>
        <a
          className="text-lg text-white   font-semibold p-3 w-[70%] border-2 m-3 rounded-xl  border-gray-800 bg-teal-400 hover:scale-110 text-center  "
          href="https://lnkd.in/gvt9yJ84  "
          target="_blank"
        >
          3. Bootstrap
        </a>

        <a
          className="text-lg text-white   font-semibold p-3 w-[70%] border-2 m-3 rounded-xl  border-gray-800 bg-teal-400 hover:scale-110 text-center  "
          href="https://lnkd.in/gwGWwEdZ  "
          target="_blank"
        >
          4. React JS
        </a>
        <a
          className="text-lg text-white   font-semibold p-3 w-[70%] border-2 m-3 rounded-xl  border-gray-800 bg-teal-400 hover:scale-110 text-center  "
          href="https://lnkd.in/gTpfSHGj  "
          target="_blank"
        >
          5. Git and GitHub
        </a>
        <a
          className="text-lg text-white   font-semibold p-3 w-[70%] border-2 m-3 rounded-xl  border-gray-800 bg-teal-400 hover:scale-110 text-center  "
          href="https://lnkd.in/gRCdAbuN  "
          target="_blank"
        >
          6.MySQL
        </a>

        <a
          className="text-lg text-white   font-semibold p-3 w-[70%] border-2 m-3 rounded-xl  border-gray-800 bg-teal-400 hover:scale-110 text-center  "
          href="https://lnkd.in/g-P9YggE  "
          target="_blank"
        >
          7. MongoDB
        </a>
        <a
          className="text-lg text-white   font-semibold p-3 w-[70%] border-2 m-3 rounded-xl  border-gray-800 bg-teal-400 hover:scale-110 text-center  "
          href="https://lnkd.in/gV_RZTJR  "
          target="_blank"
        >
          8. Django
        </a>
        <a
          className="text-lg text-white   font-semibold p-3 w-[70%] border-2 m-3 rounded-xl  border-gray-800 bg-teal-400 hover:scale-110 text-center  "
          href="https://lnkd.in/gcz9xase  "
          target="_blank"
        >
          9. NodeJS
        </a>
        <a
          className="text-lg text-white   font-semibold p-3 w-[70%] border-2 m-3 rounded-xl  border-gray-800 bg-teal-400 hover:scale-110 text-center  "
          href="https://lnkd.in/gGfXtCiW"
          target="_blank"
        >
          10. Python
        </a>
      </div>
    </div>
  );
};

export default Extra;
