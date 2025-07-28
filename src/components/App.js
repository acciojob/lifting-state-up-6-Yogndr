import React, { useState } from 'react';
import Child from './Child'; // Ensure you import your Child component

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a React app', completed: false },
    { text: 'Deploy the React app', completed: false },
  ]);

  const handleComplete = (index) => {
    // Update the todos state to mark the todo as completed
    setTodos(prevTodos => 
      prevTodos.map((todo, i) => 
        i === index ? { ...todo, completed: true } : todo
      )
    );
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      {todos.map((todo, index) => (
        <Child 
          key={index} 
          value={todo.text} 
          completed={todo.completed} 
          handle={() => handleComplete(index)} 
        />
      ))}
    </div>
  );
}

export default App;
