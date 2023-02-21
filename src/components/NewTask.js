import TodoForm from "./TodoForm";

const NewTask = (props)=>{

const saveTaskData = (enteredTaskData)=>{
const taskData = {
   ...enteredTaskData,
   id:Math.random().toString()
}
props.onAddTask(taskData);
}

return <div>
   <TodoForm onSaveTaskData={saveTaskData}/>
   </div>
}

export default NewTask;