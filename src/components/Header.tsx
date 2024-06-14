import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header: React.FC = () => {
  return (
    <header className="p-4">
      <div className="max-w-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src="https://github.com/cmirza.png"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Cameron Mirza</h1>
            <div className="flex space-x-2">
              <a href="https://cmirza.substack.com">blog</a>
              <a href="/resume.pdf">resume</a>
            </div>
          </div>
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
