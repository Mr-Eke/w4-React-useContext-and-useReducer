import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import styles from "./App.module.css";

const App = () => (
  <ThemeProvider>
    <Layout>
      <Navbar />
      <main className={styles.content}>
        <TaskManager />
      </main>
    </Layout>
  </ThemeProvider>
);

export default App;
