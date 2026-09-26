import { useTheme } from "../context/ThemeContext";
import styles from "./Navbar.module.css";
import { LIGHT_THEME } from "../constants/theme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      <span className={styles.brand}>React App</span>
      <button className={styles.toggleButton} onClick={toggleTheme}>
        Switch to {theme === LIGHT_THEME ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
};

export default Navbar;
