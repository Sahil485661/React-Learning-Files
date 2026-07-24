//props how to pass data Date: 05/07/26

import React from 'react'
import EMP2 from '../assets/EMP2.jpg'
import "./UserCard.css"
export function UserCard(props) {
  return (
    //Here I am learned pros component and jsx from lovebabbar
    <div className='user-container' style={props.style}> 
        <p id='title'>{props.name}</p>
        <img id='user-image' src={props.image} alt={props.name} />
        <p>{props.description}</p>

    </div>
  )
}
export function UserAddress({number, colony}){
  return(
    <div className='user-container'>
      <p>Ward No {number}, {colony}</p>
    </div>
  )
}

