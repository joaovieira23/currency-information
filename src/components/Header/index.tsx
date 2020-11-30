import React from 'react';
import logoImg from '../../assets/reembolso.svg';

import { Image, Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Image src={logoImg} alt="BitCoin" />
      <h1>BitCoin</h1>
    </Container>
  );
}

export default Header;
