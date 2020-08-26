import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams, Switch } from 'react-router-dom';
import { useHistory, Route } from 'react-router-dom';
import UpdateUser from './UpdateUser';


const UserProfile = () => {
    const [user, setUser] = useState(null);
    const params = useParams();
    const id = localStorage.getItem('id')
    const { push } = useHistory()


    const fetchUser = () => {
        console.log('id -->', id)

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
            })
    }

 
    useEffect(() => {
        fetchUser(params.id);
    }, [params.id]);
    
    if (!user) {
        return <div>Loading user Profile...</div>
    }

    return (
        <div>
            <h1>User Profile</h1>
            <h2>Username: {user.username}</h2>
            <h3>Email: {user.email}</h3>
            <button onClick={deleteUser}>Delete User</button>
            <UpdateUser />



        </div>
    );

};
export default UserProfile;