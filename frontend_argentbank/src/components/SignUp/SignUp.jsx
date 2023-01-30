import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './SignUp.css'
import { useDispatch } from 'react-redux'
import { userSignup } from '../../features/userSlice'
import { useNavigate } from 'react-router-dom'
function SignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()
    console.log(firstName, lastName, email, password)
    dispatch(
      userSignup({
        firstName,
        lastName,
        email,
        password,
      })
    )
    navigate('/profile')
  }
  return (
    <div>
      <Header />
      <section className="section_form">
        <div className="container_form">
          <i className="fas fa-user-circle icon_form"></i>
          <h1>Sign Up</h1>
          <form>
            <div className="input_content">
              <label htmlFor="firstanem">FirstName</label>
              <input
                type="text"
                id="firstname"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input_content">
              <label htmlFor="lastname">LastName</label>
              <input
                type="text"
                id="lastname"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input_content">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_content">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleSignup} className="sign_up_button">
              Sign Up
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SignUp
