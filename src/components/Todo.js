import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Todo = props => {
    const [listItems, setListItems] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/lists/${props.list_id}/tasks`)
            .then((res) => {
                setListItems(res.data.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        // <div
        //     className={`todo${props.todo.completed ? ' completed' : ''}`}

        // >
        //     <p>todo task: </p>
        //     <p>complete by: </p>
        // </div>
        <div>
            {listItems.map((item) => {
                return(
                    <p>{item.name}</p>
                )
            })}
        </div>
    );
};
export default Todo;