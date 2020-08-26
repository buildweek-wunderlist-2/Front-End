import React, { useState } from 'react';

import UserProfile from './UserProfile';
import TodoList from './TodoList';
import { Route, useHistory, Switch } from "react-router-dom";
import UpdateUser from './UpdateUser';
import PrivateRoute from './PrivateRoute';



const Dashboard = () => {

    return ( 
        <>
            <h1>Dashboard</h1>
                
                <UserProfile />
               
            {/* <TodoList /> */}

        </>
    );
};
export default Dashboard;