import React, { useState } from "react";
import Fab from "./fab";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function AddTodo() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="col al-jus-cen">
      {showForm &&  <TodoForm />}
      <Fab onClick={() => setShowForm(!showForm)} />
      <TodoList />
    </div>
  );
}

export default AddTodo;
