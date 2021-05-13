import React from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function AddTodo() {
    
   return (
      <div className='col al-jus-cen'>
         <TodoForm />
         <TodoList />
      </div>
   )
}

export default AddTodo
