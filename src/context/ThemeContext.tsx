import React, { createContext, useContext, useState } from "react";

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};
type ThemeType = "light" | "dark";

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const theme = localStorage.getItem("theme");
    return theme ? theme as ThemeType : "light";
  });
  function toggleTheme() {
    setTheme((prev) => {
      const theme = prev == "light" ? "dark" : "light";
      localStorage.setItem("theme", theme);
      return theme;
    });
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("Theme cannot be accessed outside of provider!");

  return ctx;
};
