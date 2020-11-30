import React, { createContext, useState, useCallback } from 'react';

interface IPropsCoin {
  id: number;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

interface CoinContextData {
  watchList: string[];
  handleDeleteCoin(coin: IPropsCoin): void;
}

export const WatchListContext = createContext<CoinContextData>({} as CoinContextData);

export const WatchListContextProvider: React.FC = ({ children }) => {
  const [watchList, setWatchList] = useState(["bitcoin", "ethereum", "ripple", "litecoin"]);

  const handleDeleteCoin = (coin: any) => {
    setWatchList(watchList.filter(e => {
      return e !== coin.id;
    }));
  }

  return (
    <WatchListContext.Provider value={{ watchList, handleDeleteCoin }}>
      {children}
    </WatchListContext.Provider>
  )
}



