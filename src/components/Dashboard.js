import React, { useState } from 'react';
import AddToDo from './AddTodo'
import AddList from './AddList'
import UserProfile from './UserProfile';
import TodoList from './TodoList';
import { Route, Link, Switch } from "react-router-dom";
import UpdateUser from './UpdateUser';
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components'

const StyledDiv = styled.div`
    background-color: grey;
    border: 2px solid dodgerblue;
    border-radius: 8px;
    width: 70%;
    margin: 0 auto;
    padding: 2rem;

`


const Dashboard = () => {
    const username = localStorage.getItem('username')
    return ( 
        <StyledDiv className='dashboard'>
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
        </StyledDiv>
    );
};
export default Dashboard;