import React, { useState, useEffect } from 'react';
import AddCoin from '../../components/AddCoin';
import CoinList from '../../components/CoinList';

const CoinSummary: React.FC = () => {
  return (
    <div>
      <AddCoin />
      <CoinList />
    </div>
  );
}

export default CoinSummary;
