import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { connect } from 'react-redux'

function EditList(props) {

    const [form, setForm] = useState([])
    const [listName, setListName] = useState([])
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/lists/${id}/tasks`)
            .then((res) => {
                setForm(res.data.data)
                console.log(res.data.data)
                console.log('FORM', form)
            })
            .catch((err) => console.log(err))

        axiosWithAuth()
            .get(`/api/lists/${id}`)
            .then((res) => {
                setListName(res.data.data)
            })
    }, [])


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .put(`/api/lists/${id}/tasks`, form)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <h1>Edit Items</h1>
            <form onSubmit={handleUpdate}>
                <h2>{listName.name}</h2>
                {form.map((item) => {
                    return (
                        <div key={form.list_id}>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>
                    )
                })}


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