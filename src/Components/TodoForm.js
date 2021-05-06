import React, { useState,useContext } from "react";
import { AppContext } from '../App';


function TodoForm() {
   const context = useContext(AppContext)
  const [addTask, setAddTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (addTask !== ""){
      context.addItem(addTask);
   }
    setAddTask(""); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="add task"
          onChange={(e) => setAddTask(e.target.value)}
          value = {addTask}
          className="add-todo"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
