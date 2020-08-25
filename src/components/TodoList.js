import React from 'react'

function TodoList() {

    return(
        <div>
            <h1>List Name</h1>
            <h2>Category</h2>
            {/* filter to show list in correct category */}
            <p>List Item</p>
            <p>List Item</p>
            <p>List Item</p>
            <p>List Item</p>
            <div>
                <button>Edit List</button>
                <button>Delete List</button>
            </div>
        </div>
    )
}
export default TodoList