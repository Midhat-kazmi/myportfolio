import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On mount, read theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      // If no theme stored, fallback to system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
      }
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="absolute left-1/2 top-5 -translate-x-1/2 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 dark:bg-gray-800 shadow hover:scale-110 active:scale-95"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 transition-transform duration-300 rotate-90" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 transition-transform duration-300 -rotate-12" />
      )}
    </button>
  );
};
