import React, { useEffect, useRef, useState } from 'react'
import Home from './Home';


function Stopwatch() {
    const [time, setTime] = useState(0)
    let TimeRef = useRef(null);
    //Why used useEffect
    // Memory Safety: Tumne sunishchit (ensure) kiya ki agar user dusre page par chala jaye, toh tumhara timer band ho jaye. Browser resources bachte hain.
    useEffect(()=>{
        // Jab component hat raha ho, tab interval rok do
        return ()=>{
            if(TimeRef.current){
                clearInterval(TimeRef.current)
            }
        }
    },[]) // Empty array ka matlab: sirf mount aur unmount par chalega

    function StartTime(){
        // Agar pehle se koi interval chal raha hai, toh naya mat banao
    if (TimeRef.current !== null) return;

        TimeRef.current = setInterval(() => {
            setTime(time => time+1)
        }, 1000);
    }
    function StopTime(){
        clearInterval(TimeRef.current)
        TimeRef.current = null;
    }
    function ResetTime(){
        StopTime()
        setTime(0);
    }
  
    return (
    <div>
        <h2>Timer: {time}</h2>
        <button onClick={StartTime}>Start Time</button>
        <button onClick={StopTime}>Stop Time</button>
        <button onClick={ResetTime}>Reset Time</button>
        

    </div>
  )

}

export default Stopwatch