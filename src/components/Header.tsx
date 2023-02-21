import React from "react";
import useTheme from "../hooks/useTheme";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 bottom-2 bg-indigo-500 text-lg p-1 rounded-md"
      >
        {theme === "dark" ? "🌙" : "🌞"}
      </button>
      <header className="dark:bg-slate-800 px-3 rounded py-2 mb-2  dark:text-white bg-[#F2F2F2] ">
        <a href="">Home</a>
        <a href="">Inicio</a>
      </header>
    </>
  );
};
