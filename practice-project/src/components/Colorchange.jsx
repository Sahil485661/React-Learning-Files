// Date: 09/07/26
 // Here I am implemented Direct DOM manupulation that is not production ready we need to use usestate to handle the state

import React, { useState } from 'react'

function Colorchange() {
    const [count, setCount] = useState(0)
    function handleCount(){
        setCount(count+1)
    }

    function handleColor(){
        let r = Math.round(100*Math.random())
        let g = Math.round(100*Math.random())
        let b = Math.round(100*Math.random())
        return `rgb(${r},${g},${b})`
    }
    // neeche ki line ka code DOM ko manuplate karta hai
    // function handlecolorChange(){
    //     let bodyColor = document.body.style;
    //     return bodyColor.background = handleColor();
    // }

    // neeche ka code react ke useState ke saat virtual dom ko manuplate karta hai
    const [bgcolor, setbgcolor] = useState('white')
    function handlecolorChange(){ 
        setbgcolor(handleColor())
    }
  return (
    <div style={{backgroundColor: bgcolor, height: '100vh', width: '100%'}}>
        <div onClick={handleCount} style={{background: bgcolor, height: '100vh',  width: '100vw' }}>
            <p>Here you can see how div is clicked {count}</p>

            <button onClick={e=> {e.stopPropagation();   //StopPropagation is used to stop event bubbling 
                handlecolorChange()}}>ColorChange</button>
        </div>
    </div>
  )
}

export default Colorchange