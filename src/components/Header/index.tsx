import React from 'react';
import logoImg from '../../assets/reembolso.svg';
import { Link } from 'react-router-dom';

import { Image, Container } from './styles';

const Header: React.FC = () => {
  return (
    <Link to="/">
      <Container>
        <Image src={logoImg} alt="BitCoin" />
        <h1>Coins</h1>
      </Container>
    </Link>
  );
}

export default Header;
