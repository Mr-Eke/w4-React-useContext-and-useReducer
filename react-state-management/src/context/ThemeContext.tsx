import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { LIGHT_THEME, DARK_THEME } from "../constants/theme";

type Theme = typeof LIGHT_THEME | typeof DARK_THEME;

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(LIGHT_THEME);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
