import React from 'react'
import SavedCoin from '../components/SavedCoin'

export default function Account() {
  return (
    <div>
      <div>
        <div>
          <h1>Account</h1>
          <div>
            <p>Welcome, User</p>
          </div>
        </div>
        <div>
          <button>Sign Out</button>
        </div>
      </div>
      <div>
        <div>
          <h1>Saved Coins</h1>
          <SavedCoin />
        </div>
      </div>
    </div>
  )
}
