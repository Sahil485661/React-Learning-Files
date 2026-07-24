import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Home from './components/Home'
import DashBoard from './components/DashBoard'
import About from './components/About'
import NavBar from './components/NavBar'
import ParamComponent from './components/ParamComponent'
import Course from './components/Course'
import Report from './components/Report'
import NotFound from './components/NotFound'

const router = createBrowserRouter(
  [
    {path: "/",
      element: 
      <div>
      <Home/>
      <NavBar/>
      </div>
    },
    {
      path:"/dashboard",
      element:<div>
      <DashBoard/>
      <NavBar/>
      </div>,
      children: [
        {
          path: "course",
          element:<Course/>
        },
        {
          path: 'report',
          element: <Report/>
        }
      ]
    },
    {
      path: "/about",
      element: <div>
      <About/>
      <NavBar/>
      </div>
    },
    {
      path: "/student/:id",
      element: <div>
      <ParamComponent/>
      <NavBar/>
      </div>
    }
    ,{
      path: "*",
      element: <NotFound/>
    }
  ]
)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
        
      </div>
    </>
  )
}

export default App
