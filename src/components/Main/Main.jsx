import React, { useState } from 'react';
import Card from '../Card/Card';

import './main.scss';

const Main = ({ cards }) => {
  return (
    <div className='main'>
      {cards.map((card) => (
        <Card rand={card} />
      ))}
    </div>
  );
};

export default Main;
