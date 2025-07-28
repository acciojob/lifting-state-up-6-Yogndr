import React from 'react';

function Child(props) {
  return (
    <div>
      <ol>
        <li>
          {props.value} 
          {props.completed ? " " : (
            <button type="button" onClick={props.handle}>Complete</button>
          )}
        </li>
      </ol>
    </div>
  );
}

export default Child;
