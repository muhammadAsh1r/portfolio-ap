import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(
    document.documentElement.classList.contains("light")
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLight(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLight(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-2xl bg-secondary/5 border border-secondary/10 text-primary hover:bg-primary hover:text-bg-dark transition-all duration-300 shadow-xl"
      aria-label="Toggle Theme"
    >
      {isLight ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;
