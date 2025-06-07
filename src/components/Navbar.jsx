import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo-removebg-preview.png'
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='navbar'>
      <Link to='/'><img src={logo} alt="Error" className="logo" /></Link>
      <ul className='nav-links'>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/product'><li>Product</li></NavLink>
        <NavLink to='/contact'><li>Contact Us</li></NavLink>
        <NavLink to='/about'><li>About Us</li></NavLink>
      </ul>
      <button onClick={()=>navigate('/jobs',{replace:true})}>Jobs</button>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}
export default Navbar