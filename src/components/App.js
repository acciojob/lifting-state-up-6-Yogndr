import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const todoList = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false }
]

const App = () => {
    const [todos, setTodos] = useState(todoList);



  const handleComplete=(id)=>{
      const reWrite=todos.map(todo=>todo.id===id?{...todo, completed:true}: todo)
      setTodos(reWrite)
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent component</h1>
        <TodoList todos = {todos} handleComplete = {handleComplete}/> 
        {/* <Parent/> */}
    </div>
  )
}

export default App
