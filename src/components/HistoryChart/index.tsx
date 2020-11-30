import React, { useRef, useEffect, useState } from 'react';
import Chartjs from 'chart.js';

import { Container, Content, Button } from './styles'

interface IPropsData {
  data: { day: [number], week: [number], year: [number], detail: { name: string, current_price: number, price_change_percentage_24h: number } };
}

const HistoryChart: React.FC<IPropsData> = ({ data, ...rest }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day
    }
  }

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [{
            label: `${detail.name} price`,
            data: determineTimeFormat(),
            backgroundColor: "#66CDAA",
            borderColor: "#66CDAA",
            pointRadius: 0,
            // borderWidth: 1
          },
          ],
        },
        options: {
          animation: {
            duration: 2000
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            xAxes: [
              {
                type: "time",
                distribution: "linear",
              },
            ],
          },
        }
      });
    }
  }, [timeFormat])

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <Container>
            <div>
              <span>Valor:</span>
              <p>${detail.current_price.toFixed(2)}</p>
            </div>
            <div>
              <span>Percentual:</span>
              <p>{detail.price_change_percentage_24h > 0 ? `+${detail.price_change_percentage_24h.toFixed(2)}%` : `-${detail.price_change_percentage_24h.toFixed(2)}%`}</p>
            </div>
          </Container>
          <div>
            <Button onClick={() => setTimeFormat("24h")}>24h</Button>
            <Button onClick={() => setTimeFormat("7d")}>7d</Button>
            <Button onClick={() => setTimeFormat("1y")}>1 Ano</Button>
          </div>
        </>
      )
    }
  }

  return (
    <Content>
      <div>{renderPrice()}</div>
      <canvas ref={chartRef} id="myChart" width={250} height={250} />
    </Content>
  );
}

export default HistoryChart;
