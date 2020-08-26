import React, { useState } from 'react';
import AddToDo from './AddTodo'
import AddList from './AddList'
import UserProfile from './UserProfile';
import TodoList from './TodoList';
import { Route, useHistory, Switch } from "react-router-dom";
import UpdateUser from './UpdateUser';
import PrivateRoute from './PrivateRoute';



const Dashboard = () => {
    const username = localStorage.getItem('username')
    return ( 
        <>
            <h1>Dashboard</h1>
                <h2>Welcome {username}</h2>
                <UserProfile />
            <AddList />
            <AddToDo />
            {/* <TodoList /> */}

        </>
    );
};
export default Dashboard;