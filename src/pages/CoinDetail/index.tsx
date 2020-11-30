import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import HistoryChart from '../../components/HistoryChart';
import CoinData from '../../components/CoinData';
import coinGecko from '../../services/coinGecko';

interface IPropsCoin {
  day: [number], week: [number], year: [number], detail: { name: string, current_price: number, price_change_percentage_24h: number }
}

const CoinDetail: React.FC = () => {
  const [coinData, setCoinData] = useState<IPropsCoin>({} as IPropsCoin);
  const [isLoading, setIsLoading] = useState(false);

  const formData = (data: any) => {
    return data.map((el: any) => {
      return {
        t: el[0],
        y: el[1].toFixed(2)
      }
    })
  }

  const { id } = useParams() as {
    id: string;
  }

  useEffect(() => {
    const fecthData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([coinGecko.get(`/coins/${id}/market_chart/`, {
        params: {
          vs_currency: "brl",
          days: "1",
        },
      }),

      coinGecko.get(`/coins/${id}/market_chart/`, {
        params: {
          vs_currency: "brl",
          days: "7",
        },
      }),

      coinGecko.get(`/coins/${id}/market_chart/`, {
        params: {
          vs_currency: "brl",
          days: "365",
        },
      }),

      coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "brl",
          ids: id,
        },
      }),

      ]);

      setCoinData({
        day: formData(day.data.prices),
        week: formData(week.data.prices),
        year: formData(year.data.prices),
        detail: detail.data[0],
      });

      console.log({
        day: formData(day.data.prices),
        week: formData(week.data.prices),
        year: formData(year.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    }

    fecthData();
  }, [])

  const renderData = () => {
    if (isLoading) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <HistoryChart data={coinData} />
        <CoinData />
      </div>
    );
  };

  return renderData();
}

export default CoinDetail;
