"use client";
import React from "react";
import "../globals.css";

const Introduction = () => {
  return (
    <section id="introduction" className="p-8 bg-white pt-16">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-primary">About Me</h1>
          <p className="text-lg text-gray-700">
            I'm a passionate developer with expertise in creating dynamic and user-friendly web applications. My journey in software development started with a
            strong interest in coding and problem-solving, which has driven me to continuously learn and improve my skills.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            I specialize in full-stack development using the MERN stack (MongoDB, Express.js, React, and Node.js) along with other modern technologies like
            React Native, Nest.js, and Docker. I'm always eager to take on new challenges and contribute to innovative projects.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/profile-picture.jpg" alt="Profile Picture" className="w-64 h-64 rounded-t-full shadow-lg object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
