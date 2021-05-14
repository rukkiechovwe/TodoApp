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
    <div className="modal row al-jus-cen fh fw">
      <form onSubmit={handleSubmit} className="col al-jus-cen text">
        <p className="big-text">Add Task</p>
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
              <input
                type="date"
                onChange={(e) => setTask({ ...task, reminder: e.target.value })}
                value={task.reminder}
              />
            </div>


            <button className="row al-jus-cen">
            Add Task
          </button>
        </div> 
      </form>
    </div>
  );
}

export default TodoForm;
// COMINGGGGGG THEYRE CALLING ME OKAYYYY
// still there?? yesss
// just saw the article, commingg ayy
// hmmmmm, soooo
// git mv TodoForm.js todoForm.js ???