import type { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./Layout.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.layout} ${styles[theme]}`}>
      {children}
    </div>
  );
};

export default Layout;
