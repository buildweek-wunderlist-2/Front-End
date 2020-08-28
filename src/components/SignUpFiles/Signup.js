import React, { useState, useEffect, useRef } from "react"
import * as yup from 'yup'
import signupFormSchema from "./signupFormSchema"
import styled from 'styled-components'
import { axiosWithAuth } from "../../utils/axiosWithAuth"
import { Link, useHistory } from 'react-router-dom';
import uuid from "react-uuid"
import {TweenMax,Power3} from 'gsap'


const StyledDiv = styled.div`
font-size: 62.5%;
font-size: 1rem;
font-family: 'Roboto', sans-serif;
background-color: #fffafa;
color: black;
margin: 5% 0% auto;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
align-content: space-between;



h2 {
    /* font-family: 'Architects Daughter', cursive; */
    font-size: 2.5rem;
    color: dodgerblue;
  }

h4 {
    text-align: left;
    margin-bottom: 1rem;
    color: dodgerblue;

}

.error {
    color: red;
    font-size: 1rem;
    margin-top: 1rem;
}

button{
    text-decoration: none;
    letter-spacing: 1.5px;
    padding: 3%;
    margin: 3% 2%;
    line-height: 0.8;
    color: dodgerblue;
    border: 2px solid dodgerblue;
    border-radius: 10px;
}

button:hover {
    color: black;
    border: 2px solid black;
    border-radius: 10px;
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

    

}

p {
    margin-bottom: -.5rem;
}


`


export default function SignUp(props){

    let signupForm = useRef(null)

    useEffect(()=> {
      TweenMax.to(
        signupForm, 
        .8,
        {
          opacity: 1,
          y: -30,
          ease: Power3.easeOut
        }
      )
    })

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
        
            <StyledDiv>
        <form onSubmit = {submit} ref={el => {signupForm=el}}>
                <h2>Register Here</h2>
                {/* <div className='input'> */}

                <h4>Username:</h4>
                    <input 
                     value = {values.username}
                     onChange = {inputChange}
                     name = 'username'
                     type = 'text'
                     />
                <div className='error'>{errors.username}</div>
                
                {/* </div> */}

                <h4>Email:</h4> 
                    <input 
                    value = {values.email}
                    onChange = {inputChange}
                    name = 'email'
                    type = 'email'
                    />
                <div className='error'>{errors.email}</div>


                <h4>Password:</h4>
                    <input
                    value = {values.password}
                    onChange = {inputChange}
                    name = 'password'
                    type = 'password'
                    />
                  <div className='error'>{errors.password}</div>



                <button disabled = {disabled}>Join Us!</button>
        </form>
                <p>already have an account?</p>
                <h3> <Link to = '/login'> Login Here</Link>  </h3>
            </StyledDiv>
        </>
    )

}