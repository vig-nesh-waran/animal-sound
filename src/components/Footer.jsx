import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const gitURL = 'https://github.com/vig-nesh-waran'

const Footer = () => {
  return (
    <footer className="bg-green-600 text-green-700 py-4 flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-2">
        <span>Developed by</span>
        <FontAwesomeIcon icon={faHeart} className="text-green-800" />
        <span className="font-bold">VIGNESHWARAN</span>
      </div>
      <div className="flex items-center space-x-2">
        <span>Connect with</span>
        <a
          href={gitURL}
          className="text-green-800 hover:text-green-900 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
