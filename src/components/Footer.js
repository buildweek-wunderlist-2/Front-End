import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
font-size: 62.5%;
font-size: 1rem;
font-family: 'Roboto', sans-serif;
line-height: 1.5;
background-color: dodgerblue;
color: black;
text-align: center;
margin: 5% 0%;

a {
    text-decoration: none;
    letter-spacing: 1.5px;
    color: black;
    padding: 1%;
    margin: 0% 2%;
}
a:visited {
    color: black;
}
a:hover {
    color: dodgerblue;
    border: 2px solid dodgerblue;
    border-radius: 10px;
}

footer {
    background-color: dodgerblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 0;
}
footer nav, footer div, footer address {
    margin-top: 1%;
    width: 100%;
}
footer nav {
    justify-content: space-evenly;
}
.socialMedia {
    display: flex;
    justify-content: center;
}
footer i {
    color: white;
}
footer a:hover {
    color: white;
}
footer nav a:hover {
    border: 2px solid white;
}
.socialMedia a:hover, address a:hover {
    border: none;
}
`;

export default function Footer() {
  return (
    <StyledDiv>
        <footer>
      <nav>
        <a href="/index.html">Home</a>
        <a href="/about.html">About</a>
        <a href="https://front-end-drab-psi.vercel.app/login">Login</a>
        <a href="https://front-end-drab-psi.vercel.app/signup">Sign Up</a>
      </nav>
      <div class="socialMedia">
        <a href="https://facebook.com" target="_blank">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a href="https://instagram.com" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <address>
            <p>4016 Dennison Street | Modesto, CA | 95354</p>
            <a href="mailto:contact@wunderlist.com">contact@wunderlist.com</a> |
            <a href="tel:888-888-8888">888-888-8888</a>
            <p>Copyright: Wunderlist 2020</p>
        </address>
      </footer>
    </StyledDiv>
  );
}
