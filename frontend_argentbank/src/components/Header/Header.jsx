import React from 'react'
import './Header.css'
import logo from '../../assets/argentBankLogo.png'

function Header() {
  return (
    <nav class="nav">
      <a href="/">
        <img className="logo" src={logo} alt="Argent Bank Logo" />
      </a>
      <div>
        <a className="singIn" href="./sign-in.html">
          <i class="fas fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  )
}

export default Header
