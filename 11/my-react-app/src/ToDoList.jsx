import "./ToDo.css";
import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a shower",
    "Go to work",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value)
  }

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
    setNewTask("");
      }
  };

  const deleteTask = (index) => {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
    setTasks(updateTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
    setTasks(updateTasks);
    }
  };

  return (
    <div className="task_container">
      <h1>To-Do-List</h1>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="addBtn" onClick={addTask}>
        Add
      </button>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="deleteBtn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="moveBtn" onClick={() => moveTaskUp(index)}>
              ⬆️
            </button>
            <button className="moveBtn" onClick={() => moveTaskDown(index)}>
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;