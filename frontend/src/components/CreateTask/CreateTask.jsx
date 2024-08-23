import React, { useState } from 'react'
import "./CreateTask.css"

const CreateTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [created, setCreated] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault()
        const request = await fetch(`api/tasks/create/?title=${title}&description=${description}`)

        if (request.ok){
            setTitle("")
            setDescription("")
            setCreated(true)
            const response = await request.json()
            console.log(response)
        }
        else {
            alert("Something went wrong")
        }
    }

  return (
    <div className='app-create-form'>
        <h2>Create a New Task:</h2>
        <form method='POST' onSubmit={(e) => {handleSubmit(e)}}>
            <div className='form-input-title'>
                <label className='form-label' htmlFor="title">Title:</label>
                <input type="text" id="title" placeholder='Enter Title Here' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='form-input-desc'>
                <label className='form-label' htmlFor="desc">Description:</label>
                <textarea type="text" id="desc" value={description} placeholder='Enter Task Description Here (Optional)' onChange={(e) => setDescription(e.target.value)} />
            </div>

            <button className='form-button' type='submit'>Create</button>
        </form>

        {created && (
            <h2>Task Successfully Created!</h2>
        )}
    </div>
  )
}

export default CreateTask