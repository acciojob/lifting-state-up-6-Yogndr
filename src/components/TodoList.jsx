import React from 'react'

const TodoList = ({todos, handleComplete}) => {
  return (
    <div>
      <ul>
        <h2>Child Component</h2>
            {
              todos.map(each => {
                return (
                  <li key={each.id}>
                    <p>{each.text}</p>
                    {!each.completed && <button onClick={() => handleComplete(each.id)}>Completed</button>}

                  </li>
                )
              })
            }
      </ul>
    </div>
  )
}

export default TodoList
