
import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function TodoList(props) {
    const { list, form } = props
    console.log('LIST', list)

    const deleteList = () => {
        axiosWithAuth()
            .delete(`/api/lists/${list.id}`)
            .then((res) => console.log('DELETE',res))
            .catch((err) => console.log(err))
    }


    return (
        <div>
            {list.map((item) => {
                return (
                    <>
                        <h1 key={item.id}>{item.name}</h1>
                        <h2 key={item.id +1}>{item.type}</h2>

                        <Todo form={form} list_id={item.id} />
                        <div>
                            <button>Edit List</button>
                            <button onClick={deleteList}>Delete List</button>
                        </div>
                    </>
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
