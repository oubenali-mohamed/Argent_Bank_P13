import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'

function User() {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/">
          <img className="logo" src={logo} alt="Argent Bank Logo" />
        </NavLink>
        <div>
          <i className="fas fa-user-circle"></i>
          <NavLink className="singIn" to="/">
            <i className="fa-solid fa-right-from-bracket"></i>
            Sign Out
          </NavLink>
        </div>
      </nav>
      <h1>dashbord user</h1>
    </div>
  )
}
export default User
