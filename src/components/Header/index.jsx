import React, { memo } from 'react';
import { Header as HeaderStyled } from './Styles';

const Header = ({ addCard, sortCards, removeCard }) => {
  return (
    <HeaderStyled>
      <button onClick={addCard}>
        <h2>Add Card</h2>
      </button>
      <button onClick={sortCards}>
        <h2>Sort Cards</h2>
      </button>
    </HeaderStyled>
  );
};

export default memo(Header);
