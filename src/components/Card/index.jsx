import React, { memo } from 'react';
import { Card as CardStyled, Button } from './Styles';

const Card = ({ number, removeCard, id }) => (
  <CardStyled>
    <h1>{number}</h1>
    <Button variant="red" onClick={() => removeCard(id)}>
      X
    </Button>
  </CardStyled>
);

export default memo(Card);
