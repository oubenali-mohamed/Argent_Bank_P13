import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'

function User() {
  const { firstName } = useSelector((state) => state.user)
  return (
    <div>
      <Header />
      <h1>welcome back {firstName}</h1>
    </div>
  )
}
export default User
