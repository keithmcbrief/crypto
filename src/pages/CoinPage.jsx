import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default function Coin() {
  const [coin, setCoin] = useState({});
  const params = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data);
    });
  }, [url]);
  return (
    <div>
      <div>
        <img src={coin.image?.large} alt="/" />
        <div>
          <p>{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      <div>
        <div>
          <div>
            {coin.market_data?.current_price ? (
              <p>{coin.market_data.current_price.usd.toLocaleString()}</p>
            ) : null}
            <p>7 Day</p>
          </div>

          <Sparklines data={coin.market_data?.sparkline_7d.price}>
            <SparklinesLine color="teal" />
          </Sparklines>
        </div>
      </div>
    </div>
  );
}
