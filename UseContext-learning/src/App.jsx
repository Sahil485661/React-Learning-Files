import { createContext, useState } from 'react'

import './App.css'
import ChildA from './components/ChildA'

//step 1: Create Context
  const UserContext = createContext()
  const ThemeContext = createContext()
function App() {
  const [user, setUser] = useState({name: "Sahil"})
  const [theme, setTheme] = useState("Light")
   //step 2: wrap all child inside a provider
   //Step 3: Pass the value
   //Step 4: Consume the data by consumer
  return (
    <UserContext.Provider value={user}>
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor: theme==="light"? 'beige':'black'}}>
        <ChildA/>
      </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
  //   <div>
     
  // {/* <UserContext.Provider value={user}>
  //   <ChildA/>
  // </UserContext.Provider> */}
  //   </div>
  )
}

export default App
export {UserContext}
export {ThemeContext}