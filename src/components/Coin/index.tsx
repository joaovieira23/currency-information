import React from 'react';
import { Link } from 'react-router-dom';
import { FiXSquare } from 'react-icons/fi';
import { Container, ListCoin } from './styles';

interface IDataCoin {
  id: number;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

interface IPropsCoin {
  coin: IDataCoin;
  handleDeleteCoin(coin: IDataCoin): void;
}

const Coin: React.FC<IPropsCoin> = ({ coin, handleDeleteCoin }) => {
  return (
    <Container>
      <ListCoin>
        <Link to={`/details/${coin.id}`}>
          <img src={coin.image} alt="" />
          <div>
            <span>Valor Atual: R${coin.current_price}</span>
            <p>
              Porcentagem de mudança(24hrs): {coin.price_change_percentage_24h < 0 ? `-${coin.price_change_percentage_24h}` : `+${coin.price_change_percentage_24h}`}%
          </p>
          </div>
          <button onClick={(e) => {
            e.preventDefault();
            handleDeleteCoin(coin);
          }}>
            <FiXSquare size={20} />
          </button>
        </Link>
      </ListCoin>
    </Container>
  )
};

export default Coin;
