import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Wrapper = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
    <NavBar />

   
    <div className="flex-grow">
      <Outlet />
    </div>
    <div className='my-10'>
    <Footer />
    </div>
   
  </div>
  )
}

export default Wrapper
