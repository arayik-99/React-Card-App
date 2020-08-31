import React from 'react';
import './header.scss';

const Header = ({ addCard, sortCards }) => {
  return (
    <div className='header'>
      <button onClick={addCard}>
        <h2>Add Card</h2>
      </button>
      <button onClick={sortCards}>
        <h2>Sort Cards</h2>
      </button>
    </div>
  );
};

export default Header;
