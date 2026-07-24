// State Lifting=>Lecture 4
// Here we learn how we pass and access data from child to parent
//sabhi child me state ko sync karwa denge
import React from 'react'

function ChildtoParent(props) {
  return (
    <div>
        <input type="text" onChange={(e)=>props.setName(e.target.value)} />
        <p>Here we see that text: {props.name}</p>
    </div>
  )
}

export default ChildtoParent