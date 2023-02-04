import React from 'react'
import './Header.css'
import logo from '../../assets/argentBankLogo.png'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../features/userSlice'

function Header() {
  const { firstName, token } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <nav className="nav">
      <NavLink to="/">
        <img className="logo" src={logo} alt="Argent Bank Logo" />
      </NavLink>
      {token === null ? (
        <div>
          <NavLink className="singIn" to="./login">
            <i className="fas fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      ) : (
        <div>
          <i className="fas fa-user-circle"></i>
          <NavLink to="/Profile" className="userName">
            {firstName}
          </NavLink>
          <NavLink
            className="singOut"
            to="/"
            onClick={() => dispatch(logOut())}
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            Sign Out
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Header
