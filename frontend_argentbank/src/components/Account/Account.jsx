import React from 'react'
import './Account.css'

function Account({ accountType }) {
  let title
  let amount
  let description = 'Available Balance'
  if (accountType === 'checking') {
    title = 'Argent Bank Checking (x8349)'
    amount = '$2,082.79'
  } else if (accountType === 'savings') {
    title = 'Argent Bank Savings (x6712)'
    amount = '$10,928.42'
  } else {
    title = 'Argent Bank Credit Card (x8349)'
    amount = '$184.30'
    description = 'Current Balance'
  }

  return (
    <div className='account'>
      <div className="accountContent">
        <h3 className="accountTitle">{title}</h3>
        <p className="accountAmount">{amount}</p>
        <p className="accountDescription">{description}</p>
      </div>
      <div className="accountTransaction">
        <button className="button_transaction">View transactions</button>
      </div>
    </div>
  )
}

export default Account
