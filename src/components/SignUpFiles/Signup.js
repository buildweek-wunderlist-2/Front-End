import React, { useState, useEffect } from "react"
import * as yup from 'yup'
import signupFormSchema from "./signupFormSchema"
import axios from 'axios'
import styled from 'styled-components'


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
    name: '',
    email: '',
    password: '',
 }

 const initialErrors = {
     name: '',
     email: '',
     password: '',
 }

 const initialDisabled = true
 const initialUsers = []

 const [values, setValues] = useState(initialValues)
 const [disabled, setDisabled] = useState(initialDisabled)
 const [users, setUsers] = useState(initialUsers)
 const [errors, setErrors] = useState(initialErrors)

 const postNewUser = newUser => {

            setUsers([...users, newUser])
            setValues(initialValues)
            console.log(newUser)
            
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


 const submit = evt => {

    const newUser = {
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
    }

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

                <label>Name: 
                    <input 
                     value = {values.name}
                     onChange = {inputChange}
                     name = 'name'
                     type = 'text'
                    />
                <div>{errors.name}</div>
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
        </form>
        </>
    )

}