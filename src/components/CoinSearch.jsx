import React, { useState } from "react";

import CoinItem from "./CoinItem";

const CoinSearch = ({ coins }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="rounded-div my-4">
      <div
        className="flex flex-col md:flex-row
      justify-between pt-2 pb-6 text-center md:text-right"
      >
        <h1 className="text-2xl font-bold my-2">Coins</h1>
        <form>
          <input
            onChange={(event) => setSearchInput(event.target.value)}
            className="w-full bg-primary border border-input
            px-4 py-2 rounded-2xl shadow-xl"
            value={searchInput}
            type="text"
            placeholder="Search For A Coin"
          />
        </form>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24H</th>
            <th className="hidden md:table-cell">24H Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
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
