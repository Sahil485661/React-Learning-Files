import { useState } from 'react'


import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'
import CreateRecipies from './pages/CreateRecipies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-700 text-white font-bold w-screen h-screen'>
      <Navbar/>
      
      <MainRoutes/>
    </div>
  )
}

export default App
