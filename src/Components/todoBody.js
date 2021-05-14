import React, { useState,useContext } from "react";
import { AppContext } from "../App";
import Fab from "./fab";
import TodoForm from "./todoForm"
import TodoList from "./todoList";

// you there?yessssss longestttttt timeeeeeeeeeee
// fishhh, there's no lifht here,lol continue
// lemme rename it back abeg, no stress

function AddTodo() {
  const context = useContext(AppContext);
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="col al-jus-cen">
      
      {/* toggle add task form */}
      {showForm &&  <TodoForm />}
      <Fab onClick={() => setShowForm(!showForm)} />

      {/* display text if tasks list is empty */}
      {context.tasks.length === 0 && 
        <div className="fw row al-jus-cen fh">
          <p className="big-text">No Tasks</p>
        </div>
        }

      {/* tasks list */}
      <TodoList />
    </div>
  );
}

export default AddTodo;
