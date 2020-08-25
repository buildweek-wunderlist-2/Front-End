import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createListItem } from '../actions/actions'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'



function AddToDo(props) {
    const [list, setList] = useState([])
    const initialFormValue = {
        name: '',
        completed: false,
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

        props.createListItem(form)
    }

    
    useEffect(() => {
        axiosWithAuth()
            .get('/api/lists')
            .then((res) => {
                setList(res.data.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h1>Add List Item</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Select List: </label>
                    <select
                        name='list'
                        value={form.list}
                        onChange={handleChange}
                    >
                        {list.map((item) => {
                            return <option value={item.list_id}>{item.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <input
                        type='input'
                        name='name'
                        placeholder='Add Task'
                        value={form.name}
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
const mapStateToProps = (state) => {
    return ({
        name: state.name,
        list_id: state.list_id
    })
}
export default connect(mapStateToProps, { createListItem })(AddToDo)