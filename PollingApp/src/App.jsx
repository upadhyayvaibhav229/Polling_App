import React from 'react'
import Home from './Pages/Home'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='flex-auto'>
    <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
