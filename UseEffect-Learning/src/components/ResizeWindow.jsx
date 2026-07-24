import React, { useEffect, useState } from 'react'

function ResizeWindow() {
    const[windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
      const handleWidth =()=> setWindowWidth(window.innerWidth)
      console.log("EventLister Added")
      window.addEventListener("resize",handleWidth)
    
      return () => {
        console.log("EventListner Removed")
        window.removeEventListener("resize", handleWidth)
      }
    }, [])
    
  return (
    <div>
        <h2>Window Width: {windowWidth}</h2>
    </div>
  )
}

export default ResizeWindow