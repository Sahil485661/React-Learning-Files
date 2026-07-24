import React, { useState } from 'react'
import {UserCard, UserAddress} from './components/UserCard'
import './App.css'
import suhail from "./assets/Emp.jpg"
import Sahil from "./assets/EMP2.jpg"
import Anas from "./assets/EMP3.webp"
import Counter from "./components/Counter"
import Card from './components/Card'
import Button from './components/Button'
import LikeButton from './components/LikeButton'
import Comment from './components/Comment'
import ChildtoParent from './components/ChildtoParent'
import Logout from './components/Logout'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Eventhandle from './components/Eventhandle'
import Colorchange from './components/Colorchange'


function App() {
  // const [count, setCount] = useState(0)
  // function handleCount(){
  //   setCount(count+1);
  // }

  //  const [name, setName] = useState('')

  
  // const [islogin, setislogin] = useState(false)
  // function handleLogin(){
  //   setislogin(!islogin)
  // }
  return (
    <div className="container">
      {/* <UserCard name="Sahil" description = "He is a frontend developer" image = {Sahil} style = {{"border-radius": "50px;"}} number ="6" colony = "Tamarakar Colony"/>
      <UserCard name="Suhail" description = "He is a Backend developer" image={suhail}/>
      <UserCard name= "Anas" description = "He is a fullStack developer" image = {Anas}/> */}
      {/* <Counter/> */}
      
        
        {/* <Button handleClick = {handleCount} text = "Click me">
          <p>Current Count: {count}</p>
          <h1>Hello May I coming</h1>
        </Button>
        <Card children = "Heelo tum">
          {/* yaha p wala show karega children nahi kyunki p wla children ko replicate kar de rha hai aur yadi p wla hataa de tab children wala show karega */}
          {/* <p>Welcome to Uchehra</p> 
        </Card> */}
      
          {/* <LikeButton topic="React"/>
            <LikeButton topic="Javascript"/>
            <LikeButton topic="vanilla"/>
            <Comment topic="Coding is hell or heaven"/> */}
            {/* <ChildtoParent name = {name} setName ={setName}/> */}
            {/* {
              islogin ? <Logout/>: <Login/>
            } */}
            {/* <Navbar/>
              <Eventhandle/> */}
              <Colorchange/>
    </div>
  )
}

export default App

