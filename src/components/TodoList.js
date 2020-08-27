
import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function TodoList(props) {
    const { list, form } = props
    console.log('LIST', list)

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
                            <button>Edit List</button>
                            <button onClick={() => deleteList(item.id)}>Delete List</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
// const mapStateToProps = (state)=> {
//     return({
//       ...form
//     })
// }
export default connect(null, {})(TodoList)
