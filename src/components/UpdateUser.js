import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid'


const initialUser = {
    id: uuid(),
    username: '',
    email: '',
    password: '',
    time: '',
};

const UpdateUser = () => {
    const [user, setUser] = useState(initialUser)



    return (
        <div>
            <h2>Update User</h2>
            <from>
                <label>Username</label>
                <input
                type="text"
                name="username"
                onChange={}
                placeholder="username"
                value={}
                />
                <div className="baseline" />
                <label>email</label>

                <input
                type="string"
                name="email"
                onChange={}
                placeholder="email"
                value={}
                />
                <div className="baseline" />
                <label>password</label>

                <input
                type="password"
                name="password"
                onChange={}
                placeholder="password"
                value={}
                />
                <div className="baseline" />
                
                <button className="md-button form-button">Update</button>

            </from>
        </div>
    );
};
export default UpdateUser;