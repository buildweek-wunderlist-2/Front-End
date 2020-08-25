import React, { useState } from 'react'

function AddToDo() {
    const initialFormValue = {
        todo: '',
        category: ''
    }
    const [form, setForm] = useState(initialFormValue)

    const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
}

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    //axios post
    //redirect to ToDoList
    //apply timestamp
}

    return(
        <div>
            <h1>Add List Item</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='input'
                        name='todo'
                        placeholder='Add Task'
                        value={form.todo}
                        onChange={handleChange}
                        />
                        
                </div>
                <div>
                    <label>Select Category: </label>
                    <select
                        id='category'
                        name='category'
                        value={form.category}
                        onChange={handleChange}
                        >
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