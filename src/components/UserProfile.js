import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const params = useParams();
    console.log("UserProfile -> params", params)

    const fetchUser = id => {

        axiosWithAuth()
            .get(`/api/users/1598375372870`)
            .then(res => {
            console.log("UserProfile -> res", res)
            })
            .catch(err => {
            console.log("UserProfile -> err", err.response)
            })
    };

    useEffect(() => {
        fetchUser(params.id);
    }, [params.id]);
    
    if (!user) {
        return <div>Loading user Profile...</div>
    }

    return (
        <div>
            <h1>User Profile</h1>
            <h2>Name: </h2>
            <h3>Email: </h3>
        </div>
    );

};
export default UserProfile;