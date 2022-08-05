import React, { useState } from "react";

import CoinItem from "./CoinItem";

const CoinSearch = ({ coins }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <div>
        <h1>Coins</h1>
        <form>
          <input
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            type="text"
            placeholder="Search For A Coin"
          />
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((coin) => {
              if (coin.name.toLowerCase().includes(searchInput.toLowerCase())) {
                return coin;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
