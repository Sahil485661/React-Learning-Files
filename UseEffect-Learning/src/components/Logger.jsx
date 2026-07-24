// Date 10/07/26
// Here I am learned how useEffect is effecting the page when any render is happen in the page

import React, { useState , useEffect} from 'react'

function Logger() {
    const [count, setCount] = useState(0)
    function handleCount(){
        setCount(count+1)
    }
    useEffect(() => {
     alert("Count Updated")
})
    
    
  return (
    <div>
        <h2>Here update count: {count}</h2>
        <button onClick={handleCount}>Count Update</button>
    </div>
  )
}

export default Logger