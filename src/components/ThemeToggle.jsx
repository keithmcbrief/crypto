import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <HiSun />
        </div>
      ) : (
        <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <HiMoon />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
