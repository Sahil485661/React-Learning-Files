// State Lifting=>Lecture 4
// Here we learn how we pass and access data from child to parent
//sabhi child me state ko sync karwa denge
import React from 'react'

function ChildtoParent(props) {
  return (
    <div>
        <input type="text" onChange={(e)=>props.setName(e.target.value)} />
        <p>Here we see that text: {props.name}</p>
        {/* e (Event): Trigger hua Event Object (Action ka metadata).
            e.target: Wo actual HTML Element (<input>) jis par user ne type kiya hai.
            e.target.value: Us HTML Input box ke andar ka Text Value jo user ne likha hai. */}
    </div>
  )
}

export default ChildtoParent