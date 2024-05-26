// import React from "react";
// import { FaNodeJs, FaReact, FaJs, FaDocker } from "react-icons/fa";
// import { SiMongodb, SiExpress, SiReact, SiNestjs, SiFirebase, SiRedis, SiSocketdotio, SiTypescript } from "react-icons/si";

// const majorSkills = [
//   { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
//   { name: "Node.js", icon: <FaNodeJs size={40} color="#68A063" /> },
//   { name: "React.js", icon: <FaReact size={40} color="#61DBFB" /> },
//   { name: "React Native", icon: <SiReact size={40} color="#61DBFB" /> },
//   { name: "Nest.js", icon: <SiNestjs size={40} color="#E0234E" /> },
//   { name: "Socket.io", icon: <SiSocketdotio size={40} color="#010101" /> },
//   { name: "Redis", icon: <SiRedis size={40} color="#DC382D" /> },
//   { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
//   { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
// ];

// const allSkills = [
//   "MongoDB",
//   "Node.js",
//   "Express.js",
//   "Nest.js",
//   "Worker threads",
//   "React.js",
//   "Redux",
//   "React Native",
//   "Web3",
//   "Socket.io",
//   "Microservice",
//   "Redis",
//   "Docker",
//   "Firebase",
//   "Push Notification",
//   "Authentication",
//   "AWS",
//   "AZURE",
//   "Jenkins",
// ];

// const Skills = () => {
//   const skillLines = [];
//   for (let i = 0; i < allSkills.length; i += 3) {
//     skillLines.push(allSkills.slice(i, i + 3));
//   }

//   return (
//     <section id="skills" className="p-8 bg-white">
//       <h2 className="text-3xl font-bold mb-8 text-center text-primary">Skills</h2>
//       <div className="flex flex-col md:flex-row justify-around items-center gap-8">
//         <div className="md:w-1/2 text-center">
//           {skillLines.map((line, index) => (
//             <p key={index} className="text-lg text-primary hover:text-blue-500 transition-colors duration-300">
//               {line.join(" | ")}
//             </p>
//           ))}
//         </div>
//         <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {majorSkills.map((skill) => (
//             <div key={skill.name} className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
//               {skill.icon}
//               <h3 className="mt-4 text-xl font-semibold text-primary">{skill.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import { FaNodeJs, FaReact, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNestjs, SiFirebase, SiRedis, SiSocketdotio, SiTypescript } from "react-icons/si";
import styles from "../css/skill.css"; // Import the CSS module
import dynamic from "next/dynamic";
// import Canvas from "./bubble";
const DynamicBubbleComponent = dynamic(() => import("./bubble"), {
  ssr: false,
});

const BubbleImg2 = require("../../public/bubble.jpg");

// const majorSkills = [
//   { name: "MongoDB", icon: <SiMongodb size={40} /> },
//   { name: "Node.js", icon: <FaNodeJs size={40} /> },
//   { name: "React.js", icon: <FaReact size={40} /> },
//   { name: "React Native", icon: <SiReact size={40} /> },
//   { name: "Nest.js", icon: <SiNestjs size={40} /> },
//   { name: "Socket.io", icon: <SiSocketdotio size={40} /> },
//   { name: "Redis", icon: <SiRedis size={40} /> },
//   { name: "JavaScript", icon: <FaJs size={40} /> },
//   { name: "TypeScript", icon: <SiTypescript size={40} /> },
// ];

const majorSkills = [
  { name: "MongoDB", icon: "https://static.stocktitan.net/company-logo/mdb.png" },
  { name: "Node.js", icon: "https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png" },
  { name: "React.js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png" },
  {
    name: "React Native",
    icon: "https://www.openxcell.com/wp-content/uploads/2021/11/reactnative-inner.svg",
  },
  { name: "Nest.js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png" },
  { name: "Socket.io", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1024px-Socket-io.svg.png" },
  { name: "Redis", icon: "https://logowik.com/content/uploads/images/redis.jpg" },
  {
    name: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png" },
];

const Bubble = ({ text }) => {
  // return <div className="bubble">{text}</div>;
  return (
    // <div style={{ width: `100px`, height: `100px`, backgroundColor: `red` }}>
    <img
      src="https://toppng.com/uploads/preview/ocean-bubbles-png-svg-transparent-download-under-the-sea-bubbles-clipart-11562928382fmhcep3eps.png"
      alt="Bubble"
      style={{ width: `100px`, height: "auto", backgroundColor: "none" }}
    />
    // </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className={`${styles.skillsSection} p-8 bg-dark text-white relative`}>
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Skills</h2>
      <div className={styles.bubbles}>
        {/* {majorSkills.map((skill, index) => (
          <div key={index} className={styles.bubble} style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 80}%` }}>
            {skill.icon}
            <h3 className={styles.skillName}>{skill.name}</h3>
          </div>
        ))} */}
        {/* <Bubble text="Hello, I am a bubble!" /> */}
        {/* <div> */}
        {/* <Canvas particlesCount={majorSkills.length} data={majorSkills} /> */}
        <DynamicBubbleComponent particlesCount={majorSkills.length} data={majorSkills} />

        {/* </div> */}
      </div>
    </section>
  );
};

export default Skills;
