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
