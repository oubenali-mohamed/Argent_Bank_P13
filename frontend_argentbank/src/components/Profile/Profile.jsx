import React from 'react'
import './Profile.css'
import Header from '../Header/Header'
import Account from '../Account/Account'
import { useSelector } from 'react-redux'

function User() {
  const { firstName, lastName } = useSelector((state) => state.user)
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pageProfile">
        <h1>
          Welcome back <br />
          {firstName} {lastName}
        </h1>
        <Account accountType="checking" />
        <Account accountType="savings" />
        <Account accountType="credit card" />
      </div>
    </div>
  )
}
export default User
