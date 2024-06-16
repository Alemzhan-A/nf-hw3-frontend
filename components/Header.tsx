'use client';

import { useTheme } from "@/app/context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-emerald-600 dark:bg-emerald-800 p-6 text-white shadow-md flex justify-between items-center">
      <h1 className="text-3xl font-bold">Posts List App</h1>
      <button onClick={toggleTheme} className="text-white bg-gray-800 dark:bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </header>
  );
};

export default Header;
