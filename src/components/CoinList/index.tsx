import React, { useEffect, useState, useContext, useCallback } from 'react';
import coinGecko from '../../services/coinGecko';
import { WatchListContext } from '../../Context/watchList'
import Coin from '../Coin';

interface IPropsCoin {
  id: number;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CoinList: React.FC = () => {
  const [coins, setCoins] = useState<IPropsCoin[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { watchList, handleDeleteCoin } = useContext(WatchListContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "brl",
          ids: watchList.join(","),
        },
      });

      setCoins(response.data);
      setIsLoading(false);
    }

    if (watchList.length > 0) {
      fetchData();
    } else {
      setCoins([]);
    }
  }, [watchList])

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>
    }

    return (
      <ul>
        {coins.map(coin => {
          return <Coin key={coin.id} coin={coin} handleDeleteCoin={handleDeleteCoin} />
        })}
      </ul>
    )
  }

  return (
    <div>{renderCoins()}</div>
  );
}

export default CoinList;
