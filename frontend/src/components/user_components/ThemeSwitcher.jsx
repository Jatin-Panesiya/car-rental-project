"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
   // localStorage.setItem("theme", JSON.stringify(theme));
    setTheme(theme);
  }, [theme, setTheme]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(theme);
  }, [theme, setTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit fixed  right-5 text-black dark:text-white bottom-10 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933] z-50`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <MdDarkMode className="font-bold" />
      ) : (
        <MdOutlineLightMode className="font-bold" />
      )}
    </button>
  );
};
