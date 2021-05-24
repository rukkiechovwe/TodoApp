import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [curTask, setCurTask] = useState({});

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

  const editItem = (item) => {
    const newTasks = tasks.map((task) => {
      if (task.id === item.id) {
        return item;
      }
      return task;
    });
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
        setTasks: setTasks,
        curTask: curTask,
        setCurTask: setCurTask,
        addItem: addItem,
        editItem: editItem,
        deleteItem: deleteItem,
        completedItem: completedItem,
        hasReminder: hasReminder,
        priority: priority,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
