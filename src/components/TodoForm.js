import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
   const [getTask, setGetTask] = useState("");
   const [getDescription, setGetDescription] = useState("");
   const [getDate, setGetDate] = useState("");
   

   const taskChangeHandler = (event) => {
      setGetTask(event.target.value);
   }
   
   const descriptionChangeHandler = (event) => {
      setGetDescription(event.target.value)
   }

   const dateChangeHandler = (event) => {
      setGetDate(event.target.value)
   }
   const submitChangeHandler = (event) => {
      event.preventDefault();

      const taskData = {
         task : getTask,
         description : getDescription,
         Date : new Date(getDate)
      }
    
      props.onSaveTaskData(taskData);


      setGetDate("");
      setGetDescription("");
      setGetTask("");
   }
   return (
      <form onSubmit={submitChangeHandler}>
         <div className="form-controls">
            <div className="form-controls">
               <label htmlFor="input">Task</label>
               <input type="text" value={getTask} onChange={taskChangeHandler} required></input>
            </div>
            <div className="form-controls">
               <label htmlFor="description">Task Description</label>
               <input type="text" value={getDescription} onChange={descriptionChangeHandler} required></input>
            </div>
            <div className="form-controls">
               <label htmlFor="date">Completion Date</label>
               <input type="date" value={getDate} onChange={dateChangeHandler} required></input>
            </div>
            <button type="submit" className="form-controls-actions">Add Task</button>

         </div>
      </form>
   )
}

export default TodoForm;
