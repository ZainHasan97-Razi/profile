// "use client";
import React from "react";
import "../globals.css";

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8">
      <div className="md:w-1/2 md:mr-4">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          Insert your bio here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales augue vitae dui porta dignissim. Nullam nec velit quis
          libero commodo suscipit. Integer ac convallis odio.
        </p>
      </div>
      {/* <div className="md:w-1/2">
        <img src="/profile-picture.jpg" alt="Profile Picture" className="w-full md:w-64 rounded-lg shadow-lg" />
      </div> */}
      {/* <div className="md:w-1/2 relative">
        <div className="profile-picture-clip"></div>
        <img src="/profile-picture.jpg" alt="Profile Picture" className="w-full md:w-64 rounded-lg shadow-lg absolute top-0 left-0" />
      </div> */}
      <div className="md:w-1/2 relative">
        <img src="/profile-picture.jpg" alt="Profile Picture" className="w-full md:w-64 rounded-t-full shadow-lg" />
      </div>
      {/* <div className="md:w-1/2 relative">
        <img src="/profile-picture.jpg" alt="Profile Picture" className="w-full md:w-64 rounded-lg shadow-lg" />
      </div> */}
    </div>
  );
};

export default Introduction;
