import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import uuid from 'react-uuid'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';


const initialUser = {
    id: uuid(),
    username: '',
    email: '',

};

const UpdateUser = props => {
    const location = useLocation()
    const [user, setUser] = useState(initialUser)
    const { push } = useHistory();

    console.log("props", props)
    useEffect(() => {
        if (location.state) {
            setUser(location.state)
        } else {
            setUser(props.user)
        }
    }, [])

    const changeHandler = evt => {
        evt.persist();
        let value = evt.target.value
        setUser({
            ...user,
            [evt.target.name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/api/users/${props.user.id}`, user)
            .then(res => {
                console.log(res)
                push(`/protected`)
                window.location.reload()
                
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Update User</h2>

            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                type="text"
                name="username"
                onChange={changeHandler}
                value={user.username}
                />
                <div className="baseline" />
                <label>email</label>

                <input
                type="string"
                name="email"
                onChange={changeHandler}
                placeholder="email"
                value={user.email}
                />
                <div className="baseline" />

                <button className="md-button form-button">Update</button>

            </form>
        </div>
    )
};
export default UpdateUser;