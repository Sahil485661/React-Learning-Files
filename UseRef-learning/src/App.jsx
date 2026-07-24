import { useEffect, useRef, useState } from 'react'

import './App.css'
import Stopwatch from './components/Stopwatch'
import Home from './components/Home'

function App() {
  const[count, setCount] = useState(0)
  // let value = 1
  let value = useRef(1)

  const btnRef = useRef()
  function handleCount(){
    value.current += 1; // normal variable me value update hogi par persist nahi karegi chack karo chahe console log me value 2 tak bas jayegi without useRef ke 

    // console.log(value)
    console.log(value.current); //ab iss baar se har baar increased value print hogi
    setCount(count+1)
  }
  useEffect(()=>{
    console.log("Render hua")
  })
  function handleButton(){
    btnRef.current.style.backgroundColor = 'red'
  }

  return (
    <div>
      <button ref={btnRef} onClick={handleCount}>Increement</button>
      <p>Count : {count}</p>
      <button onClick={handleButton}>Change the color of Increement button</button>

      <div>
        <Stopwatch/>
      </div>
    </div>
    
  )
}

export default App
