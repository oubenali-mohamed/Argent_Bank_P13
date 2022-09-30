import React from 'react'
import './Header.css'
import logo from '../../assets/argentBankLogo.png'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="nav">
      <NavLink to="/">
        <img className="logo" src={logo} alt="Argent Bank Logo" />
      </NavLink>
      <div>
        <NavLink className="singIn" to="./login">
          <i className="fas fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
