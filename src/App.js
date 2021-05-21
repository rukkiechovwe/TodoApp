import React, { useState, useEffect } from "react";
import "./App.scss";
import AddTodo from "./Components/todoBody";
import Nav from "./Components/nav";
import ShowFormContextProvider from "./context/modalContext";
import { KeepTheme } from "./Components/themes";

export const AppContext = React.createContext();
export const SearchContext = React.createContext();
function App() {
  const [tasks, setTasks] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    KeepTheme();
})


  const addItem = (item) => {
    const newTask = [...tasks, item];
    setTasks(newTask);
    window.localStorage.setItem("tasks", JSON.stringify(newTask));
  };

  const deleteItem = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    window.localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const completedItem = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(newTasks);
    window.localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const hasReminder = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.hasReminder = true;
      }
      return task;
    });
    setTasks(newTasks);
    window.localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const priority = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.priority = !task.priority;
      }
      return task;
    });
    setTasks(newTasks);
    window.localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("tasks"));
    if (data) {
      setTasks([...tasks, ...data]);
    }
  }, []);
  return (
    <AppContext.Provider
      value={{
        tasks: tasks,
        setTasks:setTasks,
        addItem: addItem,
        deleteItem: deleteItem,
        completedItem: completedItem,
        hasReminder: hasReminder,
        priority: priority,
      }}
    >
      <SearchContext.Provider value={{ result: result, setResult: setResult }}>
        <ShowFormContextProvider>
          <Nav />
          <AddTodo />
        </ShowFormContextProvider>
      </SearchContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
