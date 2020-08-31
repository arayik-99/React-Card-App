import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Instruction from './components/Instruction';

import styled from 'styled-components';
import './app.scss';

const Container = styled.div`
  display: flex;
  flex: 0.2;
  border: 1px solid black;
  height: 100%;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;
  justify-content: space-between;
  border-left: 1px solid black;
`;

const Right = styled.div`
  display: flex;
  flex: 0.2;
  border: 1px solid black;
  height: 100%;
`;

const Root = styled.div`
  height: 99vh;
`;

const App = () => {
  const [cards, setCards] = useState([]);
  const rand = Math.floor(Math.random() * 101);

  const addCard = () => {
    setCards([...cards, { id: cards.length + 1, number: rand }]);
  };

  const sortCards = useCallback(
    (a, b) => {
      cards.sort((a, b) => {
        return a.number - b.number;
      });
      setCards([...cards]);
    },
    [cards]
  );

  const removeCard = useCallback(
    (id) => {
      cards.splice(id, 1);
      setCards([...cards]);
    },
    [cards]
  );

  return (
    <Root>
      <Container>
        <Left>
          <Header addCard={addCard} sortCards={sortCards} />
          <Main cards={cards} removeCard={removeCard} />
          <Footer />
        </Left>
        <Right>
          <Instruction />
        </Right>
      </Container>
    </Root>
  );
};

export default App;
