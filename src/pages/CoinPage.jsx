import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Coin() {
  const [coin, setCoin] = useState({});
  const params = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true`;
 
  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setCoin(res.data)
    })
  }, [])
  return <div>This is hellocoin</div>;
}
