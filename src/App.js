import { useState } from 'react';
import Card from './components/Card'
import { Container } from './styles'


function App() {
  const [ addTask, setAddTask ] = useState("");
  const [ tasks, setTasks ] = useState([]);
  const [ completedTask, setCompletedTask ] = useState([]);

  const handleAddTask = () => {
    setTasks([...tasks, addTask])
  }

  const handleCompleteTask = (task) => {
    const newElement = tasks.filter((element) => element !== task)
    setTasks(newElement);
    setCompletedTask([...completedTask, task])
  }

  const handleUncompleteTask = (task) => {
    const newElement = completedTask.filter((element) => element !== task)
    setCompletedTask(newElement);
    setTasks([...tasks, task])
  }

  const handleRemoveTasks = (task) => {
    const newElement = tasks.filter((element) => element !== task)
    setTasks(newElement);
  }

  const handleRemoveCompleted = (task) => {
    const newElement = completedTask.filter((element) => element !== task)
    setCompletedTask(newElement);
  }
  
  return (
    <Container>
      
      <input 
              placeholder="New Task Name"
              value={addTask}
              onChange={(e) => setAddTask(e.target.value) }    
      />
      <button onClick={() => handleAddTask()}>+ New Task</button>
  

      <div className="lists">
        <div className="taskToDo">
          <h2>Tasks To Do</h2>
          {
            tasks.map((task, index) => (
              <Card 
                key={index}
                name={task}
                click1={() => handleCompleteTask(task)}
                children1="Done!"
                click2={() => handleRemoveTasks(task)}
              />
            ))}
        </div>

        <div className="completedTask">
          <h2>Completed Tasks</h2>
          {
            completedTask.map((task, index) => (
              <Card 
                key={index}
                name={task}
                click1={() => handleUncompleteTask(task)}
                children1="Uncomplete"
                click2={() => handleRemoveCompleted(task)}
              />
            ))}
        </div>
      </div>

    </Container>
  );
}

export default App;
