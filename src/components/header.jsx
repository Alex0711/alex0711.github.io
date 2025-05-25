import React from "react";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { vh } from "framer-motion";

const Header = ({ headerRef }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });
  const [primary, setPrimary] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPage = Math.floor(window.scrollY / window.innerHeight);
      setPrimary(currentPage % 2 === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full flex justify-between px-4 z-20 ${
        primary ? "bg-details dark:bg-primary" : "bg-details dark:bg-background"
      }`}
    >
      <h1 className="text-title text-background dark:text-details">BastBit</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="top-4 right-4 rounded-full"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <SunIcon className="h-6 w-6 text-yellow-400" />
        ) : (
          <MoonIcon className="h-6 w-6 text-background" />
        )}
      </button>
    </header>
  );
};

export default Header;
