import styles from './NewTask.module.css';

const NewTask = ({ newTask, handleChange, handleSubmit }) => {
  return (
    <div className={styles.todoForm}>
      <input className={styles.todoInput}
        type="text"
        name="title" 
        placeholder="Add new..."
        value={newTask.title || ""} 
        onChange={handleChange}   //we use onChange to update the state of the newTask
      />
      <button onClick={handleSubmit} className={styles.todoBtn}>Add Task</button>
    </div>
  );
}

export default NewTask;

	
	
		
	