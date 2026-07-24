import { use, useEffect, useState } from 'react'

import './App.css'
import Logger from './components/Logger'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeWindow from './components/ResizeWindow'
import MultiEffect from './components/MultiEffect'

function App() {

  //Date 10/07/26
  //Here I a firstly write code of useEffect and understood many veriation of the the useEffect
  // const [count, setCount] = useState(0)
  // function handleCount(){
  //   setCount(count+1)
  // }
  // const [total, setTotal] = useState(1)
  // function handleTotal (){
  //   setTotal(total+1)
  // }
  // first -> side—effect function
// second —> clean—up funtion
// third -> comma separated dep list
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])

  //1st Veriation of useEffect: ye veriation every changes (render) par run hota hai.means reload karne par bhi run hota hai
  // useEffect(() => {
  //  alert("It is render every changes")
  // })

  //2nd Variation of useEffect: ye sirf first render me run hoga.Isme array ko empty chhodna hota hai. 
  // useEffect(() => {
  //  alert("Ye sirf ek baar reload karne par run hoga")
  // }, [])
  // 3rd VAriation of useEffect: ye tab run hoga jab page me changes honge and reload render me run nahi hoga. but yaha ye ho rha because count ki value first time update hokar 0 ho rahi hai.
  // useEffect(() => {
  //   alert("Ye reload me run nahi hoga aur baki jab bhi changes honge toh chalega")
  // }, [count])
  // 4th Variation of the useEffect: Multiple Dependencies render hone par ye chalega 
  // useEffect(() => {
  //   alert("This is run when render multiple dependencies")
    
  // }, [count,total])
  // 5th Variation of the useEffect: fifth variation me me cleanup function bhi add rahta hai.
  // useEffect(() => {
  //   alert("Ye to count update pe chalega")
  
  //   return () => {
  //     alert("ye jo hai toh Ui unmount ke time show hua.")
  //   }
  // }, [count ])

  
  return (
    // <div onClick={handleCount} style={{height:"100vh", width: "100vw"}}>
    //   <h3>Here show the counting: {count}</h3>
    //   <button onClick={e=>{e.stopPropagation();
    //     handleTotal()}}>total
    //   </button>
    //   <h3>Here we see the Total count: {total}</h3>
    // </div>
    <div>
      {/* <Logger/> */}
      {/* <TimerComponent/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeWindow/> */}
      {/* <MultiEffect/> */}
    </div>
  )
}

export default App
