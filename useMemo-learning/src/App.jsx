import { useMemo, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)
   function ExpensiveTask(num){
    console.log("Render hua")
    for(let i = 0; i< 1000000000; i++){

    }
    return num * 4;
  }
  const double = useMemo(()=> ExpensiveTask(input), [input]);
  //Now our app is not face delay 
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Double : {double}</h2>
      <input type="number" value={input} onChange={(e)=>setInput(e.target.value)}/>
    </div>
  )
}

export default App
