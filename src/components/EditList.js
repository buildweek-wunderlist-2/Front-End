import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { connect } from 'react-redux'

function EditList(props) {

    const [form, setForm] = useState([])
    const [listName, setListName] = useState([])
    const history = useHistory()
    const { id, listid } = useParams()

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/lists/${listid}/tasks/${id}`)
            .then((res) => {
                setForm(res.data.data)
                console.log(res)
            })
            .catch((err) => console.log(err))

        axiosWithAuth()
            .get(`/api/lists/${listid}`)
            .then((res) => {
                setListName(res.data.data)
            })
    }, [])

    console.log('FORM', form)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        const updatedTodo = {name: form.name, list_id: form.list_id}
        axiosWithAuth()
            .put(`/api/lists/${listid}/tasks/${id}`, updatedTodo)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <h1>Edit Items</h1>
            <form onSubmit={handleUpdate}>

                <input
                    type='text'
                    name='name'
                    // placeholder={item.name}
                    value={form.name}
                    onChange={handleChange}
                />

                <button>Update</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('STATE', state)
    return ({
        name: state.name,
        list_id: state.list_id
    })
}
export default connect(null, {})(EditList)