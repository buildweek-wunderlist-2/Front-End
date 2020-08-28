import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';



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

    const toggleItem = (id) => {
        const newTodo = listItems.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed,
                };
            } else {
                return item;
            }
        });
        setListItems(newTodo);
    };

    const deleteItem = (item) => {
        listItems.forEach(item => {
            if (item.completed === true) {
                axiosWithAuth()
                    .delete(`/api/lists/${props.list_id}/tasks/${item.id}`)
                    .then(res => {
                        console.log(res.data)
                        const deletedItems = listItems.filter((index) => {
                            return index.id !== item.id
                        })
                        setListItems(deletedItems)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }

        })
    }

    return (
        <div >
            {listItems.map((item) => {
                return (
                    <p onClick={() => toggleItem(item.id)} className={`item${item.completed ? " completed" : ""}`} key={item.id}>{item.name}</p>
                )
            })}
            <button onClick={deleteItem}>Clear Completed</button>
        </div>
    );
};
export default connect(null, {})(Todo)