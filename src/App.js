import React from 'react';
import Login from './components/Login'
import AddToDo from './components/AddTodo'
import AddList from './components/AddList'
import './App.css';
import { Route, Link } from 'react-router-dom'
import SignUp from './components/SignUpFiles/Signup'

function App() {
  return (
    <div className="App">
      <Login/>
      <>
      <h1>Oi</h1>

      <h3> <Link to = '/signup'> Register/Signup </Link>  </h3>

        <Route path = '/signup' >
          <SignUp />
        </Route>
      </>
      <AddList />
      <AddToDo />
    </div>
  );
}

export default App;
