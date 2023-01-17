import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Login.css'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div>
      <Header />
      <section className="section_form">
        <div className="container_form">
          <i className="fas fa-user-circle icon_form"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input_content">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input_content">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input_remember">
              <input type="checkbox" id="remember_me" />
              <label htmlFor="remember_me">Remember me</label>
            </div>

            <NavLink to="/signIn" className="sign_in_button">
              Sign In
            </NavLink>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Login
