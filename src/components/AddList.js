import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createList } from '../actions/actions'

function AddList() {
    const initialData = {
        name: '',
        type: null
    }

    const [form, setForm] = useState(initialData)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>Add List</h1>
            <div>
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button>Add List</button>
            </div>
        </div>
    )
}
export default connect(null, { createList })(AddList)