import { useTheme } from "@/context/ThemeContext";
import React from "react";

function Container({ children }) {
  const { theme } = useTheme();
  return (
    <div className={`mini-app ${theme} bg-background text-primary p-10`}>
      {children}
    </div>
  );
}

export default Container;
