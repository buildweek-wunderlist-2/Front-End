import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import SignUp from './components/SignUpFiles/Signup'
import NavBar from './components/NavBar'
import axios from 'axios'
import AddToDo from './components/AddTodo'


axios('https://wunderlist-bw820.herokuapp.com/')
  .then(res => {
    console.log(res.data)
  })


function App() {
  return (

    <>


      <Route path = '/'>
        <NavBar/>
      </Route>

      <Route path = '/profile'>
        <AddToDo/>
      </Route>
    

      <Route path = '/signup' >
        <SignUp />
      </Route>

      
    </>
  );
}

export default App;
