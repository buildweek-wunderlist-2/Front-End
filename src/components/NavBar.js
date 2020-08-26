import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`



  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  padding-top: 2%;
  background-color: #fffafa;


h3{
    margin: 0;
    font-size: 2.5rem;
}

.nav{
    display: flex;
}

a {
  float: left;
  font-size: 1.6rem;
  text-decoration: none;
  color: black;
  padding: 2%;
}



.dropdown .dropbtn {  
  color: white;
  border: none;
  outline: none;
  color:black;
  background-color: #fffafa;
  padding: 10px 12px;
  font-size: 1.6rem;

}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 1.2rem;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
`

export default function NavBar(){

    return (
        <>
        <StyledDiv className = 'navbar'>
                <h3>Wunderlist</h3>
                <div className = 'nav'>
                    <Link to = '/'>Home</Link>
                    <Link to = '/about'>About</Link>
                    <div className = 'dropdown'>
                            <button className = 'dropbtn'>Profile</button>
                        <div className="dropdown-content">
                            <Link to = '/profile'>Profile</Link>
                            <Link to = '/signup'>Register</Link>
                            <Link to = '/login'>Login</Link>
                        </div>
                    </div>
                </div>
        </StyledDiv>
        </>
    )


}