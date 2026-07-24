//Conditional Rendering in React Date 08/07/26

import React from 'react'

function Login(props) {
  return (
    <div><button onChange={props.handleLogin}>Login</button></div>
  )
}

export default Login