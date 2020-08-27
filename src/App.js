import React from 'react';
import Login from './components/LogInFiles/Login'
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import SignUp from './components/SignUpFiles/Signup'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (

    <div className="App">
      <NavBar />
        <Switch>
          <Route path='/signup' >
            <SignUp />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/protected/dashboard' component={Dashboard} />
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
