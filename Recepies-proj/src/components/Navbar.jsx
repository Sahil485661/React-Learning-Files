import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import Recipies from '../pages/Recipies'
import About from '../pages/About'
import '../components/NavBar.css'

const Navbar = () => {
  return (
    <div className='gap-y-4 flex gap-x-10 justify-center'>
        <NavLink to={'/'} className={ (e)=>e.isActive ? "border-t-2 px-4 py-2 rounded-md transition border-b-3 border-b-black text-xl":" py-2"}>Home</NavLink>
        <NavLink className={ (e)=>e.isActive ? "px-4 py-2 rounded-md transition border-t-2 border-b-3 border-b-black text-xl":"py-2 "} to={'/recipies'}>Recipies</NavLink>
        <NavLink className={ (e)=>e.isActive ? "border-t-2 px-4 py-2 rounded-md transition border-b-3 border-b-black text-xl":"py-2 "} to={'/about'}>About</NavLink>
        <NavLink to={"/createrecipies"} className={({isActive})=> isActive ? 'border-t-2 px-4 py-2 rounded-md transition border-b-3 border-b-black text-xl':'py-2'}>Create Recipies</NavLink>
    </div>
  )
}

export default Navbar