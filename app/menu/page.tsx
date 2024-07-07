import React from 'react'
import Navbar2 from '../Components/Navbar2'
import AllMenu from './Components/AllMenu'
import Footer from '../Components/Footer'



function page() {
  return (
  <div className='w-full flex flex-col items-center justify-center h-auto'>
    
    <Navbar2 />
    <AllMenu />
    <Footer />
    


  </div>
  )
}

export default page