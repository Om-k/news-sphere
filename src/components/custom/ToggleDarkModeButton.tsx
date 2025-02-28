import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import Button from "../ui/Button";

const ToggleDarkModeButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Button
        variant="filled"
        onClick={toggleDarkMode}
        icon={isDarkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
      >
        {isDarkMode ? "Dark" : "Light"}
      </Button>
  );
};

export default ToggleDarkModeButton;
