import styles from './TaskList.module.css';
import { CgCloseR } from "react-icons/cg";


const TaskList = ({ allTasks, removeTask }) => {
  return (
    <ul className={styles.todoList}>
      {allTasks.map(({ title, id }) => (
        <li key={id} className={styles.todoItem}>
            <p className={styles.todoTitle}>{title}</p>
            <button className={styles.todoBtn} onClick={() => removeTask(id)}><CgCloseR /></button>
        </li>
      ))}
    </ul>
  );
}
export default TaskList;
