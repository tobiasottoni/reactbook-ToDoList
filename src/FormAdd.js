//FormAdd.js
import React, {useState} from 'react' ;

function FormAdd({onAdd}) {
  const [newTask,setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask.trim() !== '') {
      onAdd (newTask);
      setNewTask('');
}
};

  return(
    <div>
      <input
        type= "text"
        placeholder= "New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        />
      <button onClick={handleAdd}> Add </button>
    </div>
);
}

export default FormAdd;
