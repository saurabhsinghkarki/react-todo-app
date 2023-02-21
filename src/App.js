import { useState } from 'react';
import './App.css';
import NewTask from './components/NewTask';
import Tasks from './components/Tasks';

function App() {
const [tasks , setTasks] = useState([]);
  const addTaskHandler = (formTaskData)=>{
  setTasks((prevState)=>{
    return [formTaskData , ...prevState];
  });
  };

  const deleteItemHandler = (TaskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== TaskId);
      return updatedTasks;
    });
  }


  return (
    <div className="App">
      <NewTask onAddTask = {addTaskHandler}/>
      <Tasks items = {tasks} onDeleteItem={deleteItemHandler}/>
    </div>
  );
}

export default App;
