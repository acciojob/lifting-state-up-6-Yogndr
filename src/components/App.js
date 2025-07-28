import React, { useState } from 'react';
import Child from './Child'; // Ensure you import your Child component

const App = () => {
  const [todos, setTodos] = useState(['Learn React', 'Build a React app', 'Deploy the React app']); // Sample todos

  const handleComplete = (index) => {
    // Update the todos state to remove the completed todo
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      {todos.map((todo, index) => (
        <Child key={index} value={todo} handle={() => handleComplete(index)} />
      ))}
    </div>
  );
}

export default App;
