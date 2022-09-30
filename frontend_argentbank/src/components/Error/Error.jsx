import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error.css'

function Error() {
  return (
    <div className="error_container">
      <span>404</span>
      <p>Oups! La page que vous demandez n'existe pas</p>
      <NavLink className="lienToHome" to="/">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  )
}

export default Error
