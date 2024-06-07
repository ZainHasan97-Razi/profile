// "use client";
// import React, { useState, useEffect } from "react";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header className={`fixed w-full z-10 transition-colors duration-500 ${scrolled ? "bg-darker" : "bg-dark"}`}>
//       <div className="container mx-auto flex justify-between items-center p-6">
//         <div className="text-primary font-bold text-2xl"></div>
//         <nav>
//           <ul className="flex space-x-4 text-white">
//             <li>
//               <button className="py-2 px-4 hover:text-primary" onClick={() => scrollToSection("introduction")}>
//                 About
//               </button>
//             </li>
//             <li>
//               <button className="py-2 px-4 hover:text-primary" onClick={() => scrollToSection("skills")}>
//                 Skills
//               </button>
//             </li>
//             <li>
//               <button className="py-2 px-4 hover:text-primary" onClick={() => scrollToSection("projects")}>
//                 Projects
//               </button>
//             </li>
//             <li>
//               <button className="py-2 px-4 hover:text-primary" onClick={() => scrollToSection("contact")}>
//                 Contact
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// const scrollToSection = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" });
//   }
// };

// export default Header;

"use client";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
        <nav className={`${menuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-white">
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
