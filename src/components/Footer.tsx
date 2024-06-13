import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white p-4 mt-8">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <p>&copy; Cameron Mirza {year}</p>
          <span className="mx-2">|</span>
          <a href="/source" className="text-blue-400 hover:underline">
            source
          </a>
        </div>
        <div className="flex space-x-4">
          <a
            href="mailto:cameron@example.com"
            className="text-blue-400 hover:underline"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
