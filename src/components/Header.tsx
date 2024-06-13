import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-900 text-white p-4">
          <div className="max-w-lg mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Cameron Mirza</h1>
              <div className="flex space-x-4">
                <a href="/blog" className="text-blue-400 hover:underline">blog</a>
                <a href="/resume" className="text-blue-400 hover:underline">resume</a>
              </div>
            </div>
            <DarkModeToggle />
          </div>
        </header>
      );
};

export default Header;