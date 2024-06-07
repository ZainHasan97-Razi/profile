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
import styles from "../css/skill.css"; // Import the CSS module
import dynamic from "next/dynamic";
const DynamicBubbleComponent = dynamic(() => import("./bubble"), {
  ssr: false,
});

const majorSkills = [
  { name: "MongoDB", icon: "/mongodb.png" },
  { name: "Node.js", icon: "/node.png" },
  { name: "React.js", icon: "/react.png" },
  { name: "React Native", icon: "/react-native.png" },
  { name: "Nest.js", icon: "/nest.png" },
  { name: "Socket.io", icon: "/socket.png" },
  { name: "Redis", icon: "/redis.jpg" },
  { name: "JavaScript", icon: "/javascript.png" },
  { name: "TypeScript", icon: "/typescript.png" },
];

const allSkills = [
  "MongoDB",
  "Node.js",
  "Express.js",
  "Nest.js",
  "Worker threads",
  "React.js",
  "Redux",
  "React Native",
  "Web3",
  "Socket.io",
  "Microservice",
  "Redis",
  "Docker",
  "Firebase",
  "Push Notification",
  "Authentication",
  "AWS",
  "AZURE",
  "Jenkins",
];

const Skills = () => {
  return (
    <section id="skills" className={`${styles.skillsSection} pl-8 pr-8 pb-8 bg-dark text-white relative`}>
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Skills</h2>
      <div className={styles.bubbles}>
        <DynamicBubbleComponent particlesCount={majorSkills.length} data={majorSkills} />
      </div>
      <p className="mb-4 text-center">
        {allSkills.map((v, i) => {
          if (i % 10 == 0) {
            return (
              <>
                <br />
                {i + 1 == allSkills.length ? v : v + " | "}
              </>
            );
          } else {
            return i + 1 == allSkills.length ? v : v + " | ";
          }
        })}
      </p>
    </section>
  );
};

export default Skills;
