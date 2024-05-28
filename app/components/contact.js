// import React from "react";
// import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section id="contact" className="p-8 bg-gray-100">
//       <h2 className="text-3xl font-bold mb-8 text-center text-primary">Contact</h2>
//       <div className="flex flex-col items-center space-y-4">
//         <div className="flex items-center space-x-2">
//           <FaLinkedin size={24} />
//           <a href="https://www.linkedin.com/in/yourprofile" className="text-lg text-primary">
//             LinkedIn
//           </a>
//         </div>
//         <div className="flex items-center space-x-2">
//           <FaGithub size={24} />
//           <a href="https://www.github.com/yourprofile" className="text-lg text-primary">
//             GitHub
//           </a>
//         </div>
//         <div className="flex items-center space-x-2">
//           <FaEnvelope size={24} />
//           <span className="text-lg text-primary">your.email@example.com</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <FaPhone size={24} />
//           <span className="text-lg text-primary">+123 456 7890</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <FaMapMarkerAlt size={24} />
//           <span className="text-lg text-primary">Your Address</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gradient-to-r from-dark to-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Contact</h2>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-4">
          <FaLinkedin size={30} className="text-[#0762C8]" />
          <a
            href="https://www.linkedin.com/in/zain-hasan-7410761b4/"
            target="_blank"
            className="text-lg text-primary hover:text-green-400 transition duration-300"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <FaGithub size={30} className="text-[#000000]" />
          <a href="https://github.com/ZainHasan97-Razi/" target="_blank" className="text-lg text-primary hover:text-green-400 transition duration-300">
            GitHub
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <FaEnvelope size={30} className="text-[#880808]" />
          <span className="text-lg text-primary hover:text-green-400 transition duration-300">zainrazi97@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaPhone size={30} className="text-[#0762C8]" />
          <span className="text-lg text-primary hover:text-green-400 transition duration-300">+92 3362844548</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt size={30} className="text-[#FF0000]" />
          <span className="text-lg text-primary hover:text-green-400 transition duration-300">DHA, Karachi, Pakistan</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
