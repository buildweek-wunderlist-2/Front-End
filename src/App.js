import React from 'react';
import Login from './components/LogInFiles/Login'
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import SignUp from './components/SignUpFiles/Signup'
import NavBar from './components/NavBar'

function App() {
  return (

    <div className="App">
      <NavBar />
      <>
        <h1>Oi</h1>


        <h3> <Link to='/signup'> Register/Signup </Link>  </h3>
        <h3> <Link to='/login'> Login </Link>  </h3>
        <h3> <Link to='/protected'> Protected </Link>  </h3>


        <Switch>
          <Route path='/signup' >
            <SignUp />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute exact path='/protected/dashboard' component={Dashboard} />
        </Switch>
      </>
    </div>
  );
}

export default App;
