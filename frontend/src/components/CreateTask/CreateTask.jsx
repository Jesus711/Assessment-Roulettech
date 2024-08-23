import React, { useState } from 'react'
import "./CreateTask.css"

const CreateTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [created, setCreated] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(title.length > 50|| description.length > 100 || title.length < 3){
            alert("Title or Description invalid length. Title must be atleast 3 chars in length and max 50 chars and Description max 100 characters long")
            return;
        }

        const request = await fetch(`api/tasks/create/`, {
            method: 'POST',  // Ensure the method is POST
            headers: {
              'Content-Type': 'application/json',  // Set Content-Type to application/json
            },
            body: JSON.stringify({
                "title" : title,
                "description" : description
            }),  // Convert data to JSON string
          })

        if (request.ok){
            setTitle("")
            setDescription("")
            setCreated(true)
            setTimeout(() => {
                setCreated(false)
            }, 1000)
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