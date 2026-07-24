//Passing PROPS as children and Function lecture Date 07/07/26
//Here we Learn props ke through children function ko call kaise karenge
import React from 'react'

function Button(props) {
  return (
    <div>
        {props.children}
        <button onClick={props.handleClick} >Click me</button>
    </div>
  )
}

export default Button