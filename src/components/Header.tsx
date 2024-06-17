import React from "react";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";

const Header: React.FC = () => {
  return (
    <header className="p-4">
      <div className="max-w-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-13 h-13 rounded-full overflow-hidden">
            <Image
              src="https://github.com/cmirza.png"
              alt="avatar"
              width={50}
              height={50}
              className="object-cover"
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
