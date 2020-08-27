import React, { useEffect, useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import loginFormSchema from "./loginFormSchema";
import { Link, useHistory } from 'react-router-dom';
import styled from "styled-components";

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
    font-size: 1.1rem;
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

label{
    padding: 2%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    background-color: lightgray;
    align-content: space-between;
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
`;

const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};

const initialUsers = [];
const initialDisabled = true;

export default function Login() {
  const [userInfo, setUserInfo] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const { push } = useHistory();

  const [disabled, setDisabled] = useState(initialDisabled);

  const login = () => {
    axiosWithAuth()
      .post("/api/auth/login", newOrder)
      .then((res) => {
        console.log("login -> user", res.data.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.data.id);
        localStorage.setItem("username", res.data.data.username);
        // setUserData(res.data.data)
        push(`/protected/dashboard`);
        // console.log("login -> userData", userData)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUserInfo(initialFormValues);
      });
  };

  const inputChange = (evt) => {
    const { name, value } = evt.target;
    yup
      .reach(loginFormSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: " ",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const newOrder = {
    username: userInfo.username,
    password: userInfo.password,
  };
  const submit = (evt) => {
    evt.preventDefault();
    login(newOrder);
  };
  useEffect(() => {
    loginFormSchema.isValid(userInfo).then((valid) => {
      setDisabled(!valid);
    });
  }, [userInfo]);

  return (
    <StyledDiv className="login">
      <h2>Login</h2>
      <form onSubmit={submit}>
       <h4>User Name:</h4>
        <input
          value={userInfo.username}
          onChange={inputChange}
          name="username"
          type="text"
        />
        <div>{formErrors.username}</div>
        <h4>Password:</h4>
        <input
          value={userInfo.password}
          onChange={inputChange}
          name="password"
          type="password"
        />
        <div>{formErrors.password}</div>

        <button disabled={disabled}>Log In</button>
      </form>
      <p>Need an account?</p>
                <h3> <Link to = '/signup'> Sign Up Here</Link>  </h3>
    </StyledDiv>
  );
}
