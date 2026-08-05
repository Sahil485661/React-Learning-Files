import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Recipies from '../pages/Recipies'
import About from '../pages/About'
import CreateRecipies from '../pages/CreateRecipies'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/recipies' element= {<Recipies/>}></Route>
        <Route path='/about' element= {<About/>}></Route>
        <Route path='/createrecipies' element={<CreateRecipies/>}/>
    </Routes>
  )
}

export default MainRoutes