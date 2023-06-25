"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("mode"));

  if (!localStorage.getItem("mode")) {
    localStorage.setItem("mode", "dark");
    setMode("dark");
  }

  const toggle = () => {
    let newMode;
    if (localStorage.getItem("mode") === "dark") {
      newMode = "light";
      localStorage.setItem("mode", "light");
    } else {
      newMode = "dark";
      localStorage.setItem("mode", "dark");
    }

    setMode(newMode);
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
