import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import SignUp from './components/SignUpFiles/Signup'

function App() {
  return (
    <>
    <h1>Oi</h1>

    <h3> <Link to = '/signup'> Register/Signup </Link>  </h3>

      <Route path = '/signup' >
        <SignUp />
      </Route>
    </>
  );
}

export default App;
