import React from 'react';

import {
  Container,
  Details,
  Title,
  Description,
  Picture,
} from './styles';

import img13 from '../../images/13.png';

const Banner = () => (
  <Container>
    <Details>
      <Title>Cobre um amigo</Title>

      <Description>
        Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças.
      </Description>
    </Details>

    <Picture source={img13} />
  </Container>
);

export default Banner;
