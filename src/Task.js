// Task.js
import React from 'react' ;

function Task ({text,completed,onRemove,onMarkCompleted}) {
  return (
    <div>
      <span style = {{textDecoration:completed?' line-through ':'none'}}> {text} </span>
      <button onClick = {onRemove} > Remove </button>
      <button onClick = {onMarkCompleted} > {completed?'Mark off':'Mark as Complete'}</button>
    </div>
);
}

export default Task ;
