import { useEffect, useState } from "react"
import TaskItem from "../TaskItem/TaskItem"
import "./TaskList.css"



const TaskList = ({ endpoint }) => {
    const [tasksList, setTasksList] = useState([])

    const fetchProjectTasks = async () => {
      const response = await fetch(`api/${endpoint}`)
      if (response.ok){
        const data = await response.json()

        console.log(data)
        if (endpoint === "tasks"){
          setTasksList(data["Tasks"])
        }
        else {
          setTasksList(data["Project"])
        }
      }
      else{
        alert(`Error Occurred when trying to retrieve tasks from api/${endpoint}`)
        return;
      }
    }

    useEffect( () => {
      fetchProjectTasks()
    }, [endpoint])


  return (
    <div className="app-tasks">

      {tasksList && tasksList.length > 0 ? (
        <div className="app-tasks-display">
          <h2>Tasks Count: {tasksList.length}</h2>
          <div className="app-tasks-list">
              {tasksList.map((task) => (
                  <TaskItem key={task.title + task.description} task={task}/>
              ))}
          </div>
        </div>
      ) : (
        <div className="empty-tasklist">
          <h2>Welcome to the Task Keeper</h2>
          <p>Tasks will be displayed here. Looks like there are no tasks.</p>
          <p>Navigate to the Create Task page to being creating your tasks</p>
        </div>
      )}


    </div>
  )
}

export default TaskList