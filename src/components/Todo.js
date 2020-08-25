import React from 'react';


const Todo = props => {
    return (
        <div
            className={`todo${props.todo.completed ? ' completed' : ''}`}

        >
            <p>todo task: </p>
            <p>complete by: </p>
        </div>
    );
};
export default Todo;