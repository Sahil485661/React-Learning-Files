//useState learned from lecture  Date: 06/07/26

import React, { useState } from 'react'
import "./Counter.css"
function counter() {
//Here we are learned useState

    const [count, setCount] = useState(0)
  return (
    <div className='counter-container'>
        <p id='para'>You have clicked {count} time</p>
        <button id='btn' onClick={()=>{setCount(count+1)}}> Click me</button>
    </div>
  )
}

export default counter