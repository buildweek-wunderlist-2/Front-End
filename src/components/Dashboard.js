import React, { useEffect, useState, useRef } from "react";
import AddToDo from './AddTodo'
import AddList from './AddList'
import UserProfile from './UserProfile';
import TodoList from './TodoList';
import { Route, Link, Switch } from "react-router-dom";
import UpdateUser from './UpdateUser';
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components'
import {TweenMax,Power3} from 'gsap'

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
    
    span {
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        line-height: .5px;
        align-self: flex-start;

    }

    .border {
        border: 1px solid dodgerblue;
    }
`


const Dashboard = () => {
    const username = localStorage.getItem('username')
    let signinForm = useRef(null)

    useEffect(()=> {
      TweenMax.to(
        signinForm, 
        .8,
        {
          opacity: 1,
          y: -30,
          ease: Power3.easeOut
        }
      )
    })

    return ( 
        <StyledDiv className='dashboard' ref={el => {signinForm=el}}>
            <div className='head'>
                <span>

                <h1>Dashboard</h1>
                <h2>Welcome to Wunderlist</h2>
                </span>
                <span>
                    <h3>Hello {username}!</h3>
                    <p>edit your user info <Link to ='/protected/dashboard/profile'>here</Link></p>
                </span>
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