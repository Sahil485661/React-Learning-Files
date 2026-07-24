import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    function handleClick(){
        navigate("/about")
    }
  return (
    <div>Home
        <br />
         <button onClick={handleClick}>
        Move to About</button>
    </div>
  )
}

export default Home