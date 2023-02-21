import TaskItem from "./TaskItem";


const Tasks = (props)=>{
return(
<ul>
{props.items.map((tasks)=>{
return <TaskItem 
  key={tasks.id}
  id={tasks.id}
  task={tasks.task}
  description={tasks.description}
  date={tasks.Date}
  onDelete={props.onDeleteItem}
/>
})}
</ul>
);
}
export default Tasks;