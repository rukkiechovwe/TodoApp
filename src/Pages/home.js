import React, { useContext } from "react";
import { AppContext } from "../Context/appContext";
import { ShowFormContext } from "../Context/modalContext";
import DnD from "../Components/dnd";
import Fab from "../Components/fab";
import TodoForm, { TodoEditForm } from "../Components/todoForm";

function Home() {
  const context = useContext(AppContext);
  const formContext = useContext(ShowFormContext);
  return (
    <div className="col al-jus-cen">
      {formContext.showForm === 1 && <TodoForm /> }
      {formContext.showForm === 2 && <TodoEditForm /> }
      <Fab onClick={() => formContext.setShowForm(1)} />

      <DnD />

      {context.tasks.length === 0 && (
        <div className="fw row al-jus-cen fh">
          <p className="big-text">No Tasks</p>
        </div>
      )}
    </div>
  );
}

export default Home;
