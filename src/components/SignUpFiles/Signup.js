import React, { useState, useEffect } from "react"
import * as yup from 'yup'
import signupFormSchema from "./signupFormSchema"
import styled from 'styled-components'
import { axiosWithAuth } from "../../utils/axiosWithAuth"
import { Link, useHistory } from 'react-router-dom';
import uuid from "react-uuid"


const StyledDiv = styled.div`

display:flex;
flex-direction: column;
align-items: center;

button{
    width: 15%;
    padding: 1%;
    margin: 1%;
}

label{
    padding: 2%;
    display: flex;
    justify-content: space-between;
    width: 27.5%;
}

input{
    margin: 1%;
}

`


export default function SignUp(props){

 const initialValues = {
    username: '',
    email: '',
    password: '',
 }

 const initialErrors = {
     username: '',
     email: '',
     password: '',
 }

 const initialDisabled = true
 const initialUsers = []

 const [values, setValues] = useState(initialValues)
 const { push } = useHistory()

 const [disabled, setDisabled] = useState(initialDisabled)
 const [users, setUsers] = useState(initialUsers)
 const [errors, setErrors] = useState(initialErrors)

 const postNewUser = () => {
    
    axiosWithAuth()
    .post(`/api/auth/register`, newUser)
    .then(res => {
        console.log("postNewUser -> res.data", res)
        localStorage.setItem('token', res.data.token)
        push(`/login`)

            setUsers([...users, newUser])
            setValues(initialValues)
            console.log(newUser)
            

    })
    .catch(err => console.log(err))
    console.log("postNewUser -> newUser", newUser)
    
    
    // setUsers([...users, newUser])
    // setValues(initialValues)

 }

 const inputChange = evt => {

    const {name, value} = evt.target

    yup
    .reach(signupFormSchema, name)
    .validate(value)
    .then(valid => {
        setErrors({
            ...errors, 
            [name]: ''
        })
    })
    .catch(err => {
        setErrors({
            ...errors,
            [name]: err.errors[0]
        })
    })
    
    setValues({
        ...values, 
        [name]: value
    })

 }

 const newUser = {
     username: values.username,
     email: values.email,
     password: values.password,
     id: Date.now()
 }

 const submit = evt => {


    evt.preventDefault()
    postNewUser(newUser)


 }

    useEffect(() => {
    signupFormSchema.isValid(values)
      .then(valid => {
        setDisabled(!valid);
      }
    )}, [values]) 

    return (
        <>
        
        <form onSubmit = {submit}>
            <StyledDiv>
                <h2>Information Here</h2>

                <label>Username: 
                    <input 
                     value = {values.username}
                     onChange = {inputChange}
                     name = 'username'
                     type = 'text'
                    />
                <div>{errors.username}</div>
                </label>

                <label>Email: 
                    <input 
                    value = {values.email}
                    onChange = {inputChange}
                    name = 'email'
                    type = 'email'
                    />
                <div>{errors.email}</div>
                </label>

                <label>Password:
                    <input
                    value = {values.password}
                    onChange = {inputChange}
                    name = 'password'
                    type = 'password'
                    />
                  <div>{errors.password}</div>
                </label>

                <button disabled = {disabled}>Join Us!</button>
            </StyledDiv>
                <p>already have an account?</p>
                <h3> <Link to = '/login'> Login Here</Link>  </h3>

        </form>
        </>
    )

}