import React, { useState, useContext } from "react";
import { AppContext } from "../Context/appContext";
import { ShowFormContext } from "../Context/modalContext";

function TodoForm() {
  const context = useContext(AppContext);
  const ContextShowForm = useContext(ShowFormContext);
  const [task, setTask] = useState({
    title: "",
    completed: false,
    priority: false,
    hasReminder: false,
    reminder: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title !== "") {
      const taskId = Date.now();
      const t = { ...task, id: taskId };
      context.addItem(t);
      setTask({
        title: "",
        completed: false,
        priority: false,
        hasReminder: false,
        reminder: "",
      });
      ContextShowForm.setShowForm(false);
    }
  };
  return (
    <div>
      {ContextShowForm.showForm && (
        <div className="modal row al-jus-cen fh fw">
          <form onSubmit={handleSubmit} className="col al-jus-cen text">
            {/* <!-- close form btn --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="close-btn"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => ContextShowForm.setShowForm(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

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
                  onChange={(e) =>
                    setTask({ ...task, reminder: e.target.value })
                  }
                  value={task.reminder}
                />
              </div>

              <button className="row al-jus-cen">Add Task</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default TodoForm;

export function TodoEditForm() {
  const context = useContext(AppContext);
  const ContextShowForm = useContext(ShowFormContext);
  const [task, setTask] = useState({
    title: "",
    completed: false,
    priority: false,
    hasReminder: false,
    reminder: "",
  });
  const todo = context.curTask;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title !== "") {
      const t = { ...todo, ...task };
      context.editItem(t);
      setTask({
        title: "",
        completed: false,
        priority: false,
        hasReminder: false,
        reminder: "",
      });
      ContextShowForm.setShowForm(0);
    }
  };
  return (
    <div>
      {ContextShowForm.showForm && (
        <div className="modal row al-jus-cen fh fw">
          <form onSubmit={handleSubmit} className="col al-jus-cen text">
            {/* <!-- close form btn --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="close-btn"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => ContextShowForm.setShowForm(0)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <p className="big-text">Edit Task</p>
            <div className="col fw">
              <div className="row input-group">
                <input
                  type="text"
                  placeholder="add task"
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                  defaultValue={todo.title}
                />
              </div>
              <div className="row input-group al-jus-cen">
                <input
                  type="date"
                  onChange={(e) =>
                    setTask({ ...task, reminder: e.target.value })
                  }
                  defaultValue={todo.reminder}
                />
              </div>

              <button className="row al-jus-cen">Edit Task</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
