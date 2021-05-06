import React, { useState,useEffect } from 'react'
import "./App.scss";
import AddTodo from "./Components/AddTodo";
import Nav from "./Components/nav";

export const AppContext = React.createContext() 
function App() {
  const [tasks, setTasks] = useState([])
   const addItem = (item)=>{
      const newTask = [...tasks,item]
      setTasks(newTask)
      window.localStorage.setItem('tasks',JSON.stringify(newTask))  
   }
   // retrieve from local storage
   useEffect(() => {
      const data = JSON.parse(window.localStorage.getItem('tasks'))
      if (data){
         setTasks([...tasks,...data])
      }
   }, [])
   //window.localStorage.clear()
  return (
    <AppContext.Provider
      value={{ tasks:tasks, addItem:addItem }}
    >
      <div className="color-gen App">
        <Nav />
        <AddTodo />
      </div>
    </AppContext.Provider>
  );
}

export default App;
