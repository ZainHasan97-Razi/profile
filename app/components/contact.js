import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Contact</h2>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <FaLinkedin size={24} />
          <a href="https://www.linkedin.com/in/yourprofile" className="text-lg text-primary">
            LinkedIn
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaGithub size={24} />
          <a href="https://www.github.com/yourprofile" className="text-lg text-primary">
            GitHub
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope size={24} />
          <span className="text-lg text-primary">your.email@example.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone size={24} />
          <span className="text-lg text-primary">+123 456 7890</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt size={24} />
          <span className="text-lg text-primary">Your Address</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
