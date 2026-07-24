import React from 'react'
import Home from './Home'
import ViewPaste from './ViewPaste'
import Paste from './Paste'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-5 border bg-zinc-800'>
      <NavLink to="/" className='p-2 text-pink-600 border-2 rounded-2xl shadow-2xl shadow-pink-700 border-pink-700 text-xl'>
          Home
        </NavLink>
        <NavLink to="/pastes" className='p-2 text-pink-600 border-2 rounded-2xl shadow-2xl shadow-pink-700 border-pink-700 text-xl'>
            Paste
        </NavLink>
       
        
        </div>
  )
}

export default Navbar