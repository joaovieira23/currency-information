import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { WatchListContext } from '../../Context/watchList';

import { Container } from './styles';

const AddCoin: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState();
  const { addCoin } = useContext(WatchListContext);

  const availableCoins = [
    {
      value: "bitcoin",
      label: "Bitcoin"
    },
    {
      value: "ethereum",
      label: "Ethereum"
    },
    {
      value: "dex",
      label: "Dex"

    },
    {
      value: "ripple",
      label: "Ripple"
    },
    {
      value: "tether",
      label: "Tether"
    },
    {
      value: "bitcoin-cash",
      label: "Bitcoin Cash"
    },
    {
      value: "litecoin",
      label: "Litecoin"
    },
    {
      value: "eos",
      label: "Eos"
    },
    {
      value: "okb",
      label: "Okb"
    },
    {
      value: "cardano",
      label: "Cardano"
    },
    {
      value: "tezos",
      label: "Tezos"
    },
    {
      value: "puriever",
      label: "Puriever"
    },
    {
      value: "qlink",
      label: "Qlink"
    },
    {
      value: "qube",
      label: "Qube"
    }
  ];

  const handleClick = (coin: any) => {
    setSelectedValue(coin.value);
    addCoin(coin.value);
  }

  return (
    <Container>
      <p>Selecione uma moeda</p>
      <Select
        value={selectedValue}
        onChange={handleClick}
        getOptionLabel={option => option.label}
        options={availableCoins}
      />
    </Container>
  );
}

export default AddCoin;
