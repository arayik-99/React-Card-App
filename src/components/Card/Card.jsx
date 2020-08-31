import React from 'react';
import { Style } from './Style';

import '../Card/card.scss';

const Card = ({ rand, removeCard, id }) => {
  return (
    <Style>
      <h1>{rand}</h1>
      <div className='button'>
        <button onClick={() => removeCard(id)}>X</button>
      </div>
    </Style>
  );
};

export default Card;
