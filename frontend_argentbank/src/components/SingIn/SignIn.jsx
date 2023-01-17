import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'

function User() {
  const userData = useSelector((state)=> state.user)
  console.log(userData)
  return (
    <div>
      <Header />
      <h1>dashbord User</h1>
    </div>
  )
}
export default User
