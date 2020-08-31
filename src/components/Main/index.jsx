import React from 'react';
import Card from '../Card';
import { Container } from './Styles';

const Main = ({ cards, removeCard }) => {
  return (
    <Container>
      {cards.map((card, index) => (
        <Card
          key={index}
          id={index}
          number={card.number}
          removeCard={removeCard}
        />
      ))}
    </Container>
  );
};

export default Main;
