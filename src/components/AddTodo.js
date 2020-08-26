import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createListItem } from '../actions/actions'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import TodoList from './TodoList'



function AddToDo(props) {
    const initialFormValue = {
        name: '',
        completed: false,
        list_id: ''
    }
    const [list, setList] = useState([])
    const [form, setForm] = useState(initialFormValue)
    

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('LIST', list) 
        axiosWithAuth()
            .post(`/api/lists/${form.list_id}/tasks`, {name: form.name, list_id: form.list_id})
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

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
                        name='list_id'
                        onChange={handleChange}
                    >
                        {list.map((item) => {
                            return <option key={item.id} value={item.id}>{item.name}</option>
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
            <TodoList list={list} form={form}/>
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