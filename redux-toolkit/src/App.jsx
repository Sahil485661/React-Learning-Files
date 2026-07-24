import { useState } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/features/counter/counterSlice';

function App() {
  
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch =  useDispatch();

function handleIncreement(){
      dispatch(increment())
}
function handleDecreement(){
      dispatch(decrement())
}
function handleReset(){
   dispatch (reset())
}
function handleIncreementbyAmount(){
  dispatch(incrementByAmount(amount))
}
console.log(count)
  return (
   <div>
    <button onClick={handleIncreement}>+</button>
    <p> Count: {count}</p>
    <button onClick={handleDecreement}>-</button>
    <button onClick={handleReset} style={{fontSize: 20}}>Reset</button>
    <br />
    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} />
    <br />
    <button style={{fontSize: 20}} onClick={handleIncreementbyAmount}>Increment by Amount</button>
   </div>
  )
}

export default App
