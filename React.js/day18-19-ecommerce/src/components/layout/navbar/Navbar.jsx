import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { gState } from '../../../context/Context'

const Navbar = () => {
  const navigate = useNavigate()
  const {data} = useContext(gState)
  const {isLoggedIn , userData} = data
  const {image} = userData
  return (
    <div className='bg-dark'>
    {
      isLoggedIn &&
      <ul className='list-unstyled d-flex gap-3 align-items-center justify-content-center'>
        <li style={{
          cursor:'pointer', 
        }} className='text-white fw-bold text-capitalize'>
          <NavLink to={'/login'}> Return to Login Page </NavLink>  
        </li>
        <figure 
        onClick={() => navigate('/settings')}
        style={{
          cursor:'pointer', 
        }}
        className='d-flex align-items-center m-0'>
          <img src={image} width={60} className='img-thumbnail rounded-circle' alt="" />
        </figure>
        <li style={{
          cursor:'pointer', 
        }} className='text-white fw-bold text-capitalize'>
          <NavLink to={'/Products'}> Products </NavLink>
        </li>
        <li style={{
          cursor:'pointer', 
        }} className='text-white fw-bold text-capitalize'>
          <NavLink to={'/about'}> About </NavLink>  
        </li>

      </ul>
    }
    {
      !isLoggedIn && 
      <div className='fs-5 d-flex justify-content-between'>
        <p className="text-white">Login/Register First</p>
        <ul className='list-unstyled d-flex gap-3 align-items-center justify-content-center'>
        <li style={{
          cursor:'pointer', 
        }} className='text-white fw-bold text-capitalize'>
          <NavLink to={'/register'}> Register </NavLink>  
        </li>
        <li style={{
          cursor:'pointer', 
        }} className='text-white fw-bold text-capitalize'>
          <NavLink to={'/login'}> Login </NavLink>  
        </li>
        </ul>
        </div>
    }


</div>
  )
}

export default Navbar