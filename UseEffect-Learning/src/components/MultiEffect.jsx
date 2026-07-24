import React, { useState, useEffect } from 'react'

function MultiEffect() {
    const[count, setCount] = useState(0)
    const[second, setSecond] = useState(0)
    useEffect(() => {
      console.log("Count", count)
    
    }, [count])
    //It will run when count is changed
    useEffect(() => {
      const InternalId= setInterval(() => {
        console.log("Second is running")
        setSecond(second=>second+1)
      }, 1000);
    
      return () => {
        console.log("Now useEffect is stoped")
        clearInterval(InternalId)
      }
      //Unmount hone par cleanup function ye wala run ho jayega
    }, [])
    //it will run only first render
    
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase Count</button>
        <h1>Timer : {second}</h1>
    </div>
  )
}

export default MultiEffect