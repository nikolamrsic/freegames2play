import React from 'react'
import { Fragment } from 'react'
import Hero from '../Hero/Hero'
import Navbar from '../Nav-bar/Navbar'
import { Link } from 'react-router-dom'
import NavigationBar from '../NavigationBar/NavigationBar'
export default function StartPage() {
  return (
  <>
  
<div className="w-full h-screen bg-hero-pattern   bg-cover bg-bottom  mb-0 md:bg-left   bg-no-repeat">
  <div className='m-auto  S px-5 py-3 flex  justify-end'>
    <NavigationBar/>
    
  </div>
  <hr className=' bg-gradient-to-r from-cyan-500 to-gray-800  mt-2 border-none  outline-none' style={{ height: '1px' }} />
<div className="  md:ml-7  w-fit py-4 relative top-56 px-6  backdrop-blur-xl bg-cyan- rounded ">
  <h1 className="text-white  md:text-7xl text-5xl font-extrabold">Free Games Data Base</h1>
  <h1 className="text-white md:text-5xl text-4xl font-normal mt-5 ">Play 4 Free</h1>
 <Link to='/games'>
 <button className="py-2 px-3 bg-cyan-500 text-xl text-white mt-7">Explore</button>
 </Link>
</div>

</div>



</>  


  )
}
