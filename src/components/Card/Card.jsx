import React from 'react';
import { Style, Button } from './Style';

const Card = ({ rand, removeCard, id }) => {
  return (
    <Style>
      <h1>{rand}</h1>
      <Button>
        <button onClick={() => removeCard(id)}>X</button>
      </Button>
    </Style>
  );
};

export default Card;
