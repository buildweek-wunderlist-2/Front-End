import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import ToDo from './Todo'

export default function AddToDo(props){

    const initialValues = {
        name: '',
        type: '',
     }
    
    const initalToDos = []

    const [toDos, setToDos] = useState(initalToDos)
    const [values, setValues] = useState(initialValues)

    const getToDos = () => {
        axios.get('https://wunderlist-bw820.herokuapp.com/')
        .then(res => {
            console.log(res.data)
            setToDos(res.data)
        .catch(err => {
            console.log('UH OH')
            })
        })
    }

    

}