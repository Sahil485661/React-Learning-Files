import { useCallback, useState } from 'react'

import './App.css'
import Child from './components/Child'

function App() {
  const [count, setCount] = useState(0)
  const handleCLick = useCallback(()=>setCount(count+1), [count]) //If dependency array is empty then it will run only once. If dependency array is not empty then it will run on every render
  
  return (
    <div><h1>Count: {count}</h1>
      <button onClick={handleCLick}>Count increase</button>
      <Child buttonName = 'Click Me' handleClick={handleCLick}/>
    </div>
  )
}

export default App
