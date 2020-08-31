import React from 'react';
import HeaderStyle from './HeaderStyle';

const Header = ({ addCard, sortCards, removeCard }) => {
  return (
    <HeaderStyle>
      <button onClick={addCard}>
        <h2>Add Card</h2>
      </button>
      <button onClick={sortCards}>
        <h2>Sort Cards</h2>
      </button>
    </HeaderStyle>
  );
};

export default Header;
