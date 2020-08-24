import react, { useState } from "react"
import * as yup from 'yup'



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

 }

 const inputChange = (name, value) => {



 }

}