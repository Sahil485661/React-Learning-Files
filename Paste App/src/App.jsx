import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar/>
        <Home/>
      </div>}, 
      {
      path: '/pastes',
      element: <div>
        <Navbar/>
        <Paste/>
      </div>
      },
      {
      path: '/pastes/:id',
      element: <div>
        <Navbar/>
        <ViewPaste/>
      </div>
      },
      {
      path: "*",
      element: <div>404</div>
    }
  ]
)
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
