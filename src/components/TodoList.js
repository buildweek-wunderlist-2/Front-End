
import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

function TodoList(props) {
    const { list, form } = props
    console.log('FORM', form)

    return (
        <div>
            {list.map((item) => {
                return (
                    <>
                        <h1 key={item.id}>{item.name}</h1>
                        <h2>{item.type}</h2>

                        <Todo form={form} list_id={item.id} />
                        <div>
                            <button>Edit List</button>
                            <button>Delete List</button>
                        </div>
                    </>
                )
            })}
        </div>
    )
}
<<<<<<< HEAD
// const mapStateToProps = (state)=> {
//     return({
//       ...form
//     })
// }
export default connect(null, {})(TodoList)
=======
export default TodoList
>>>>>>> 1471b8c58b6920f8eaf416ff57039b4098cc9a35
