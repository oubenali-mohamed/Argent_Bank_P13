import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { userLogin } from '../../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.user)

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(
      userLogin({
        email,
        password,
      })
    )
    navigate('/profile')
  }
  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [navigate, token])

  return (
    <div>
      <Header />
      <section className="section_form">
        <div className="container_form">
          <i className="fas fa-user-circle icon_form"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input_content">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_content">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input_remember">
              <input type="checkbox" id="remember_me" />
              <label htmlFor="remember_me">Remember me</label>
            </div>
            <button onClick={handleLogin} className="sign_in_button">
              Sign In
            </button>
          </form>
          <div className="signup">
            Don't have an account?
            <br />
            <NavLink to="/signup" className="link_signup">
              Sign Up
            </NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Login
