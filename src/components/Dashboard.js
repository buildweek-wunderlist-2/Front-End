import React from 'react';

import UserProfile from './UserProfile';
import TodoList from './TodoList';


const Dashboard = () => {


    return ( 
        <>
            <UserProfile />
            <TodoList />
            <AddTodo />
        </>
    );
};
export default Dashboard;