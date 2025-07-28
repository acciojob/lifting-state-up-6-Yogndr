import React from 'react';

function Child(props) {
  return (
    <div>
      <ul>
        <li>
          {props.value} 
          {props.completed ? " " : (
            <button type="button" onClick={props.handle}>Complete</button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Child;
