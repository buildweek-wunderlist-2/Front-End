import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
    username:'',
    password:'',
}

const initialUsers = []

export default function Login(){
    const [userInfo, setUserInfo] = useState(initialFormValues)
    const [users, setUsers] = useState(initialUsers)
    const { push } = useHistory()

    const login = () => {
        axiosWithAuth()
            .post('/api/auth/login', newOrder)
            .then((res) => {
                console.log("login -> res", res)
                localStorage.setItem('token', res.data.payload)
                // setUsers(res.data)
                push('/protected')
                
            })
            .catch((err) => {
            console.log("login -> err", err)
            })
            .finally( ()=> {
                setUserInfo(initialFormValues)
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

          {
              users.map( (user)=> {
                  return <LoginInfo key={user.id} user={user}/>
              })
          }

        </div>
    )
}


function LoginInfo({user}){

    return(
        <div>
            <p>
                Username: {user.username}
            </p>
            <p>
                Password:{user.password}
            </p>
        </div>
    )
}