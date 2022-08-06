import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Trending = () => {
    const [trendingCoins, setTrendingCoins] = useState([])
    const url = 'https://api.coingecko.com/api/v3/search/trending';

    useEffect(() => {
        axios.get(url)
        .then((res) => {
            console.log(res)
            setTrendingCoins(res.data)
        })
    }, [])

  return (
    <div>

    </div>
  )
}

export default Trending