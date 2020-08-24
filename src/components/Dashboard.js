import React from 'react';

import UserProfile from './UserProfile';
import TodoList from './TodoList';


const Dashboard = () => {


    return ( 
        <>
            <h1>Dashboard</h1>
            <UserProfile />
            <TodoList />
            <AddTodo />
        </>
    );
};
export default Dashboard;