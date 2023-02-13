import React from 'react'
import { useState, useEffect } from 'react'
import './Profile.css'
import Header from '../Header/Header'
import Account from '../Account/Account'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '../Footer/Footer'
import { newNameUser, updateUser } from '../../features/userSlice'

function User() {
  const { firstName, lastName } = useSelector((state) => state.user)
  const [editInputsDisplayed, setEditInputsDisplayed] = useState(false)
  const dispatch = useDispatch()
  const [userNameFirst, setUserNameFirst] = useState('')
  const [userNameLast, setUserNameLast] = useState('')

  const showEditInputs = () => {
    setEditInputsDisplayed(true)
  }
  const submitForm = (e, data) => {
    e.preventDefault()
    dispatch(updateUser(data)).then(() => {
      setEditInputsDisplayed(false)
      dispatch(newNameUser())
    })
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pageProfile">
        <div>
          {editInputsDisplayed ? (
            <>
              <form className="formUpdateUser">
                <div className="updateFirstName">
                  <input
                    type="text"
                    id="firstname"
                    className="updateFirstName_input"
                    placeholder={userNameFirst}
                    onChange={(e) => setUserNameFirst(e.target.value)}
                  />
                  <button
                    className="updateFirstName_button"
                    type="submit"
                    onClick={submitForm}
                  >
                    Save
                  </button>
                </div>
                <div className="updateLastName">
                  <input
                    type="text"
                    id="lastname"
                    className="updateLastName_input"
                    placeholder={userNameLast}
                    onChange={(e) => setUserNameLast(e.target.value)}
                  />
                  <button
                    className="updateLastName_button"
                    type="button"
                    onClick={() => setEditInputsDisplayed(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1 className="welcomeBack">
                Welcome back
                <br />
                {`${userNameFirst} ${userNameLast}`}
              </h1>
              <button className="edit_button" onClick={showEditInputs}>
                Edit Name
              </button>
            </>
          )}
        </div>
        <Account accountType="checking" />
        <Account accountType="savings" />
        <Account accountType="credit card" />
      </div>
      <Footer />
    </div>
  )
}
export default User
