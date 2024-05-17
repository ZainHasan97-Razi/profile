"use client";
// components/Skills.js

import React from "react";
import { FaNodeJs, FaReact, FaJs, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNestjs, SiFirebase, SiRedis, SiSocketdotio, SiTypescript } from "react-icons/si";

const majorSkills = [
  { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#68A063" /> },
  { name: "React.js", icon: <FaReact size={40} color="#61DBFB" /> },
  { name: "React Native", icon: <SiReact size={40} color="#61DBFB" /> },
  { name: "Nest.js", icon: <SiNestjs size={40} color="#E0234E" /> },
  { name: "Socket.io", icon: <SiSocketdotio size={40} color="#010101" /> },
  { name: "Redis", icon: <SiRedis size={40} color="#DC382D" /> },
];

const allSkills = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "MongoDB" },
  { name: "Node.js" },
  { name: "React.js" },
  { name: "React Native" },
  { name: "Nest.js" },
  { name: "Socket.io" },
  { name: "Redis" },
  { name: "Docker" },
  { name: "Firebase" },
];

const Skills = () => {
  // Function to create lines of skills
  const formatSkills = (skills, skillsPerLine) => {
    const lines = [];
    for (let i = 0; i < skills.length; i += skillsPerLine) {
      lines.push(
        skills
          .slice(i, i + skillsPerLine)
          .map((skill) => skill.name)
          .join(" | ")
      );
    }
    return lines;
  };

  const skillLines = formatSkills(allSkills, 3);

  return (
    <section id="skills" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8">
        <div className="mt-8 md:mt-0 text-center md:text-left md:ml-8">
          {skillLines.map((line, index) => (
            <p key={index} className="text-lg mb-2">
              {line}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {majorSkills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              {skill.icon}
              <h3 className="mt-4 text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
