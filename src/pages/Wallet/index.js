import React from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import {
  Container,
  Header,
  HeaderContent,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
} from './styles';

const Wallet = () => (
  <Container>
    <Header colors={['#52e78c', '#1ab563']}>
      <HeaderContent>
        <Title>Saldo PicPay</Title>

        <BalanceContainer>
          <Value>
            R$ <Bold>0,00</Bold>
          </Value>

          <EyeButton>
            <Feather name="eye" size={28} color="#fff" />
          </EyeButton>
        </BalanceContainer>

        <Info>Seu saldo está rendendo 100% do CDI</Info>

        <Actions>
          <Action>
            <MaterialCommunityIcons name="cash" color="#fff" size={28} />
            <ActionLabel>Adicionar</ActionLabel>
          </Action>

          <Action>
            <FontAwesome name="bank" color="#fff" size={20} />
            <ActionLabel>Retirar</ActionLabel>
          </Action>
        </Actions>
      </HeaderContent>
    </Header>
  </Container>
);

export default Wallet;
