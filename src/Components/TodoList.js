import React, {useContext} from 'react'
import { AppContext } from '../App';


function TodoList() {
   const context = useContext(AppContext)
   return (
      <ul>
         {context.tasks.map((item)=><li>{item}</li>)}
      </ul>
   )
}

export default TodoList
