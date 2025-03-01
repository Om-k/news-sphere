import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import Button from "../ui/Button";

const ToggleDarkModeButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("theme");
    return storedMode === "dark";
  });

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    const theme = newMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    if (storedMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

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
