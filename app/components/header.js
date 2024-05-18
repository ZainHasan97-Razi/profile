"use client";
// components/Header.js

import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust this value based on your preference
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-1000 ${
        // Changed duration to 1000ms for slower transition
        isScrolled ? "bg-blue-600 text-white shadow-lg" : "bg-transparent text-black"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold">{/* My Profile */}</div>
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
      </div>
    </header>
  );
};

export default Header;
