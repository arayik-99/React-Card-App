import React from 'react';
import Card from '../Card/Card';
import { Style } from './Style';

const Main = ({ cards, removeCard }) => {
  return (
    <Style>
      {cards.map((card, index) => (
        <Card id={index} rand={card.randNum} removeCard={removeCard} />
      ))}
    </Style>
  );
};

export default Main;
