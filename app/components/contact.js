// components/Contact.js

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactDetails = {
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-profile",
  email: "your-email@example.com",
  phone: "+1234567890",
  address: "Your Address, City, Country",
};

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl flex items-center">
            <FaLinkedin className="mr-2" size={24} color="#0077B5" />
            LinkedIn
          </a>
          <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" className="text-xl flex items-center">
            <FaGithub className="mr-2" size={24} />
            GitHub
          </a>
          <a href={`mailto:${contactDetails.email}`} className="text-xl flex items-center">
            <FaEnvelope className="mr-2" size={24} />
            {contactDetails.email}
          </a>
          <div className="text-xl flex items-center">
            <FaPhone className="mr-2" size={24} />
            {contactDetails.phone}
          </div>
          <div className="text-xl flex items-center">
            <FaMapMarkerAlt className="mr-2" size={24} />
            {contactDetails.address}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
