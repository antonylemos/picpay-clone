import React from 'react';

import {
  Container,
  Option,
  Title,
  Picture,
} from './styles';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Pague suas contas sem sair de casa',
    backgroundColor: '#172c4a',

  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Pague suas contas sem sair de casa',
    backgroundColor: '#6a0159',

  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Pague suas contas sem sair de casa',
    backgroundColor: '#4139c8',

  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Pague suas contas sem sair de casa',
    backgroundColor: '#00ab4b',

  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Pague suas contas sem sair de casa',
    backgroundColor: '#ba2f76',

  },
]

const Tips = () => (
  <Container>
    {items.map(({ key, img, title, backgroundColor }) => (
      <Option key={key} backgroundColor={backgroundColor}>
        <Title>{title}</Title>

        <Picture source={img} />
      </Option>
    ))}
  </Container>
);

export default Tips;
