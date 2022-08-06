import React from "react";
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";

export default function Home({ coins }) {
  return (
    <div>
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  );
}
