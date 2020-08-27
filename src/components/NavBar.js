import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`



  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 2%;
  background-color: dodgerblue;


h3{
    margin: 0;
    font-size: 2.5rem;
    color: #fffafa;
}
}

.nav{
    width: 75%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

a {
    text-decoration: none;
    letter-spacing: 1.5px;
    color: #fffafa;
    padding: 1%;
    margin: 0% 2%;
}

a:hover {
    color: #fffafa;
    border: 2px solid #fffafa;
    /* padding: 1%; */
    border-radius: 10px;
}

a:visited {
    color: #fffafa;
}

.dropdown .dropbtn {  
  color: white;
  border: none;
  outline: none;
  color:black;
  background-color: dodgerblue;
  padding: 10px 10px;
  font-size: 1.6rem;

}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: dodgerblue;
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
                    <a href = 'https://wunderlist-app.netlify.app/'>Home</a>
                    <a href = 'https://wunderlist-app.netlify.app/about.html'>About</a>
                    <Link to = '/protected/dashboard'>Dashboard</Link>
                    <Link to = '/signup'>Register</Link>
                    <Link to = '/login'>Login</Link>
                </div>
        </StyledDiv>
        </>
    )


}