import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import uuid from 'react-uuid'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'


const StyledDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
align-content: space-between;

h4 {
    text-align: left;
    margin-bottom: 1rem;
    color: dodgerblue;

}


form {
    width: 30%;
    font-size: 1.6rem;
    
}

input{
    display: flex;
    justify-content: flex-end;
    padding: .7rem;
    font-size: 1.3rem;
    width: 100%;
    border-radius: 10px;
    border: 2px solid dodgerblue;
    margin-bottom: .5rem;

    

}

.border {
        border: 1px solid dodgerblue;
        margin-top: .5rem;
    }

`

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
                localStorage.setItem('username',user.username)
                push(`/protected/dashboard`)
                window.location.reload()
                
            })
            .catch(err => console.log(err))
    }

    return (
        <StyledDiv>
            <form onSubmit={handleSubmit}>
                <div className="border" />
                <h4>Update your username</h4>
                <input
                type="text"
                name="username"
                onChange={changeHandler}
                value={user.username}
                />
                <h4>Update your email</h4>

                <input
                type="string"
                name="email"
                onChange={changeHandler}
                placeholder="email"
                value={user.email}
                />

                <button className="md-button form-button">Update</button>
                <div className="border" />

            </form>
        </StyledDiv>
    )
};
export default UpdateUser;