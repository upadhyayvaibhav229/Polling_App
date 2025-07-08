import React from 'react'
import Home from './Pages/Home'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='flex-auto'>
    <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
