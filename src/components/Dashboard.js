import React, { useState } from 'react';
import AddToDo from './AddTodo'
import AddList from './AddList'
import UserProfile from './UserProfile';
import TodoList from './TodoList';
import { Route, Link, Switch } from "react-router-dom";
import UpdateUser from './UpdateUser';
import PrivateRoute from './PrivateRoute';



const Dashboard = () => {
    const username = localStorage.getItem('username')
    return ( 
        <>
            <h1>Dashboard</h1>
                <h3>Hello {username}!</h3>
                <h2>Welcome to Wunderlist</h2>

                <p>edit your user info <Link to ='/protected/dashboard/profile'>here</Link></p>
                    <Switch>
                        <Route exact path='/protected/dashboard'>

                            <AddList />
                            <AddToDo />
                        </Route>
                        <Route path='/protected/dashboard/profile'>
                            <UserProfile />
                        </Route>
                    </Switch>
            {/* <TodoList /> */}
        </>
    );
};
export default Dashboard;