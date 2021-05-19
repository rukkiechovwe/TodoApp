import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import { ShowFormContext } from "../context/modalContext";
import Fab from "./fab";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

function AddTodo() {
  const context = useContext(AppContext);
  const formContext = useContext(ShowFormContext);
  return (
    <div className="col al-jus-cen">
      {/* toggle add task form */}
      {formContext.showForm && <TodoForm />}
      <Fab onClick={() => formContext.setShowForm(!formContext.showForm)} />

      {/* display text if tasks list is empty */}
      {context.tasks.length === 0 && (
        <div className="fw row al-jus-cen fh">
          <p className="big-text">No Tasks</p>
        </div>
      )}

      {/* tasks list */}
      <TodoList />
    </div>
  );
}

export default AddTodo;
