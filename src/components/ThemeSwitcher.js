import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    document.body.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className=" text-white rounded"
    >
      {darkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
};

export default ThemeSwitcher;
