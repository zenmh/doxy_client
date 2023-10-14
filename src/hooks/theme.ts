import { useState, useEffect } from "react";

const useDarkMode = () => {
  const isClient = typeof window !== "undefined";

  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    isClient && localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const localDarkMode = localStorage.getItem("darkMode");
    if (localDarkMode === "true") setIsDarkMode(true);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;
