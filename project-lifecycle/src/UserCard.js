import React from 'react'
import styled from 'styled-components'


export default function UserCard(props) {
    const CardDiv = styled.div`
        background-color: #DAC6B6;
        padding: 5%;
        margin: auto;
    img{
        border-radius: 50px 50px 50px 50px;
        margin: 2%;
    }
    `;

    const {info, followers} = props
    console.log(info.name)
    return(

        <CardDiv>
            <h1>GitHub Card</h1>
            <div className= "info">
                <div id= 'name'>{info.name}</div>
                <div id = 'location'>{info.location}</div>
                <div className = 'img'>
                    <img src = {info.avatar_url} alt ="Avatar"/>
                </div>
                <p>You have {followers.length} followers haha</p>
            </div>
        </CardDiv>

    )
}

