import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import logo from '../Assest/brand_logo.png'
import Herosec from './Herosec'

const Navbar = () => {
  return (
    <div>
   <nav className='navBar'>
    
    <img  src={logo} alt="logo"/>
    <ul >
    <li> <Link to='/menu'>HOME</Link> </li>
    <li> <Link to='/location'>LOCATION</Link> </li>
    <li> <Link to='/about'>ABOUT</Link> </li>
    <li> <Link to='/contact'>CONTACT</Link> </li>

    </ul>
    <button>Login</button>

   </nav> 
   <Herosec/>
   </div>
   
  )
}

export default Navbar
