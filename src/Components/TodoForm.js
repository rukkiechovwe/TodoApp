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
      <form onSubmit={handleSubmit} className='row al-jus-cen'>
        <input placeholder="add task"
          onChange={(e) => setAddTask(e.target.value)}
          value = {addTask} className="add-todo"/>
        <button className='row al-jus-cen'>
          <svg xmlns="http://www.w3.org/2000/svg" className="i-size" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
              strokeWidth={5} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
        </button>
      </form>
  );
}

export default TodoForm;
