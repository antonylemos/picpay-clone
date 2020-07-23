import React from 'react';
import { Switch } from 'react-native';
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';

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
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Picture,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';

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

    <UseBalance>
      <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

      <Switch />
    </UseBalance>

    <PaymentMethods>
      <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>

      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle>Cadastre seu cartão de crédito</CardTitle>
            <CardInfo>
              Cadastre seu cartão de crédito para poder fazer pagamentos mesmo
              quando não tiver saldo no seu PicPay.
            </CardInfo>
          </CardDetails>

          <Picture source={creditCard} resizeMode="contain" />
        </CardBody>

        <AddButton>
          <AntDesign name="pluscircleo" size={30} color="#0db060" />
          <AddLabel>Adicionar cartão de crédito</AddLabel>
        </AddButton>
      </Card>

      <UseTicketContainer>
        <UseTicketButton>
          <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
          <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicketButton>
      </UseTicketContainer>
    </PaymentMethods>
  </Container>
);

export default Wallet;
