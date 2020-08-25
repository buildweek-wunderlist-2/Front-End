import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function AddToDo() {
    const initialFormValue = {
        id: '',
        name: '',
        completed: '',
        list_id: ''
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
        axiosWithAuth()
            .post('')
        //redirect to ToDoList
        //apply timestamp
    }

    return (
        <div>
            <h1>Add List Item</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Select List: </label>
                    <select
                        name='list'
                        value={form.category}
                        onChange={handleChange}
                    >
                        {/* map over list id's for values here */}
                        <option value='1'>To Do</option>
                        <option value='2'>Work</option>
                        <option value='3'>Shopping</option>
                    </select>
                </div>
                <div>
                    <input
                        type='input'
                        name='name'
                        placeholder='Add Task'
                        value={form.todo}
                        onChange={handleChange}
                    />

                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}
export default AddToDo