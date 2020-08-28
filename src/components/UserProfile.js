import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams, Switch } from 'react-router-dom';
import { useHistory, Route } from 'react-router-dom';
import UpdateUser from './UpdateUser';
import styled from 'styled-components'


const StyledDiv =  styled.div`
    font-size: 62.5%;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: black;
    margin: 5% 0% auto;
    display:flex;
    height: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-content: space-between;
    
    .profile {
        text-align: left;
    }

    button{
    text-decoration: none;
    letter-spacing: 1.5px;
    padding: .7rem;
    margin: 3% 2%;
    line-height: 0.8;
    color: dodgerblue;
    border: 2px solid dodgerblue;
    border-radius: 10px;
    }

    button:hover {
        color: black;
        border: 2px solid black;
        border-radius: 10px;
    }

    .deletebn {
        color:red;
        border: 2px solid red;


    }

`



const UserProfile = () => {
    const [user, setUser] = useState();
    const params = useParams();
    const id = localStorage.getItem('id')
    const { push } = useHistory()


    const fetchUser = () => {
        console.log('userData -->', user)

        axiosWithAuth()
            .get(`/api/users/${id}`)
            .then(res => {
            console.log("UserProfile -> res", res.data.data)
            setUser(res.data.data)
            })
            .catch(err => {
            console.log("UserProfile -> err", err.response)
            })
    };

    const deleteUser = () => {
        axiosWithAuth()
            .delete(`/api/users/${id}`)
            .then(res => {
                console.log(res)
                localStorage.clear()
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
                return (
                    <h1>ERROR</h1>
                )
            })
    }

 
    useEffect(() => {
        fetchUser(params.id);
    }, [params.id]);
    
    if (!user) {
        return <div>Loading user Profile...</div>
    }

    return (
        <StyledDiv>

            <div className='profile'>
                <h1>User Profile</h1>
                <h3>Username: {user.username}</h3>
                <h3>Email: {user.email}</h3>
            </div>
                <UpdateUser user={user}/>
                <button className='deletebn' onClick={deleteUser}>Delete User</button>




        </StyledDiv>
    );

};
export default UserProfile;