import TaskDate from "./TaskDate";
import "./Taskitem.css";
import React, { useState } from "react";

const TaskItem = (props) => {
   console.log(props.date)
   const [isChecked, setIsChecked] = useState(false);
   const onCheckedHandler = () => {
      setIsChecked(!isChecked);
   }

   const deleteHandler = () => {
      props.onDelete(props.id);
   };


   if (new Date(props.date).toLocaleString("en-US", { day: "2-digit" }) < new Date().toLocaleString("en-US", { day: "2-digit" }) && new Date(props.date) < new Date()){
      return (
         <div>
            <div className="task-item2">
               <TaskDate date={props.date} />
               <div className="task-item__description">
                  <h2> {isChecked ? <del> {props.description} </del> : props.description}</h2>
                  <div className="task-item__price">{props.task}</div>
               </div>
               <input type="checkbox" style={{ width: "100px" }} checked={isChecked} onChange={onCheckedHandler} />
               <p>Due Day is passed!</p>
               <button onClick={deleteHandler}>Delete</button>
            </div>
         </div>

      )
   }

   else {
      return (
         <div className="task-item">
            <TaskDate date={props.date} />
            <div className="task-item__description">
               <h2> {isChecked ? <del> {props.description} </del> : props.description}</h2>
               <div className="task-item__price">{props.task}</div>
            </div>
            <input type="checkbox" style={{ width: "100px" }} checked={isChecked} onChange={onCheckedHandler} />
            <button onClick={deleteHandler}>Delete</button>

         </div>
      )
   }

}
export default TaskItem;