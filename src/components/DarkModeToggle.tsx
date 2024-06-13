import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { LuMoon } from "react-icons/lu";
import { IoSunny } from "react-icons/io5";

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log(`Current theme: ${theme}`);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-white p-2 rounded"
    >
      <LuMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <IoSunny className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    </button>
  );
};

export default DarkModeToggle;
