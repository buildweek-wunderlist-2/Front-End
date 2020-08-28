
import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

function TodoList(props) {
    const { list, form } = props
    const history = useHistory()

    const deleteList = (id) => {
        axiosWithAuth()
            .delete(`/api/lists/${id}`)
            .then((res) => console.log('DELETE',res))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            {list.map((item) => {
                return (
                    <div key={item.id}>
                        <h1 >{item.name}</h1>
                        <h2 >{item.type}</h2>

                        <Todo form={form} list_id={item.id} />
                        <div>
                            <button onClick={
                                (e) => {
                                    e.preventDefault()
                                    history.push(`/protected/dashboard/edit-list/${item.id}`)
                                }}
                                >Edit List</button>
                            <button onClick={() => deleteList(item.id)}>Delete List</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default connect(null, {})(TodoList)
