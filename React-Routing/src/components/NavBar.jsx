import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  return (
    <div id='navbar'>
        <ul>
            <li>
                {/* anchor tag is load full page every time when click so not preferred this solution is use link or navlink tag. Because these tag are not reload when we click any link*/}
                {/* <a href="/">Home</a>  */}
                {/* <Link to="/">Home</Link> */}
                <NavLink to="/" className={({isActive})=>isActive? "active-link":"" }> Home</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({isActive})=>isActive? "active-link":""}>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive})=>isActive? "active-link":""}>About</NavLink>
            </li>
            <li>
                <NavLink to="/student/:id" className={({isActive})=>isActive? "active-link":""}>Parameter</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar
