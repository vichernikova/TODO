import React, { useState } from "react";
import Header from './components/header/Header';
import NewTask from './components/newTask/NewTask';
import TaskList from './components/taskList/TaskList';
import './App.css'


function App() {
  
  const [newTask, setNewTask] = useState(""); 
  
  // Change the initial value (newTask)
  const handleChange = ({ target }) => {  //target - we write in the input
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]); //add all task
  
  // Submit by clicking the button (add the task to the list)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };
  
  
  //Remove the task
  const removeTask = (id) => {
    setAllTasks((allTasks) => allTasks.filter((task) => task.id !== id));
  };
  

  return (
    <>
      <Header />
      <NewTask newTask={newTask} handleChange={handleChange} handleSubmit={handleSubmit} />
      <TaskList allTasks={allTasks} removeTask={removeTask} />
    </>
  )
}

export default App;
