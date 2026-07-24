import React from 'react'

const Child = React.memo((props)=>{
  console.log("Child Component Re-rendered")
  return (
    <div>
      <button onClick={props.handleClick}>{props.buttonName}</button>
    </div>
  )}
)

export default Child

//React. memo —> wrap —> component —> component re—render tabhi hoga jab props change honge nahi toh re—render nahi hoga
// if u r sending a function, then react.memo wont be able to save you from re-rendering

// jab koi function call karte hai toh re-render hota hai kyunki function ka reference change hota hai har baar and jabki function me koi changes nahi hoti fir bhi re render hoke "Child Component Re-rendered" print hota hai. kyunki react memo ko ye lagta hai ki function me changes hua hai kyunki function ka reference change hota hai har baar. Isse bachne ke Liye ham useCallback ka use karte hai
