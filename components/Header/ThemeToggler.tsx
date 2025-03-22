import { useTheme } from "next-themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static"
    >
      {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
};

export default ThemeToggler;
