import React, { useState } from 'react'
import './OptionMenu.css'
import Button from '../Button/Button'
import TaskList from '../TaskList/TaskList'
import CreateTask from '../CreateTask/CreateTask'


const OptionMenu = () => {
  const [optionSelected, setOptionSelected] = useState(0);
  
  const handleButtonClick = (option) => {
    console.log(option, "pressed")
    setOptionSelected(option)
  }
  
  return (
    <div className='app-option-menu'>
      <h2 className='app-option-title'>Click One of The Following</h2>
      <div className='app-option-buttons'>
        <Button handleClick={() => handleButtonClick(0)} text={"View Your Tasks"} />
        <Button handleClick={() => handleButtonClick(1)} text={"Create New Task"} />
        <Button handleClick={() => handleButtonClick(2)} text={"View This Project's Tasks"} />
      </div>

      {optionSelected === 0 ? (
        <TaskList endpoint={"tasks"} />
      ) : optionSelected === 1 ? (
        <CreateTask />
      ) : (
        <TaskList endpoint={"project-tasks"} />
      )
    }
    </div>
  )
}

export default OptionMenu