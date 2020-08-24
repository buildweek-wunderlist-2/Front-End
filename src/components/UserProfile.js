import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const params = useParams();

    const fetchUser = id => {
        axiosWithAuth()
            .get(`/api/users/${id}`)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.response)
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