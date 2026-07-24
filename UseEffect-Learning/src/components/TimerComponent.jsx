//Date 10/07/26
// Here I am learned how useEffect is work when any component is unmounted from the page

import React, { useState, useEffect } from 'react'

function TimerComponent() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      const intervalId = setInterval(() => {
        console.log("timer is running")
        setCount(count=>count+1)
      }, 1000);
    
      return () => {
          console.log("Timer Stop because component is unmounted from the App.jsx")
        clearInterval(intervalId)
      }
    }, [])
    //yaha per useEffect sirf ek baar render hoga kyunki isme [] empty array hai comma seperated me
    
  return (
    <div>
        <h3>Counting : {count}</h3>
        
    </div>
  )
}

export default TimerComponent