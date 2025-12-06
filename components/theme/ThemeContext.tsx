"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { themes } from "./themes";

type ThemeKey = keyof typeof themes;

type Theme = typeof themes[ThemeKey];

interface ThemeContextProps {
  theme: Theme;
  currentTheme: ThemeKey;
  setCurrentTheme: (theme: ThemeKey) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>("midnight");
  const [isDark, setIsDark] = useState(true);
  const theme = themes[currentTheme];

  return (
    <ThemeContext.Provider
      value={{ theme, currentTheme, setCurrentTheme, isDark, setIsDark }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
