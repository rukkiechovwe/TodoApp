import React, { useState, useContext } from "react";
import { AppContext } from "../App";

function TodoForm() {
  const context = useContext(AppContext);
  const [task, setTask] = useState({
    title: "",
    completed: false,
    priority:false,
    hasReminder: false,
    reminder:""
  });
  // {title,completed,priority,hasReminder,id, reminder}
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title !== "") {
      const taskId = Date.now();
      const t = { ...task, id: taskId };
      context.addItem(t);
      setTask({
        title: "",
        completed: false,
        priority:false,
        hasReminder: false,
        reminder:""
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row al-jus-cen">
     <div className="col fw">
      <div className="row input-group">
        <input
            type="text"
            placeholder="add task"
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            value={task.title}
          />
      </div>
        <div className="row input-group al-jus-cen">
          <label>Reminder:</label>
          <input
            type="date"
            onChange={(e) => setTask({ ...task, reminder: e.target.value })}
            value={task.reminder}
          />
        </div>


        <button className="row al-jus-cen">
        <svg xmlns="http://www.w3.org/2000/svg" className="i-size" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
      </button>
     </div>
      
    </form>
  );
}

export default TodoForm;
