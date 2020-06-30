import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

const Home = () => {
  return (
    <Container>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

        <BalanceContainer>
          <BalanceTitle>Meu saldo</BalanceTitle>
          <Balance>R$ 0,00</Balance>
        </BalanceContainer>

        <AntDesign name="gift" size={30} color="#10c86e" />
      </Header>
    </Container>
  );
};

export default Home;
