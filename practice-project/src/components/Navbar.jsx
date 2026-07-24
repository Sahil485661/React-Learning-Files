//... ka use use hota hai pure object ko copy karne ke liye and fir ise hum changes karte hai jaha pe karna hota hai


import React, { useState } from 'react'

function Navbar() {
  const [user, setUser] = useState({name: "Anas", age: 22})
  function handleAge(){
    setUser({...user, age: user.age+1})
  }
  return (
    <div>
      <p>Age:{user.age}
        Name:{user.name}
      </p>
      <button onClick={handleAge}>Increase Age</button>
    </div>
  )
}

export default Navbar