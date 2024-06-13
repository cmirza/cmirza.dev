import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center dark:bg-gray-900">
      <h1 className="text-2xl">Cameron Mirza</h1>
      <DarkModeToggle />
    </header>
  );
};

export default Header;