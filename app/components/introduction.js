import React from "react";
import "../globals.css";

const Introduction = () => {
  return (
    <section id="introduction" className="min-h-[80vh] flex flex-col md:flex-row justify-evenly items-center text-center bg-dark text-white pt-16 md:pt-20">
      <div className="flex-1 flex justify-center items-center p-4 md:p-0">
        <img src="/profile-picture.jpg" className="mt-5 mb-5 rounded-2xl w-40 h-40 md:w-80 md:h-80" />
      </div>
      <div className="flex-1 p-4 md:p-8 md:pr-60">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I am <span className="text-primary">Zain Hasan</span>.
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">I build applications on MERN</h2>
        <p className="text-lg md:text-xl mb-4">
          I'm a passionate developer with expertise in creating dynamic and user-friendly web applications. My journey in software development started with a
          strong interest in coding and problem-solving, which has driven me to continuously learn and improve my skills. I specialize in full-stack development
          using the MERN stack (MongoDB, Express.js, React, and Node.js) along with other modern technologies like React Native, Nest.js, and Docker. I'm always
          eager to take on new challenges and contribute to innovative projects.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
