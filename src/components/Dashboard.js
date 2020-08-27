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
    border: 2px solid dodgerblue;
    /* width: 70%; */
    height: 80vh;
    padding: 0 2rem 2rem 2rem;
    margin: 0 5%;
    
    .head {
        display: flex;
        justify-content: space-between;
        /* width: 70%; */
        padding: 1rem 2rem 1rem 2rem;
        /* background-color: lightgray; */
        align-items: flex-start;

    }

    .head h1 {
        display:flex;
        align-self: flex-start;
        color: dodgerblue;
    }

    h3{ 
        color: dodgerblue;
    }
    
    .userheader {
        display:flex;
        flex-direction: column;
        align-items: flex-end;
        line-height: .5px;
        align-self: flex-start;
        text-decoration: none;


    }

    .border {
        border: 1px solid dodgerblue;
    }

    .userinfo {
    letter-spacing: 1.5px;
    padding: 6%;
    margin: 3% 2%;
    line-height: 0.8;
    color: dodgerblue;
    border: 2px solid dodgerblue;
    border-radius: 10px;
}

    .userinfo:hover {
        color: black;
        border: 2px solid black;
        border-radius: 10px;
    }

`


const Dashboard = () => {
    const username = localStorage.getItem('username')
    return ( 
        <StyledDiv className='dashboard'>
            <div className='head'>
                <div>

                <h1>Dashboard</h1>
                <h2>Welcome to Wunderlist</h2>
                </div>
                <div className='userheader'>
                    <h3>Hello {username}!</h3>
                    <button className='userinfo'>
                        <Link to ='/protected/dashboard/profile'>User Info</Link>
                    </button>
                </div>
            </div>
            <div className='border'></div>

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