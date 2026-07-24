//Passing PROPS as children and Function lecture Date 07/07/26
//Here we Learn props ke through children function ko call kaise karenge

import React from 'react'

function Card(props) {
  return (
    <div>
        {props.children}
        {/* {props.count} */}
        <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

export default Card