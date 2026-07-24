import React from 'react'
import { Outlet } from 'react-router-dom'

function DashBoard() {
    
  return (
    <div>DashBoard
      <Outlet/>
    </div>
  )
}

export default DashBoard