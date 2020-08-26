import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import SignUp from './components/SignUpFiles/Signup'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <Route path = '/'>
        <NavBar/>
      </Route>
    

      <Route path = '/signup' >
        <SignUp />
      </Route>

      
    </>
  );
}

export default App;
