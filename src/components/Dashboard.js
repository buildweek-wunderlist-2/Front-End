import React, { useEffect, useState, useRef } from "react";
import AddToDo from './AddTodo'
import AddList from './AddList'
import UserProfile from './UserProfile';
import TodoList from './TodoList';
import { Route, Link, Switch, useHistory} from "react-router-dom";
import UpdateUser from './UpdateUser';
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components'
<<<<<<< HEAD
import EditList from "./EditList"
=======
import {TweenMax,Power3} from 'gsap'
>>>>>>> ff92c345b6a41f4f356bf5d9c163854590a07150

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
        margin-top: 2rem;

    }

    .head h1 {
        display:flex;
        align-self: flex-start;
        color: dodgerblue;
    }

    h3{ 
        color: dodgerblue;
    }
    .title {
        display:flex;
        flex-direction: column;
        align-items: flex-end;
        line-height: .5px;
        align-self: flex-start;
        text-decoration: none;
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

    .headerbtn {
    letter-spacing: 1.5px;
    padding: 7%;
    margin: 3% 2%;
    line-height: 0.8;
    color: dodgerblue;
    border: 2px solid dodgerblue;
    border-radius: 10px;
    }

    .headerbtn:hover {
        color: black;
        border: 2px solid black;
        border-radius: 10px;
    }

    .logout {
        letter-spacing: 1.5px;
        padding: 7%;
        margin: 3% 2%;
        line-height: 0.8;
        color: red;
        border: 2px solid red;
        border-radius: 10px;
    }
    
    .logout:hover {
        color: dodgerblue;
        border: 2px solid dodgerblue;
        border-radius: 10px;
    }
`


const Dashboard = () => {
    const username = localStorage.getItem('username')
    const { push } = useHistory();

    let dashboard = useRef(null)

    useEffect(()=> {
      TweenMax.to(
        dashboard, 
        .8,
        {
          opacity: 1,
          y: -30,
          ease: Power3.easeOut
        }
      )
    })

    return ( 
        <StyledDiv className='dashboard' ref={el => {dashboard=el}}>
            <div className='head'>
                <div className='title'>

                <h1>Dashboard</h1>
                <h2>Welcome to Wunderlist</h2>
                </div>
                <div className='userheader'>
                    <h3>Hello {username}!</h3>
                    <button className='headerbtn' onClick={() => {push(`/protected/dashboard/profile`)}}>
                        User Info
                    </button>
                    <button className='logout' onClick={() => {
                        localStorage.clear()
                        window.location.reload()
                    }}>
                        Logout
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
                    <Route path='/protected/dashboard/edit-list/:id'>
                        <EditList />
                    </Route>
                </Switch>
            {/* <TodoList /> */}
        </StyledDiv>
    );
};
export default Dashboard;