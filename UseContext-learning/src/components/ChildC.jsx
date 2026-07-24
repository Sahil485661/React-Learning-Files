import { useContext } from 'react'
import React from 'react'
import { UserContext } from '../App'
import { ThemeContext } from '../App'
function ChildC() {
    const user = useContext(UserContext)
    const {theme, setTheme} = useContext(ThemeContext)
    function handleClick(){
        if(theme=== "light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }

  return (
    <div>
        <h2 style={{backgroundColor: theme === "light" ? 'blue': "violet"}}>{user.name}</h2>
        <button onClick={handleClick}>Change theme into {theme==="light"?"Dark": "Light"}</button>

    </div>
  )
}

export default ChildC