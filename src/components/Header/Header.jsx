import React from 'react';
import { Style } from './Style';

const Header = ({ addCard, sortCards, removeCard }) => {
  return (
    <Style>
      <button onClick={addCard}>
        <h2>Add Card</h2>
      </button>
      <button onClick={sortCards}>
        <h2>Sort Cards</h2>
      </button>
    </Style>
  );
};

export default Header;
