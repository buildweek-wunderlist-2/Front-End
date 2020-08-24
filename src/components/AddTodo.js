import React, { useState } from 'react'

function AddToDo() {
    const [form, setForm] = useState({})

    const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
}

    const handleSubmit = (e) => {
    //axios post
    //redirect to ToDoList
    //apply timestamp
}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='input'
                        name='addTask'
                        placeholder='Add Task'
                        value={form.value}
                        onChange={handleChange}
                        />
                        
                </div>
                <div>
                    <label forHtml='category'>Select Category: </label>
                    <select id='category' name='category'>
                        <option value='todo'>To Do</option>
                        <option value='work'>Work</option>
                        <option value='shopping'>Shopping</option>
                    </select>
                </div>
                <div>
                <button>Add</button>
                </div>
            </form>
        </div>
    )
}
export default AddToDo