"use client";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-10 transition-colors duration-500 ${scrolled ? "bg-darker" : "bg-dark"}`}>
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="text-primary font-bold text-2xl"></div>
        <nav>
          <ul className="flex space-x-4 text-white">
            <li>
              <button className="py-2 px-4 hover:text-primary" onClick={() => scrollToSection("introduction")}>
                About
              </button>
            </li>
            <li>
              <button className="py-2 px-4 hover:text-primary" onClick={() => scrollToSection("skills")}>
                Skills
              </button>
            </li>
            <li>
              <button className="py-2 px-4 hover:text-primary" onClick={() => scrollToSection("projects")}>
                Projects
              </button>
            </li>
            <li>
              <button className="py-2 px-4 hover:text-primary" onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default Header;
