import React, { useState, useEffect } from "react";
import "./App.scss";
import AddTodo from "./Components/AddTodo";
import Nav from "./Components/nav";

export const AppContext = React.createContext();
export const SearchContext = React.createContext();
function App() {
  const [tasks, setTasks] = useState([]);
  const [result, setResult] = useState([]);
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

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("tasks"));
    if (data) {
      setTasks([...tasks, ...data]);
    }
  }, []);
  return (
    <AppContext.Provider
      value={{ tasks: tasks, addItem: addItem, deleteItem: deleteItem }}
    >
      <SearchContext.Provider value={{ result: result, setResult: setResult }}>
        <Nav />
        <AddTodo />
      </SearchContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
