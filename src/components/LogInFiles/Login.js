import React, { useEffect, useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import loginFormSchema from "./loginFormSchema";

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
  const [users, setUsers] = useState(initialUsers);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNew = () => {
    axiosWithAuth()
      .post("/api/auth/login", newOrder)
      .then((res) => {
        console.log("postNew -> res", res);
        setUsers([res.data, ...users]);
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
    postNew(newOrder);
  };
   useEffect(() => {
    loginFormSchema.isValid(userInfo).then((valid) => {
          setDisabled(!valid);
        });
      }, [userInfo]);

  return (
    <div className="login">
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
        type="text"
      />
      <div>{formErrors.password}</div>

      <button disabled={disabled} onClick={submit}>Log In</button>

      {users.map((user) => {
        return <LoginInfo key={user.id} user={user} />;
      })}
    </div>
  );
}

function LoginInfo({ user }) {
  return (
    <div>
      <p>Username: {user.username}</p>
      <p>Password:{user.password}</p>
    </div>
  );
}
