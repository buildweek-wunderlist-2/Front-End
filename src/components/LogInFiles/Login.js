import React, { useEffect, useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import loginFormSchema from "./loginFormSchema";
import { useHistory } from 'react-router-dom';


const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};

const initialUsers = [];
const initialDisabled = true

export default function Login() {
  const [userInfo, setUserInfo] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const { push } = useHistory()

  const [disabled, setDisabled] = useState(initialDisabled)

  const login = () => {
    axiosWithAuth()
      .post("/api/auth/login", newOrder)
      .then((res) => {
        console.log("login -> user", res.data.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id', res.data.data.id)
                localStorage.setItem('username',res.data.data.username)
                // setUserData(res.data.data)
                push(`/protected`)
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
}

  const newOrder = {
    username: userInfo.username,
    password: userInfo.password,
  };
  const submit = (evt) => {
    evt.preventDefault();
    login(newOrder);
  };
   useEffect(() => {
    loginFormSchema.isValid(userInfo).then((valid) => {
          setDisabled(!valid);
        });
      }, [userInfo]);

  return (
    <div className="login">
      <form onSubmit={submit}>

        <h3>User Name:</h3>
        <input
          value={userInfo.username}
          onChange={inputChange}
          name="username"
          type="text"
        />
        <div>{formErrors.username}</div>
        <h3>Password:</h3>
        <input
          value={userInfo.password}
          onChange={inputChange}
          name="password"
          type="password"
        />
        <div>{formErrors.password}</div>

        <button disabled={disabled} >Log In</button>

   
      </form>
    </div>
  );
}

