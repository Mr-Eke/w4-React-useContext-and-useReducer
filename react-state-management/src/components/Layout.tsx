import type { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./Layout.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.layout} ${theme === LIGHT_THEME ? styles.light : styles.dark}`}>
      {children}
    </div>
  );
};

export default Layout;
