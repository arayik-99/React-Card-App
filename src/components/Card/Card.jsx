import React, { useState } from 'react';
import '../Card/card.scss';

const Card = ({ rand }) => {
  return (
    <div className='card'>
      <h1>{rand}</h1>
    </div>
  );
};

export default Card;
