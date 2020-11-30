import React, { useState, useEffect, useCallback, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

import HistoryChart from '../../components/HistoryChart';
import coinGecko from '../../services/coinGecko';

import { Form } from './styles';

interface IPropsCoin {
  day: [number], week: [number], year: [number], detail: { name: string, current_price: number, price_change_percentage_24h: number }
}

const CoinDetail: React.FC = () => {
  const [coinData, setCoinData] = useState<IPropsCoin>({} as IPropsCoin);
  const [isLoading, setIsLoading] = useState(false);
  const [investmentValue, setInvestmentValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [coinValueInvestment, setCoinValueInvestment] = useState<IPropsCoin>({} as IPropsCoin);

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

      setIsLoading(false);
    }

    fecthData();
  }, []);

  async function handleRenderGraphic(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const values = await coinGecko.get(`/coins/${id}/market_chart/`, {
      params: {
        vs_currency: "brl",
        days: "365",
      },
    })

    const amount = parseFloat(investmentValue) / values.data.prices[0][1];
    const newValue = values.data.prices.map((price: any) => ({ t: price[0], y: price[1] * amount }));
    console.log(newValue);
    setCoinValueInvestment({ day: [0], week: [0], year: newValue, detail: { name: '', current_price: 0, price_change_percentage_24h: 0 } });

    if (!investmentValue) {
      setInputError('Digite o valor');
      return;
    }

    try {

      setInputError('');
    } catch (err) {
      setInputError('Erro na renderização do gráfico, verifique os dados');
    }
  }

  const renderData = () => {
    if (isLoading) {
      return <div>Loading...</div>
    }
    return (
      <>
        <div>
          <HistoryChart data={coinData} />
        </div>
        <Form hasError={!!inputError} onSubmit={handleRenderGraphic}>
          <input
            value={investmentValue}
            onChange={e => setInvestmentValue(e.target.value)}
            placeholder="Digite o valor em BRL(Real)"
          />
          <button type="submit">Renderizar Gráfico</button>
        </Form>
        { coinValueInvestment ? <HistoryChart data={coinValueInvestment} /> : ''}
      </>
    );
  };

  return renderData();
}

export default CoinDetail;
