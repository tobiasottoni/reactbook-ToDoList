//App.js
import './App.css';
import React , {useState} from 'react';
import Task from './Task';
import FormAdd from './FormAdd';

function App(){
  const [tasks,setTasks]=useState([]);

  const addTask=(newTask)=>{
    setTasks([... tasks,{text: newTask,completed: false}]);
  };

  const removeTask=(index)=>{
    const newTasks=[...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
};

  const markCompleted=(index)=>{
    const newTasks=[... tasks];
    newTasks[index].completed=!newTasks[index].completed;
    setTasks(newTasks);
};

  return (
    <div>
      <h1> My To-Do List </h1>
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          completed={task.completed}
          onRemove={()=>removeTask(index)}
          onMarkCompleted={()=>markCompleted(index)}
        />
)) }
      < FormAdd onAdd={addTask} />
    </div>
);
}

export default App;
