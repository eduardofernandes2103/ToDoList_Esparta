import { useState } from 'react';
import './App.css';

function App() {
  const [ addTask, setAddTask ] = useState("");
  const [ tasks, setTasks ] = useState([]);
  const [ completedTask, setCompletedTask ] = useState([]);

  const handleAddTask = () => {
    setTasks([...tasks, addTask])
  }

  return (
    <div>
      <div className="addTaskplace">
        <input 
                placeholder="New Task Name"
                value={addTask}
                onChange={(e) => setAddTask(e.target.value) }    
        />
        <button onClick={() => handleAddTask()}>+ New Task</button>
      </div>
    </div>
  );
}

export default App;
