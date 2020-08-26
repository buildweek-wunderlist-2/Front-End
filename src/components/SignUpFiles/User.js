import React from 'react'
import styled from 'styled-components'

let StyledDiv = styled.div`

background-color: #fffafa;
margin: 5% 25%;
padding: 1% 0;
border: solid 5px #223127 ;
border-radius: 10px ;

h2,p{
    padding-left: 2%;
}

`


export default function User(props){
    let {details} = props

    if(!details) {
        return <h3>One moment as we add the new Team Member ...</h3>
    }
 
    return(
        <StyledDiv className = 'tmcard'>
            <h2>{details.name} </h2>
            <p>Email: {details.email} </p>
        </StyledDiv>
    )
}