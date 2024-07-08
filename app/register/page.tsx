import React from 'react'
import NavbarHome from '../Components/NavbarHome';
import Register from './components/Register';





const page = () => {
  return (
    <main className="w-full h-auto flex flex-col justify-center items-center">
   <NavbarHome /> 
   <div className="w-full h-screen">
   <Register />
   </div>
    <br />

  
  </main>
  )
}

export default page