import { useTheme } from "@/context/ThemeContext";

function Container({ children }) {
  const { theme } = useTheme();
  return (
    <div
      className={`mini-app ${theme} bg-background min-h-screen text-primary p-10`}
    >
      {children}
    </div>
  );
}

export default Container;
