import React from 'react';
import '../Card/card.scss';

const Card = ({ rand, removeCard, id }) => {
  return (
    <div className='card'>
      <h1>{rand}</h1>
      <div className='button'>
        <button onClick={() => removeCard(id)}>X</button>
      </div>
    </div>
  );
};

export default Card;
