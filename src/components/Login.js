import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormValues = {
    username:'',
    password:'',
}

const initialUsers = []

export default function Login(){
    const [userInfo, setUserInfo] = useState(initialFormValues)
    const [users, setUsers] = useState(initialUsers)

    const postNew = () => {
   axiosWithAuth()
   .post('/api/auth/login', newOrder)
    .then((res) => {
        console.log("postNew -> res", res)
        setUsers([res.data, ...users])
        
    })
    .catch((err) => {
        console.log(err)
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
        postNew(newOrder)
    }


    return(

        <div className='login'>
          <h3>
              User Name:
          </h3>
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
          type="text"
          />

          <button onClick= {submit}>
              Log In
          </button>

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