"use client";
// components/Header.js

import React from "react";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-gray-800 text-white flex justify-between items-center px-6 py-4">
      <div className="text-xl font-bold">My Profile</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <button className="py-2 px-4 hover:bg-gray-700" onClick={() => scrollToSection("skills")}>
              Skills
            </button>
          </li>
          <li>
            <button className="py-2 px-4 hover:bg-gray-700" onClick={() => scrollToSection("projects")}>
              Projects
            </button>
          </li>
          <li>
            <button className="py-2 px-4 hover:bg-gray-700" onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
