// "use client";
// import React from "react";
// import "../globals.css";

// const Introduction = () => {
//   return (
//     <section id="introduction" className="p-8 bg-white pt-16">
//       <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
//         <div className="md:w-1/2">
//           <h1 className="text-4xl font-bold mb-4 text-primary">About Me</h1>
//           <p className="text-lg text-gray-700">
//             I'm a passionate developer with expertise in creating dynamic and user-friendly web applications. My journey in software development started with a
//             strong interest in coding and problem-solving, which has driven me to continuously learn and improve my skills.
//           </p>
//           <p className="text-lg text-gray-700 mt-4">
//             I specialize in full-stack development using the MERN stack (MongoDB, Express.js, React, and Node.js) along with other modern technologies like
//             React Native, Nest.js, and Docker. I'm always eager to take on new challenges and contribute to innovative projects.
//           </p>
//         </div>
//         <div className="md:w-1/2 flex justify-center">
//           <img src="/profile-picture.jpg" alt="Profile Picture" className="w-64 h-64 rounded-t-full shadow-lg object-cover" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Introduction;

import React from "react";
import "../globals.css";

const Introduction = () => {
  return (
    <section id="introduction" className="min-h-[80vh] flex flex-row justify-evenly items-center text-center bg-dark text-white">
      {/* bg-gray-700  bg-green-300 */}
      <div className="container flex mx-auto items-center justify-center">
        <img src="/profile-picture.jpg" className="mt-5 mb-5 rounded-2xl size-80" />
      </div>
      <div className="container mx-auto p-8 pr-64">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I am <span className="text-primary">Zain Hasan</span>.
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">I build applications on MERN</h2>
        <p className="text-lg md:text-xl">
          I'm a passionate developer with expertise in creating dynamic and user-friendly web applications. My journey in software development started with a
          strong interest in coding and problem-solving, which has driven me to continuously learn and improve my skills. I specialize in full-stack development
          using the MERN stack (MongoDB, Express.js, React, and Node.js) along with other modern technologies like React Native, Nest.js, and Docker. I'm always
          eager to take on new challenges and contribute to innovative projects.
        </p>
        {/* <div className="mt-8">
          <a href="#contact" className="bg-primary text-dark px-6 py-3 rounded-md shadow-md hover:bg-green-400 transition duration-300">
            Get In Touch
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Introduction;
