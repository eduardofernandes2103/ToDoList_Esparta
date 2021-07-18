import { useState } from 'react';
import Card from './components/Card'
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

      <div className="taskToDo">
        <h2>Tasks To Do</h2>
        {
          tasks.map((task, index) => (
            <Card 
              key={index}
              name={task}
              children1="Done!"
            />
          ))}
      </div>

    </div>
  );
}

export default App;
