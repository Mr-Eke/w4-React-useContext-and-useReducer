import { useReducer, useState, type FormEvent } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { useTheme } from "../context/ThemeContext";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./TaskManager.module.css";

const TaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [task, setTask] = useState("");
  const { theme } = useTheme();

  const addTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "add", payload: { id: crypto.randomUUID(), text: task.trim() } });
    setTask("");
  };

  return (
    <div className={`${styles.container} ${theme === LIGHT_THEME ? styles.light : styles.dark}`}>
      <h2>Task Manager</h2>
      <form onSubmit={addTask}>
        <input
          className={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit" disabled={!task.trim()}>Add Task</button>
      </form>
      <ul className={styles.list}>
        {tasks.map((t) => (
          <li key={t.id} className={styles.item}>
            {t.text}
            <button onClick={() => dispatch({ type: "remove", payload: t.id })}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
