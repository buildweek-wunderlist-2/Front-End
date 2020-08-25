import React, {useEffect, useState } from 'react';
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
    username:'',
    password:'',
}


export default function Login(){
    const [userInfo, setUserInfo] = useState(initialFormValues)
    const { push } = useHistory()
    const [userData, setUserData] = useState()

    const login = () => {
        axiosWithAuth()
            .post('/api/auth/login', newOrder)
            .then((res) => {
                console.log("login -> user", res.data.data)
                localStorage.setItem('token', res.data.token)
                setUserData(res.data.data)
                push('/protected')
                console.log("login -> userData", userData)
                
            })
            .catch((err) => {
                console.log("login -> err", err)
            })
            .finally(() => {
            })
         
    }

    const inputChange = (evt) =>{
        const {name, value } = evt.target
        setUserInfo({
            ...userInfo,
            [name]:value,
        })
    }
    
    const newOrder = {
        username: userInfo.username,
        password: userInfo.password
    }
    const submit = (evt) => {
        evt.preventDefault();
        login(newOrder)
    }


    return(

        <div className='login'>
          <h3>
              User Name:
          </h3>
          <form onSubmit={submit}>

            <input
            value={userInfo.username}
            onChange={inputChange}
            name="username"
            type="text"
            />
            <h3>
                Password:
            </h3>
            <input
            value={userInfo.password}
            onChange={inputChange}
            name="password"
            type="password"
            />

            <button>
                Log In
            </button>
          </form>

        </div>
    )
}


