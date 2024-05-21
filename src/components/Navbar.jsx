import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>

        <NavLink to="/" className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md  ">
        <p className='blue-gradient_text'>Prerit</p>
        </NavLink>      

        <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to="/about"   className="text-white">
                About
        </NavLink>

        <NavLink to="/projects" className="text-white">
                Projects
        </NavLink>

        <NavLink to="/contact" className="text-white">
                Contact Me
        </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
