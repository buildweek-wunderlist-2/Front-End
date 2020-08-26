import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createList } from '../actions/actions'

function AddList(props) {
    const initialData = {
        name: '',
        type: '1'
    }

    const [form, setForm] = useState(initialData)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.createList(form)
    }

    return (
        <div>
            <h1>Add List</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Select Category: </label>
                    <select
                        name='type'
                        value={form.type}
                        onChange={handleChange}
                    >
                        <option value='1'>To Do</option>
                        <option value='2'>Work</option>
                        <option value='3'>Shopping</option>
                    </select>
                </div>
                <div>
                    <button>Add List</button>
                </div>
            </form>
        </div>
    )
}

export default connect(null, { createList })(AddList)