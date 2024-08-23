import "./TaskItem.css"

const TaskItem = ({ task }) => {
  return (
    <div className='app-task-item'>
      <h2 className="task-title">{task.title}</h2>
      <p className="task-desc">{task.description}</p>
    </div>
  )
}

export default TaskItem