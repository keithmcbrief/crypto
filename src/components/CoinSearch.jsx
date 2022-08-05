import React from 'react'

const CoinSearch = ({ coins }) => {
  return (
    <div>
      <div>
        <h1>Search Coins</h1>
        <form>
          <input type="text" placeholder='Search For A Coin' />
        </form>
      </div>
    </div>
  )
}

export default CoinSearch