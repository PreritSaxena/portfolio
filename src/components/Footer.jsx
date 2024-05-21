import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope  } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className= "footer text-white py-4 ">
      <div className="footer-container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="https://github.com/PreritSaxena" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/prerit-saxena-930774229/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://leetcode.com/u/_preritsaxena_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <SiLeetcode  size={24} />
          </a>
          <a href="mailto:preritsaxena2103@gmail.com" target="_blank"  className="text-gray-400 hover:text-white">
            <FaEnvelope size={24} />
          </a>
        </div>
        <div>
          <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
