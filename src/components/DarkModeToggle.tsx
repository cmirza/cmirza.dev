import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log(`Current theme: ${theme}`);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="bg-gray-800 text-white p-2 rounded dark:bg-gray-700"
    >
      Toggle {theme === 'dark' ? 'light' : 'dark'} Mode
    </button>
  );
};

export default DarkModeToggle;