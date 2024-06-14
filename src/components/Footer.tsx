import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="p-4">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        <hr className="w-full max-w-xl border-gray-300 dark:border-gray-700 mb-5" />
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <p>&copy; Cameron Mirza {year}</p>
            <span className="mx-2">|</span>
            <a href="/source">source</a>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:cameron@example.com">
              <FaEnvelope />
            </a>
            <a href="https://github.com/yourusername">
              <FaGithub />
            </a>
            <a href="https://twitter.com/yourusername">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
