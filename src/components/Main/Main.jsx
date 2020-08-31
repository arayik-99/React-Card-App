import React from 'react';
import Card from '../Card/Card';
import MainStyle from './MainStyle';

const Main = ({ cards, removeCard }) => {
  return (
    <MainStyle>
      {cards.map((card, index) => (
        <Card id={index} rand={card.randNum} removeCard={removeCard} />
      ))}
    </MainStyle>
  );
};

export default Main;
