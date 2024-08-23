import "./TaskItem.css"

const TaskItem = ({ task, endpoint, handleDelete }) => {


  return (
    <div className={`app-task-item ${endpoint !== "tasks" && "project-pad"}`}>

      {endpoint === "tasks" && (
        <div className="task-header">
          <p className="task-id">{task.id}</p>
          <p className="task-created-date">Created On: {task.created_at.split("T")[0]}</p>
        </div>
      )}
      <h2 className="task-title">{task.title}</h2>
      <p className="task-desc">{task.description}</p>
      {endpoint === "tasks" ? (
        <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete Task</button>
      ) : (
        <p className="task-created-date">Created On: {task.created_at.split("T")[0]}</p>
      )}
      
    </div>
  )
}

export default TaskItem